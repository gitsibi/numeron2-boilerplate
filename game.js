// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional


document.addEventListener("DOMContentLoaded", function() {
    // Variables to store the numbers
    var number1 = 0;
    var number2 = 0;
    var number3 = 0;

    // Reference to the HTML elements displaying numbers
    var number1Element = document.getElementById("number1");
    var number2Element = document.getElementById("number2");
    var number3Element = document.getElementById("number3");

    // Function to generate random numbers
    function generateRandomNumbers() {
        number1 = Math.floor(Math.random() * 100); // Random number between 0 and 100
        number2 = Math.floor(Math.random() * 100); // Random number between 0 and 100
        number1Element.textContent = number1;
        number2Element.textContent = number2;
    }

    // Function to generate a random operator
    function generateRandomOperator() {
        var operators = ['+', '-', '*', '/', '%'];
        return operators[Math.floor(Math.random() * operators.length)];
    }

    // Function to calculate result based on operator
    function calculateResult(operator) {
        switch (operator) {
            case '+':
                return number1 + number2;
            case '-':
                return number1 - number2;
            case '*':
                return number1 * number2;
            case '/':
                return number1 / number2;
            case '%':
                return number1 % number2;
            default:
                return null;
        }
    }

    // Function to update numbers and operator
    function updateNumbersAndOperator() {
        generateRandomNumbers();
        var operator = generateRandomOperator();
        number3 = calculateResult(operator);
        number3Element.textContent = number3;
        return operator;
    }

    // Event listeners for operator buttons
    document.getElementById("plus").addEventListener("click", function() {
        if (calculateResult("+") === number3) {
            updateNumbersAndOperator();
            updateScore();
        }
    });

    document.getElementById("minus").addEventListener("click", function() {
        if (calculateResult("-") === number3) {
            updateNumbersAndOperator();
            updateScore();
        }
    });

    document.getElementById("mul").addEventListener("click", function() {
        if (calculateResult("*") === number3) {
            updateNumbersAndOperator();
            updateScore();
        }
    });

    document.getElementById("divide").addEventListener("click", function() {
        if (calculateResult("/") === number3) {
            updateNumbersAndOperator();
            updateScore();
        }
    });

    document.getElementById("modulus").addEventListener("click", function() {
        if (calculateResult("%") === number3) {
            updateNumbersAndOperator();
            updateScore();
        }
    });

    // Initial generation of numbers and operator
    updateNumbersAndOperator();

    // Timer functionality
    var timeLeft = 20; // Initial time in seconds
    var timerDisplay = document.getElementById("timer");
    var timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval); // Stop the timer
            window.location.href = "gameover.html"; // Redirect to game over page
        }
        timeLeft--;
    }

    // Function to update score
    var score = 0;

    function updateScore() {
        score += 1; // Increment score by 1 for each correct guess
        localStorage.setItem("score", score);
    }
});

