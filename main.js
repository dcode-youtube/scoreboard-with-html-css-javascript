import ScoreboardView from "./scoreboard/ScoreboardView.js";

let playerOneScore = 0;
let playerTwoScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Player One", "Player Two", (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
	} else {
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
	}

	view.update(playerOneScore, playerTwoScore);
});

