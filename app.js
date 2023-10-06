const mainBoard = document.querySelector('#textSpace') //the place to render text
mainBoard.style.whiteSpace = 'pre-wrap';

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
                //creates a "live" space in the board
                this.spaces.push(new Space(index, '++'))
            }

        }
        //now that all the spaces are initialized, we need to update their neighbor states
        for (let index = this.borderWidth; index < ((this.borderWidth * this.borderWidth) - this.borderWidth); index++) {
            //for each new created space in our array, update their neighborspaces
            if ((index % this.borderWidth != 0) && (index % this.borderWidth != (this.borderWidth - 1))) {
                //if our logic above worked, the only updated Spaces will not be XX's
                this.updateNeighborStates(index)
            }
        }


    }
    updateNeighborStates(id) {
        //feeds in the array of spaces
        //every gameBoard has a width (plus border of XX)

        //sanity checks to ensure we did not catch a border space
        if (this.spaces[id] < this.borderWidth) {
            //if this id is less than the width plus border 
            //we are in the first row of spaces = edge of the board
            console.log("edge of board")
        }
        else if (this.spaces[id] % this.borderWidth == 0) {
            //if we are at the left edge of the board where mod width == 0
            console.log("edge of board")
        }
        else if (this.spaces[id] % this.borderWidth == (this.borderWidth - 1)) {
            //of we are at the right edge of the board where mod width = width - 1
            console.log("edge of board")
        }
        else if (this.spaces[id] > ((this.borderWidth * this.borderWidth) - this.borderWidth)) {
            //if we are exactly one width from the end of the ID's == last row of the board
            console.log("edge of board")
        }

        else {
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
            console.log(this.spaces[id])
            //first, set the horizontal and vertical neighbors...
            //grab the Space above us and update it's bottom middle neigborState
            this.spaces[id - this.borderWidth].neighborStates[4] = this.spaces[id].state;
            //grab the Space below us and update it's top middle neigborState
            this.spaces[id + this.borderWidth].neighborStates[0] = this.spaces[id].state;
            //grab the Space to the right of us and update it's left neigborState
            this.spaces[id + 1].neighborStates[6] = this.spaces[id].state;
            //grab the Space to the left of us and update it's right neigborState
            this.spaces[id - 1].neighborStates[2] = this.spaces[id].state;

            //now the diagonal neighbors...
            //grab the Space above us to the left and update it's bottom right neigborState
            this.spaces[id - (this.borderWidth - 1)].neighborStates[3] = this.spaces[id].state;
            //grab the Space below us to the left and update it's top right neigborState
            this.spaces[id + (this.borderWidth - 1)].neighborStates[1] = this.spaces[id].state;
            //grab the Space above us to the right and update it's bottom left neigborState
            this.spaces[id - (this.borderWidth + 1)].neighborStates[5] = this.spaces[id].state;
            //grab the Space below us to the right and update it's top left neigborState
            this.spaces[id + (this.borderWidth + 1)].neighborStates[7] = this.spaces[id].state;
        }

    }
    updateScore() {
        //updates scores
    }

    updateSeedBanks() {
        //updates seedbank data
    }

    processMove(move) {
        if ((move.getPlayer == this.currentPlayer) && this.checkValidPosition(move.position)) {
            //checks if valid move

        }
        else {
            //process invalid move
        }
    }
    checkValidPosition(position) {
        // first row border
        if (position < this.borderWidth) {
            console.log
            return false;
        }
        // left side border
        else if (position % this.borderWidth == 0) {
            return false;
        }
        // right side border
        else if (position % this.borderWidth == (this.borderWidth - 1)) {
            return false;
        }
        //border on bottom
        else if (position > ((this.borderWidth * this.borderWidth) - this.borderWidth)) {
            return false;
        }
        //everything else is the interior of the board
        else return true;
    }

}


class Move {
    //player is hopefully a string
    //position is hopefully a Space ID
    constructor(player, position) {
        this.player = player;
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
    getPlayer() {
        return this.player;
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
    player = null; //will be "GG" or "BB" when pieces are placed
    burst = false;
    seedBank = 0;

    neighborStates = ["XX", "XX", "XX", "XX", "XX", "XX", "XX", "XX"] // array to hold 8 neighbor states
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

function printBoard(board) {
    //maps the state values of each Space into the textBoard
    allStates = board.spaces.map((space) => space.state);

    const boardFormattedStates = allStates.map((element, index) => {
        if (index === 0) {
            return element;
        }
        else if (index % (board.width + 2) === 0) {
            return `\n` + element;
        } else {
            return element;
        }
    });
    //convert allStates into a string that folds at the desired width
    textBoard = boardFormattedStates.join(" ");
    mainBoard.textContent = textBoard;
}

//END OF GAME LOGIC

//very simple input function to get us started
function checkInput() {
    const input = document.getElementById("input").value;
    const integerValue = parseInt(input, 10);

    if (!Number.isInteger(integerValue)) {
        document.getElementById("output").innerHTML = `Not an Integer -- Input is: ${input}`;
    } else {
        document.getElementById("output").innerHTML = `Input is an integer: ${input}`;
    }
}
//always remember to call your functions AFTER initializing everything

//createBoard(7)
//printBoard(gameBoard)
//console.log(gameBoard)
const myBoard = new Gameboard(9)
console.log(myBoard)
printBoard(myBoard)


/*
left to do:
- Start playing with inputs

done:
- render board correctly in simple text form
*/

