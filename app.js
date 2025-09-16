let step = 1;

function makeChoice(choice) {
  const gameText = document.getElementById("game-text");
  const choices = document.getElementById("choices");

  if (step === 1) {
    if (choice === "left") {
      gameText.innerHTML = `
        <p>There is a lake in front of you.</p>
        <p>Do you want to wait for a boat or swim across?</p>
      `;
      choices.innerHTML = `
        <button onclick="makeChoice('wait')">Wait</button>
        <button onclick="makeChoice('swim')">Swim</button>
      `;
      step = 2;
    } else {
      gameText.innerHTML = `
        <p>You fell into a hole.</p>
        <h2>=== GAME OVER ===</h2>
      `;
      choices.innerHTML = `<button onclick="location.reload()">Restart</button>`;
    }
  } else if (step === 2) {
    if (choice === "wait") {
      gameText.innerHTML = `
        <p>You now see three doors in front of you!</p>
        <p>Red, Blue, and Yellow</p>
      `;
      choices.innerHTML = `
        <button onclick="makeChoice('red')">Red</button>
        <button onclick="makeChoice('blue')">Blue</button>
        <button onclick="makeChoice('yellow')">Yellow</button>
      `;
      step = 3;
    } else {
      gameText.innerHTML = `
        <p>You were attacked by a crocodile!</p>
        <h2>=== GAME OVER ===</h2>
      `;
      choices.innerHTML = `<button onclick="location.reload()">Restart</button>`;
    }
  } else if (step === 3) {
    if (choice === "yellow") {
      gameText.innerHTML = `
        <h2>YOU WIN!!! 🎉</h2>
        <p>You found the treasure behind the yellow door!</p>
      `;
    } else if (choice === "red") {
      gameText.innerHTML = `
        <p>Oh no!! You walked into a room full of fire!</p>
        <h2>=== GAME OVER ===</h2>
      `;
    } else {
      gameText.innerHTML = `
        <p>Oh no!! You were eaten by hungry beasts!</p>
        <h2>=== GAME OVER ===</h2>
      `;
    }
    choices.innerHTML = `<button onclick="location.reload()">Play Again</button>`;
  }
}
