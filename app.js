const mainBoard = document.querySelector('#textSpace') //the place to render text
const clickableBoard = document.querySelector('#clickBoard') //the place to render text
const p1GameStats = document.querySelector('#game-stats-p1') //the place to render text
const p2GameStats = document.querySelector('#game-stats-p2') //the place to render text
const interactiveTextSpace = document.querySelector('#text-content-for-interactive-board')
let displayPlayerColor = document.querySelector('#currentPlayerColor');
p1GameStats.textContent = `Player 1: Score: 0 \n Seeds: 36 \n Deserts: 4`;
p2GameStats.textContent = `\n Player 2: Score 0 \n Seeds: 36 \n Deserts: 4`

//svg details for pieces
const otherTreeA = '<div class="piece treeA"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M82.1288452,83.4249649L67.8265839,58.3781891l8.4189987-0.0356483L63.4737701,36.4630661l6.2566147,0.0289192  l-9.7137642-16.9974174L50.3047638,2.5l-9.8610153,16.9071693l-9.8629093,16.9071655l6.4361591,0.0295944L24.3145351,58.5730057  l7.6441841-0.0336304L17.8711529,83.0674515l25.5255756,0.137886V97.5h12.6112633V83.2765808L82.1288452,83.4249649z"/></svg></div>'
const otherTreeB = '<div class="piece treeB"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M82.1288452,83.4249649L67.8265839,58.3781891l8.4189987-0.0356483L63.4737701,36.4630661l6.2566147,0.0289192  l-9.7137642-16.9974174L50.3047638,2.5l-9.8610153,16.9071693l-9.8629093,16.9071655l6.4361591,0.0295944L24.3145351,58.5730057  l7.6441841-0.0336304L17.8711529,83.0674515l25.5255756,0.137886V97.5h12.6112633V83.2765808L82.1288452,83.4249649z"/></svg></div>'
const otherSeed = '<div class="piece seedA"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 40" style="enable-background:new 0 0 32 32;" xml:space="preserve"><path d="M6.5,14.5h19c0.276,0,0.5-0.224,0.5-0.5v-3.5c0-2.206-1.794-4-4-4h-5.5V3c0-0.276-0.224-0.5-0.5-0.5S15.5,2.724,15.5,3v3.5  H10c-2.206,0-4,1.794-4,4V14C6,14.276,6.224,14.5,6.5,14.5z"/><path d="M16,29.5c4.687,0,8.5-3.813,8.5-8.5v-5.5h-17V21C7.5,25.687,11.313,29.5,16,29.5z"/></svg></div>'
const desertPiece = '<div class="piece desert"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z"/></svg></div>'
const emptyPiece = '<div class="piece empty"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></div>'
const seedWheet = '<div class="piece seedB"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 40" style="enable-background:new 0 0 32 32;" xml:space="preserve"><path d="M6.5,14.5h19c0.276,0,0.5-0.224,0.5-0.5v-3.5c0-2.206-1.794-4-4-4h-5.5V3c0-0.276-0.224-0.5-0.5-0.5S15.5,2.724,15.5,3v3.5  H10c-2.206,0-4,1.794-4,4V14C6,14.276,6.224,14.5,6.5,14.5z"/><path d="M16,29.5c4.687,0,8.5-3.813,8.5-8.5v-5.5h-17V21C7.5,25.687,11.313,29.5,16,29.5z"/></svg></div>'

let ouputPrint = document.getElementById("output")
//ouputPrint.textContent = `Player-1's move`
let userInput;

let textBoard = '' //holds the text in a string
let allStates = []; //hold the states of all Spaces
let gameBoard = []; //creates an array of Spaces


class Gameboard {
    //empty array to hold Spaces objects
    spaces = [];
    //player scores
    p1Score = 0;
    p2Score = 0;
    //player seedbank
    p1SeedBank = 0;
    p2SeedBank = 0;
    currentPlayer = 1;
    //player supply [seeds, deserts]
    p1Supply = [36, 4]
    p2Supply = [36, 4]

    constructor(width) {
        //the only input we need is width
        this.width = width
        //add the buffer border
        this.borderWidth = width + 2;
        for (let index = 0; index < (this.borderWidth * this.borderWidth); index++) {
            //initialize first row border
            if (index < this.borderWidth) {
                this.spaces.push(new Space(index, 'XX'))
            }
            //initialize left side border
            else if (index % this.borderWidth == 0) {
                this.spaces.push(new Space(index, 'XX'))
            }
            //initialize right side border
            else if (index % this.borderWidth == (this.borderWidth - 1)) {
                this.spaces.push(new Space(index, 'XX'))
            }
            //initialize border on bottom
            else if (index > ((this.borderWidth * this.borderWidth) - this.borderWidth)) {
                this.spaces.push(new Space(index, 'XX'))
            }
            //everything else is the interior of the board
            else {
                //creates a n empty space in the board
                this.spaces.push(new Space(index, '++'))
            }

        }
        this.createClickBoard()
        //now that all the spaces are initialized, we need to update their neighbor states
        for (let index = this.borderWidth; index < ((this.borderWidth * this.borderWidth) - this.borderWidth); index++) {
            //for each new created space in our array, update their neighborspaces
            if ((index % this.borderWidth != 0) && (index % this.borderWidth != (this.borderWidth - 1))) {
                //if our logic above worked, the only updated Spaces will not be XX's
                this.updateNeighborStates(index)
            }
        }
    }
    //creates a UI board of div elements
    createClickBoard() {
        this.spaces.forEach((space) => {
            //creates a new div
            const square = document.createElement("div")
            //adds attributes and classes to these divs
            square.classList.add("square")
            square.setAttribute("square-id", space.id)
            //depending on the state, render the board. 
            if (space.state == "XX") {
                square.innerHTML = desertPiece;
            }
            else {
                square.innerHTML = emptyPiece;
                square.firstChild?.setAttribute('draggable', true)
                //adds event listeners 
                square.addEventListener('click', function () {
                    const radioValue = document.querySelector('input[name="piece-selection"]:checked');
                    //check that there is a value in the radio button
                    if (radioValue) {
                        const ourMove = new Move(myBoard.currentPlayer, "XX", square.getAttribute("square-id"))
                        if (radioValue.value == "desert") {
                            //we had a desert, do nothing

                            myBoard.processMove(ourMove);
                        }
                        else {
                            //else add a seed
                            if (myBoard.currentPlayer == 1) {
                                //seed for player one
                                ourMove.piece = "S1";

                                myBoard.processMove(ourMove);
                            }
                            else {
                                //seed for player two
                                ourMove.piece = "S2";

                                myBoard.processMove(ourMove);
                            }

                        }
                        //update the text components
                        p1GameStats.textContent = `Player 1: Score: ${myBoard.p1Score} \n Seeds: ${myBoard.p1Supply[0]} \n Deserts: ${myBoard.p1Supply[1]}`;
                        p2GameStats.textContent = `Player 1: Score: ${myBoard.p2Score} \n Seeds: ${myBoard.p2Supply[0]} \n Deserts: ${myBoard.p2Supply[1]}`;
                        interactiveTextSpace.textContent = `Select Move for Player ${myBoard.currentPlayer} `
                        //quick matches the colors
                        if (myBoard.currentPlayer == 1) {
                            displayPlayerColor.style.backgroundColor = '#608733';
                        }
                        else {
                            displayPlayerColor.style.backgroundColor = '#2a9d8f';
                        }
                        myBoard.updateClickBoard()
                    }

                }, true);
                //square.addEventListener('dragstart', dragStart)
                //square.addEventListener('dragover', dragOver)
                //square.addEventListener('drop', dragDrop)//listen for drop event
            }
            clickableBoard.append(square)

        })
    }
    updateClickBoard() {
        //wipe the inner HTML of the clickable Board
        clickableBoard.innerHTML = "";
        this.spaces.forEach((space) => {
            //creates a new div
            const square = document.createElement("div")
            //adds attributes and classes to these divs
            square.classList.add("square")
            square.setAttribute("square-id", space.id)
            //depending on the state, render the board. 
            if (space.state == "XX") {
                square.innerHTML = desertPiece;
            }
            else if (space.state == "S1") {
                square.innerHTML = otherSeed;
                square.firstChild?.setAttribute('draggable', true)
            }
            else if (space.state == "S2") {
                square.innerHTML = seedWheet;
                square.firstChild?.setAttribute('draggable', true)
            }
            else if (space.state == "T1") {
                square.innerHTML = otherTreeA;
                square.firstChild?.setAttribute('draggable', false)
            }
            else if (space.state == "T2") {
                square.innerHTML = otherTreeB;
                square.firstChild?.setAttribute('draggable', false)
            }
            else {
                square.innerHTML = emptyPiece;
                //adds event listeners 
                square.addEventListener('click', function () {
                    const radioValue = document.querySelector('input[name="piece-selection"]:checked');
                    //check that there is a value in the radio button
                    if (radioValue) {
                        const ourMove = new Move(myBoard.currentPlayer, "XX", square.getAttribute("square-id"))
                        if (radioValue.value == "desert") {
                            //we had a desert, do nothing
                            myBoard.processMove(ourMove);
                        }
                        else {
                            //else add a seed
                            if (myBoard.currentPlayer == 1) {
                                //seed for player one
                                ourMove.piece = "S1";
                                myBoard.processMove(ourMove);
                            }
                            else {
                                //seed for player two
                                ourMove.piece = "S2";
                                myBoard.processMove(ourMove);
                            }

                        }
                        console.log("clicked! " + " selected: " + radioValue.value)
                        //update the text components
                        p1GameStats.textContent = `Player 1: Score: ${myBoard.p1Score} \n Seeds: ${myBoard.p1Supply[0]} \n Deserts: ${myBoard.p1Supply[1]}`;
                        p2GameStats.textContent = `Player 1: Score: ${myBoard.p2Score} \n Seeds: ${myBoard.p2Supply[0]} \n Deserts: ${myBoard.p2Supply[1]}`;
                        interactiveTextSpace.textContent = `Select Move for Player ${myBoard.currentPlayer}`
                        //quick matches the colors
                        if (myBoard.currentPlayer == 1) {
                            displayPlayerColor.style.backgroundColor = '#608733';
                        }
                        else {
                            displayPlayerColor.style.backgroundColor = '#2a9d8f';
                        }
                        myBoard.updateClickBoard()
                        console.log("current Player: " + myBoard.currentPlayer)
                    }

                }, true);
                //square.addEventListener('dragstart', dragStart)
                //square.addEventListener('dragover', dragOver)
                //square.addEventListener('drop', dragDrop)//listen for drop event
            }
            clickableBoard.append(square)

        })
    }

    /*
       Fixed HUGE error -- "id" was reading as a string not an integer
    */
    updateNeighborStates(id) {

        //spaces is the array of spaces within the gameboard
        //feeds in the array of spaces
        //every gameBoard has a width (plus border of XX)

        //sanity checks to ensure we did not catch a border space
        if (this.spaces[id].id < this.borderWidth) {
            //if this id is less than the width plus border 
            //we are in the first row of spaces = edge of the board
            console.log("edge of board")
        }
        else if (this.spaces[id].id % this.borderWidth == 0) {
            //if we are at the left edge of the board where mod width == 0
            console.log("edge of board")
        }
        else if (this.spaces[id].id % this.borderWidth == (this.borderWidth - 1)) {
            //of we are at the right edge of the board where mod width = width - 1
            console.log("edge of board")
        }
        else if (this.spaces[id].id > ((this.borderWidth * this.borderWidth) - this.borderWidth)) {
            //if we are exactly one width from the end of the ID's == last row of the board
            console.log("edge of board")
        }

        else {
            let movableID = new Number(id)
            let fixedID = new Number(id)
            /*
            Helpful context for this function:
     
            array map of neighborStates where XX is this Space and thus neighborStates[00]
            is the top middle neighbor, neighborStates[01] is the top right neighbor, 
            neighborStates[02] is the right neighbor etc...
                    07 00 01
                    06 XX 02
                    05 04 03
           
            in boardGame[] space, the width of a board is fixed, and ID's are assigned
            beginning with top left and proceeding down, meaning the ID of 
            the space above is just this.id - width. See the visual below. 
     
            If we were accessing the gameBoard from a Square with ID = 12, it's neighbors
            (beginning with the top and moving clockwise) would be as follows:
     
            Global IDs within neighborStates[]
     
                04 05 06
                11 HH 13
                18 19 20
                                                                
            Global gameBoard ID's
     
                00 01 02 03 04 05 06
                07 08 09 10 11 12 13
                14 15 16 17 18 19 20
                21 22 23 24 25 26 27
                28 29 30 31 32 33 34
                35 36 37 38 39 40 41
                42 43 44 45 46 47 48
     
            In actually, there is an automatically rendered 'border' of squares all
            assigned to a state of "XX" making the board actually render like below:
     
             Global gameBoard ID's (including rendered XX border spaces)
     
                XX XX XX XX XX XX XX XX XX
                XX 00 01 02 03 04 05 06 XX
                XX 07 08 09 10 11 12 13 XX
                XX 14 15 16 17 18 19 20 XX
                XX 21 22 23 24 25 26 27 XX
                XX 28 29 30 31 32 33 34 XX
                XX 35 36 37 38 39 40 41 XX
                XX 42 43 44 45 46 47 48 XX
                XX XX XX XX XX XX XX XX XX
            */

            //first, set the horizontal and vertical neighbors...
            //grab the Space above us and update it's bottom middle neigborState
            movableID = fixedID - this.borderWidth;
            this.spaces[movableID].neighborStates[4] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //
            //grab the Space above us and update it's bottom middle neigborState
            movableID = fixedID + this.borderWidth;
            this.spaces[movableID].neighborStates[0] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //

            //grab the Space to the right of us and update it's left neigborState
            movableID = fixedID + 1;
            this.spaces[movableID].neighborStates[6] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //

            //grab the Space to the left of us and update it's right neigborState
            movableID = fixedID - 1;
            this.spaces[movableID].neighborStates[2] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //

            //now the diagonal neighbors...
            //grab the Space above us to the left and update it's bottom left neigborState
            movableID = fixedID - (this.borderWidth - 1);
            this.spaces[movableID].neighborStates[5] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //
            //grab the Space below us to the left and update it's top right neigborState
            movableID = fixedID + (this.borderWidth - 1);
            this.spaces[movableID].neighborStates[1] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //
            //grab the Space above us to the right and update it's bottom right neigborState
            movableID = fixedID - (this.borderWidth + 1);
            this.spaces[movableID].neighborStates[3] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //
            //grab the Space below us to the right and update it's top left neigborState
            movableID = fixedID + (this.borderWidth + 1)
            this.spaces[movableID].neighborStates[7] = this.spaces[id].state;
            //check for koya 
            this.checkKoya(movableID)
            //----- Next Neighbor ---- //

        }

    }

    updateScore() {
        //updates scores
    }

    updateSeedBanks() {
        //updates seedbank data
    }

    checkMove(move) {
        //confirms target space is not occupied
        if (this.spaces[move.position].player == null) {
            //confirms current player is player move
            if ((move.player == this.currentPlayer)) {
                //confirms this position is valid
                if (this.checkValidPosition(move.position)) {
                    //process for player one move
                    if (move.player == 1) {
                        //if the move is XX, check if we have deserts left
                        if (move.piece == "XX" && (this.p1Supply[1] > 0)) {
                            //assigns the player of the space to null for deserts
                            this.spaces[move.position].player = null
                            return true;
                        }
                        //if the move is Seed, check if we have seeds left
                        else if (move.piece == "S1" && (this.p1Supply[0] > 0)) {
                            //assigns the player of the space
                            this.spaces[move.position].player = "P1"
                            return true;
                        }
                        else {
                            //if supply is empty, read supply emtpty
                            console.log("not valid move for P1" + "\n Supply: " + this.p1Supply[0] + this.p1Supply[1]);
                            return false;
                        }
                    }
                    else {
                        //same logic for player 2
                        if (move.piece == "XX" && (this.p2Supply[1] > 0)) {
                            //assigns the player of the space to null for desert
                            this.spaces[move.position].player = null
                            return true;
                        }
                        else if (move.piece == "S2" && (this.p2Supply[0] > 0)) {
                            //assigns the player of the space
                            this.spaces[move.position].player = "P2"
                            return true;
                        }
                        else {
                            console.log("not valid move for P2" + "\n Supply: " + this.p2Supply[0] + this.p2Supply[1]);
                            return false;
                        }
                    }
                }
                else {
                    // invalid position
                    console.log("space is off the board")
                    return false;
                }
            }
            else {
                //wrong player
                console.log("wrong player")
            }
        }
        else {
            //space is occupied return false
            console.log("not an empty space")
            return false;
        }
    }

    processMove(move) {
        //checks if valid move
        if (this.checkMove(move)) {
            //grab the space with the ID then updates the state
            this.spaces[move.position].state = move.piece;
            //state change has occured, update neighbors
            this.updateNeighborStates(move.position)
            //checks for koya created at that space
            this.checkKoya(move.position)
            //updates scores
            this.updateScores();
            //update the supply of pieces for each player
            if (move.player == 1) {
                if (move.piece == "XX") {
                    //decrement deserts 
                    this.p1Supply[1]--;
                }
                else if (move.piece == "S1") {
                    //decrement seeds
                    this.p1Supply[0]--;
                }
                else console.log("That wasn't a valid peice input...")
            }
            else {
                if (move.piece == "XX") {
                    //decrement deserts 
                    this.p2Supply[1]--;
                }
                else if (move.piece == "S2") {
                    //decrement seeds
                    this.p2Supply[0]--;
                }
                else console.log("That wasn't a valid peice input...")

            }
            //update current player
            if (this.currentPlayer == 1) {
                this.currentPlayer = 2;
            }
            else this.currentPlayer = 1;
            //has to re-print the board
            printBoard()
            //re-prints the bottom board too
            this.updateClickBoard
        }
        else {
            //process invalid move
            console.log("INVALID MOVE")
            console.log(this)
        }
    }

    checkValidPosition(position) {
        // first row border
        if (position < this.borderWidth) {
            console.log("position: " + position + " in top border")
            return false;
        }
        // left side border
        else if (position % this.borderWidth == 0) {
            console.log("position: " + position + " in left side border")
            return false;
        }
        // right side border
        else if (position % this.borderWidth == (this.borderWidth - 1)) {
            console.log("position: " + position + " in right side border")
            return false;
        }
        //border on bottom
        else if (position > ((this.borderWidth * this.borderWidth) - this.borderWidth)) {
            console.log("position: " + position + " in bottom border")
            return false;
        }
        //everything else is the interior of the board
        else return true;
    }

    checkKoya(id) {
        console.log("space: " + id + " checking for koya. Neighborstates: ")
        console.log(this.spaces[id].neighborStates)
        //don't apply to XX bricks or empty spaces which have player == null
        if (this.spaces[id].player != null) {
            //------CHECKING FOR "+" SHAPE KOYA---------
            //checks if neighbors are null
            if ((this.spaces[id].neighborStates[0] != null && this.spaces[id].neighborStates[4] != null) && (this.spaces[id].neighborStates[2] != null && this.spaces[id].neighborStates[6] != null)) {
                //checks if neighbor states top and bottom are pairs
                if ((this.spaces[id].neighborStates[0] == this.spaces[id].neighborStates[4]) && this.spaces[id].state == this.spaces[id].neighborStates[4]) {
                    console.log("one branch matches ")
                    if ((this.spaces[id].neighborStates[2] == this.spaces[id].neighborStates[6]) && (this.spaces[id].state == this.spaces[id].neighborStates[2])) {
                        console.log('plus shape koya at ' + id)
                        this.spaces[id].points++;
                        if (this.spaces[id].player == "P1") {
                            this.spaces[id].state = "T1"
                            //need to update appropriate roots
                        }
                        else {
                            this.spaces[id].state = "T2"
                            //need to update appropriate roots
                        }
                    }
                }
            }
            //------CHECKING FOR "X" SHAPE KOYA---------
            //checks if neighbors are null
            if ((this.spaces[id].neighborStates[1] != null && this.spaces[id].neighborStates[7] != null) && (this.spaces[id].neighborStates[3] != null && this.spaces[id].neighborStates[5] != null)) {
                //checks if neighbor states top and bottom are pairs
                if ((this.spaces[id].neighborStates[1] == this.spaces[id].neighborStates[5]) && this.spaces[id].state == this.spaces[id].neighborStates[5]) {
                    console.log("one branch matches ")
                    if ((this.spaces[id].neighborStates[7] == this.spaces[id].neighborStates[3]) && (this.spaces[id].state == this.spaces[id].neighborStates[3])) {
                        console.log('X shape koya at ' + id)
                        this.spaces[id].points++;
                        if (this.spaces[id].player == "P1") {
                            this.spaces[id].state = "T1"
                        }
                        else this.spaces[id].state = "T2"
                    }
                }
            }
            //------CHECKING FOR " `-. " SHAPE KOYA---------
            //checks if neighbors are null
            if ((this.spaces[id].neighborStates[2] != null) && (this.spaces[id].neighborStates[6] != null) && (this.spaces[id].neighborStates[7] != null) && (this.spaces[id].neighborStates[3] != null)) {
                //checks if neighbor states left and right are pairs
                if ((this.spaces[id].neighborStates[2] == this.spaces[id].neighborStates[6]) && this.spaces[id].state == this.spaces[id].neighborStates[6]) {
                    console.log("one branch matches ")
                    if ((this.spaces[id].neighborStates[7] == this.spaces[id].neighborStates[3]) && (this.spaces[id].state == this.spaces[id].neighborStates[3])) {
                        console.log(' `-. shape koya at ' + id)
                        this.spaces[id].points++;
                        if (this.spaces[id].player == "P1") {
                            this.spaces[id].state = "T1"
                        }
                        else this.spaces[id].state = "T2"
                    }
                }
            }//END CHECKING FOR SHAPE

            //------CHECKING FOR " .-` " SHAPE KOYA---------
            //checks if neighbors are null
            if ((this.spaces[id].neighborStates[2] != null) && (this.spaces[id].neighborStates[6] != null) && (this.spaces[id].neighborStates[1] != null) && (this.spaces[id].neighborStates[5] != null)) {
                //checks if neighbor states left and right are pairs
                if ((this.spaces[id].neighborStates[2] == this.spaces[id].neighborStates[6]) && this.spaces[id].state == this.spaces[id].neighborStates[6]) {
                    console.log("one branch matches ")
                    if ((this.spaces[id].neighborStates[1] == this.spaces[id].neighborStates[5]) && (this.spaces[id].state == this.spaces[id].neighborStates[5])) {
                        console.log(' .-` shape koya at ' + id)
                        this.spaces[id].points++;
                        if (this.spaces[id].player == "P1") {
                            this.spaces[id].state = "T1"
                        }
                        else this.spaces[id].state = "T2"
                    }
                }
            }//END CHECKING FOR SHAPE

            //------CHECKING FOR " .|` " SHAPE KOYA---------
            //checks if neighbors are null
            if ((this.spaces[id].neighborStates[0] != null) && (this.spaces[id].neighborStates[4] != null) && (this.spaces[id].neighborStates[1] != null) && (this.spaces[id].neighborStates[5] != null)) {
                //checks if neighbor states left and right are pairs
                if ((this.spaces[id].neighborStates[0] == this.spaces[id].neighborStates[4]) && this.spaces[id].state == this.spaces[id].neighborStates[4]) {
                    console.log("one branch matches ")
                    if ((this.spaces[id].neighborStates[1] == this.spaces[id].neighborStates[5]) && (this.spaces[id].state == this.spaces[id].neighborStates[5])) {
                        console.log(' .|` shape koya at ' + id)
                        this.spaces[id].points++;
                        if (this.spaces[id].player == "P1") {
                            this.spaces[id].state = "T1"
                        }
                        else this.spaces[id].state = "T2"
                    }
                }
            }//END CHECKING FOR SHAPE

            //------CHECKING FOR " `|. " SHAPE KOYA---------
            //checks if neighbors are null
            if ((this.spaces[id].neighborStates[0] != null) && (this.spaces[id].neighborStates[4] != null) && (this.spaces[id].neighborStates[7] != null) && (this.spaces[id].neighborStates[3] != null)) {
                //checks if neighbor states left and right are pairs
                if ((this.spaces[id].neighborStates[0] == this.spaces[id].neighborStates[4]) && this.spaces[id].state == this.spaces[id].neighborStates[4]) {
                    console.log("one branch matches ")
                    if ((this.spaces[id].neighborStates[7] == this.spaces[id].neighborStates[3]) && (this.spaces[id].state == this.spaces[id].neighborStates[3])) {
                        console.log(' `|. shape koya at ' + id)
                        this.spaces[id].points++;
                        if (this.spaces[id].player == "P1") {
                            this.spaces[id].state = "T1"
                        }
                        else this.spaces[id].state = "T2"
                    }
                }
            }//END CHECKING FOR SHAPE

        }

    }

    updateScores() {
        //create temporary variables to track cumulative score
        let floatingP1Score = 0;
        let floatingP2Score = 0;
        this.spaces.forEach(space => {
            if (space.points != 0) {
                if (space.player == "P1") {
                    floatingP1Score += space.points;
                }
                else {
                    floatingP2Score += space.points;
                }
            }
        });
        this.p1Score = floatingP1Score;
        this.p2Score = floatingP2Score;
    }

}


class Move {
    //player is hopefully a string
    //position is hopefully a Space ID
    constructor(player, piece, position) {
        this.player = player;
        this.piece = piece; // XX or S1 or S2
        this.position = position;
    }
}


//Hardest working class in the game logic, the Space object
class Space {
    constructor(id, state) {
        this.id = id; //each square will be created with an ID
        this.state = state //can be null, XX, R, T
    }
    //define our basic variables for this object
    points = 0;
    player = null; //will be "P1" or "P2" when pieces are placed
    burst = false;
    seedBank = 0;

    neighborStates = [null, null, null, null, null, null, null, null] // array to hold 8 neighbors
    /*
        map of neighbor states, X is this Space, ID's mapped clockwise beginning at top

                07 00 01
                06 XX 02
                05 04 03

        */

    printInfo() {
        console.log(`Hello, my ID is ${this.id} and my info is ${this.player}${this.state}`);
    }

    seedBurst() {
        //if we have bank to burst, return that value
        if (this.seedBank > 0) {
            this.burst = true;
            return this.seedBank;
        }
        //else return false -- we have no bank
        else return false;
    }
}

/*
OLD FUNCTION -- moved to inside Gameboard
function createBoard(width) {
    //add the buffer border
    const borderWidth = width + 2;

    for (let index = 0; index < (borderWidth * borderWidth); index++) {
        //initialize first row border
        if (index < borderWidth) {
            gameBoard.push(new Space(index, 'XX'))
        }
        //initialize left side border
        else if (index % borderWidth == 0) {
            gameBoard.push(new Space(index, 'XX'))
        }
        //initialize right side border
        else if (index % borderWidth == (borderWidth - 1)) {
            gameBoard.push(new Space(index, 'XX'))
        }
        //initialize border on bottom
        else if (index > ((borderWidth * borderWidth) - borderWidth)) {
            gameBoard.push(new Space(index, 'XX'))
        }
        //everything else is the interior of the board
        else gameBoard.push(new Space(index, '++'))
    }
}
*/
function processClickInput(spaceID) {
    //selection of piece for a move on the board
    const pieceSelection = document.querySelector('input[name="piece-selection"]:checked');
    if (pieceSelection) {
        //we have selected desert or seed
        let currentMove = new Move(0, 'XX', spaceID) //creates the current move
        console.log(pieceSelection.value + " at location " + spaceID);
        //create and process move
        if (this.currentPlayer == 1) {
            if (pieceSelection.value == "desert") {
                currentMove.piece = "XX"
                currentMove.player = 1;
            }
            else {
                currentMove.piece = "S1"
                currentMove.player = 1;
            }
        }
        else {
            if (pieceSelection.value == "desert") {
                currentMove.piece = "XX"
                currentMove.player = 2;
            }
            else {
                currentMove.piece = "S2"
                currentMove.player = 2;
            }
        }
        console.log(currentMove);
    } else {
        console.log('No radio button selected.');
    }
    console.log("this space ID: " + spaceID)

}
function printBoard() {
    //maps the state values of each Space into the textBoard
    allStates = myBoard.spaces.map((space) => space.state);

    const boardFormattedStates = allStates.map((element, index) => {
        if (index === 0) {
            return element;
        }
        else if (index % (myBoard.width + 2) === 0) {
            return `\n` + element;
        } else {
            return element;
        }
    });
    //convert allStates into a string that folds at the desired width
    textBoard = boardFormattedStates.join(" ");
    mainBoard.textContent = textBoard;
}


//END OF FUNCTIONING GAME LOGIC


//always remember to call your functions AFTER initializing everything

const myBoard = new Gameboard(9)
printBoard()
console.log("_______BEGIN LIVE MODE_______")
//createClickBoard()



/*
left to do:
- update score
- make roots
- 

done:
- Corrected and de-bug updateNeighbors 
- check for koyas
- HUGE WIN!! Fixed updateNeighbors by creating fixed variables instead of strings
- tracking supply of seeds and deserts
- updating data based on input moves processed
- fixed check logic on checkValidPosition
- render board correctly in simple text form
- updateNeighbors is working!
- Start playing with inputs
- processMove function "one equal one" fixed
*/

