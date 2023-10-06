//this file will be used to actuall deal with the user inputs etc.
//very simple input function to get us started
function checkInput() {
    input = document.getElementById("input").value;
    const integerValue = parseInt(input, 10);

    if (!Number.isInteger(integerValue)) {
        document.getElementById("output").innerHTML = `Not an Integer -- Input is: ${input}`;
    } else {
        document.getElementById("output").innerHTML = `Input is an integer: ${input}`;
    }
    userInput = input;
}

