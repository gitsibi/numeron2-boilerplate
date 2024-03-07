// Iteration 8: Making scoreboard functional
document.addEventListener("DOMContentLoaded", function() {
    var scoreBoard = document.getElementById("score-board");
    var score = localStorage.getItem("score");
    scoreBoard.textContent = score;
});

document.getElementById("play-again-button").addEventListener("click", function() {
    window.location.href = "game.html"; // Redirect to game page when play again button is clicked
});

document.getElementById("play-again-button").addEventListener("click", function() {
    // Redirect to the game page when the play again button is clicked
    window.location.href = "game.html";
  });
