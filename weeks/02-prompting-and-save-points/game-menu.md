# Game in an Hour — Game menu

Pick **one** game for the week 2 lab. Each entry has a difficulty rating, why it makes a good first game, what tends to go wrong, and a **sample 5-step plan** with a "done when" check for every step.

Use the sample plan to **check and edit** the plan your AI proposes, not to replace it. Asking for a plan and then improving it is the Plan step of the [Safe Loop](../../resources/safe-loop.md).

**Difficulty:** ★ Easy (good if this is your first time) · ★★ Medium · ★★★ Hard (only if you've coded before, or as homework).

## Rules for every game

- One file, `game/index.html`, with the CSS and JavaScript inside it.
- No libraries and no external images, sounds or fonts. Use emoji, colored shapes or the HTML `<canvas>` element (a drawing area on the page; not the same thing as Gemini's Canvas feature).
- Playable on a laptop with a keyboard or mouse. Touch controls are a homework stretch.
- Each step adds **one** visible feature you can test in under a minute.
- Use a generic name for games based on famous ones ("Flappy-style", not the original's name), and draw your own simple shapes rather than copying someone else's art.

## Quick pick

| # | Game | Difficulty | Controls | Pick it if you… |
|---|---|---|---|---|
| 1 | [Reaction timer](#1-reaction-timer) | ★ | Mouse | want a guaranteed win |
| 2 | [Whack-a-mole](#2-whack-a-mole) | ★ | Mouse | like fast, simple games |
| 3 | [Memory match](#3-memory-match) | ★ | Mouse | like puzzles more than action |
| 4 | [Typing speed test](#4-typing-speed-test) | ★ | Keyboard | want something useful |
| 5 | [Simon says](#5-simon-says) | ★★ | Mouse or keys | like patterns and sequences |
| 6 | [Snake](#6-snake) | ★★ | Arrow keys | want a classic |
| 7 | [Pong](#7-pong) | ★★ | Mouse or keys | like smooth movement |
| 8 | [Flappy-style](#8-flappy-style) | ★★ | Space or click | want a one-button game |
| 9 | [Breakout](#9-breakout) | ★★★ | Mouse or keys | finished Pong fast and want more |
| 10 | [2048](#10-2048) | ★★★ | Arrow keys | like logic puzzles and tricky rules |

**Your own idea?** Fine, if your instructor agrees and it fits the rules above in five small steps. Write your own plan in the same format.

---

## 1. Reaction timer

**Difficulty:** ★

Wait for the screen to turn green, then click as fast as you can.

- **Why it's a good first game:** no animation loop and no collisions, just a timer and clicks. You'll get to step 5.
- **Watch out for:** clicking "too early" while waiting; the random delay must be different every round.

| Step | Build | Done when |
|---|---|---|
| 1 | Layout: a title, a large colored panel with the text "Click to start", and an empty results area | The page shows all three; clicking does nothing yet |
| 2 | Waiting: clicking the panel turns it red with "Wait for green…", then after a random 1–4 seconds it turns green with "Click!" | Over three tries, the wait is noticeably different each time |
| 3 | Measure: clicking the green panel shows your reaction time in milliseconds; clicking again starts a new round | A time appears after each green click, and the next round starts cleanly |
| 4 | Too soon: clicking while it's red shows "Too soon!" and cancels the round | An early click never shows a time and never turns the panel green afterwards |
| 5 | Best of five: record five valid attempts, then show the average and best time, with a "Play again" button | After five attempts the average and best appear; "Play again" clears them |

## 2. Whack-a-mole

**Difficulty:** ★

Moles pop up in a 3×3 grid of holes. Click them before they vanish.

- **Why it's a good first game:** a grid, random choice, a score and a timer are the building blocks of many games.
- **Watch out for:** two moles showing at once; the score counting clicks on empty holes; timers that keep running after the game ends.

| Step | Build | Done when |
|---|---|---|
| 1 | Layout: a 3×3 grid of holes, "Score: 0", "Time: 30" and a Start button | Everything shows; nothing moves |
| 2 | After Start, a mole (emoji) appears in a random hole about once a second | The mole jumps between random holes, never two at once |
| 3 | Clicking the mole adds 1 to the score and hides it; clicking an empty hole does nothing | The score goes up only for hits |
| 4 | A 30-second countdown; at 0 the moles stop and "Final score: N" appears | The timer reaches 0 and the board freezes |
| 5 | Moles stay up for less time as the game goes on; "Play again" resets score and timer | Late moles vanish noticeably faster; a new game starts at 0 and 30 |

## 3. Memory match

**Difficulty:** ★

Flip cards two at a time to find matching pairs.

- **Why it's a good first game:** no timing pressure while you build it, and the rules are easy to test.
- **Watch out for:** clicking a third card while two are showing; clicking the same card twice counting as a match.

| Step | Build | Done when |
|---|---|---|
| 1 | A 4×4 grid of face-down cards, holding 8 emoji pairs in shuffled order | 16 cards show; reloading changes the order (ask for a temporary "show all" button to check, then remove it) |
| 2 | Clicking a card flips it to show its emoji | Cards flip face up when clicked |
| 3 | Two matching cards stay face up; two different cards flip back after 1 second; no clicks count during that second | Matches stay, misses flip back, a third click is ignored |
| 4 | A move counter, and "You won in N moves!" when all pairs are found | The counter goes up once per pair of flips; the message appears at the end |
| 5 | A timer and a "New game" button that reshuffles | The timer stops on a win; "New game" gives a fresh shuffled board |

## 4. Typing speed test

**Difficulty:** ★

Type a sentence as fast and accurately as you can; see your words per minute.

- **Why it's a good first game:** text boxes and keyboard events, no graphics. Easy to check the math yourself.
- **Watch out for:** the timer starting on page load instead of the first keystroke; words per minute calculated wrongly.

| Step | Build | Done when |
|---|---|---|
| 1 | Layout: a sentence to copy, a text box, and a results area | All three show; typing in the box works but nothing is measured |
| 2 | The timer starts on the first keystroke and stops when you press Enter; show the seconds taken | The time shown matches a phone stopwatch within about a second |
| 3 | Show words per minute (characters typed ÷ 5, per minute) and accuracy (% of characters that match) | Typing a 50-character sentence perfectly in 30 seconds shows 20 WPM and 100% |
| 4 | Live feedback: each typed character turns green if correct, red if wrong | Mistakes are highlighted as you type |
| 5 | A random sentence from a list of 10, a "Try again" button, and the best WPM so far this session | Each try gets a new sentence; the best score updates only when beaten |

## 5. Simon says

**Difficulty:** ★★

Four colored pads light up in a sequence; repeat it. Each round adds one more.

- **Why it's a good first game:** teaches sequences (lists) and taking turns between the computer and the player.
- **Watch out for:** the player clicking during the computer's playback; a pad lighting twice in a row looking like one flash.

| Step | Build | Done when |
|---|---|---|
| 1 | Four colored pads in a 2×2 grid, a Start button and "Level: 0"; clicking a pad makes it flash | Each pad flashes brighter for a moment when clicked |
| 2 | After Start, the computer plays a sequence that grows by one random pad each round | Level 3 plays three flashes, with clear gaps, even if the same pad repeats |
| 3 | The player repeats the sequence; right moves to the next level, wrong shows "Game over: you reached level N" | A correct repeat advances; one wrong click ends the game |
| 4 | Clicks during the computer's playback are ignored; playback speeds up every 5 levels | Clicking during playback does nothing; level 6 plays faster than level 1 |
| 5 | Keyboard controls (keys 1–4) and a "Play again" button; show the best level this session | The game can be played without a mouse; the best level updates |

## 6. Snake

**Difficulty:** ★★

Steer a growing snake to eat food without hitting the walls or yourself.

- **Why it's a good first game:** the classic. It introduces a *game loop* (code that updates and redraws the screen many times a second) on a simple grid.
- **Watch out for:** reversing into yourself (pressing Left while moving Right); food appearing inside the snake; arrow keys scrolling the page.

| Step | Build | Done when |
|---|---|---|
| 1 | A `<canvas>` with a 20×20 grid, a 3-cell snake in the middle and one food square | Snake and food are drawn; nothing moves |
| 2 | The snake moves one cell about every 150 ms; arrow keys change direction but can't reverse it; arrow keys don't scroll the page | The snake moves and turns; pressing the opposite direction is ignored |
| 3 | Eating food makes the snake one cell longer, adds 1 to the score, and moves the food to a random empty cell | Length and score go up; food never appears on the snake |
| 4 | Hitting a wall or itself ends the game: "Game over. Score: N. Press Space to restart" | Both kinds of crash end the game; Space starts a new one |
| 5 | The snake speeds up every 5 foods; show the best score this session | Speed visibly increases; the best score survives a restart (not a reload) |

## 7. Pong

**Difficulty:** ★★

Keep the ball in play against a computer paddle. First to 5 wins.

- **Why it's a good first game:** smooth movement, bouncing and collisions, the core of most action games.
- **Watch out for:** the ball getting stuck inside a paddle; a computer player that never misses.

| Step | Build | Done when |
|---|---|---|
| 1 | A `<canvas>` with two paddles, a ball, a dashed center line and "0 – 0" | Everything is drawn; nothing moves |
| 2 | The ball moves in a game loop and bounces off the top and bottom edges | The ball moves smoothly and keeps bouncing |
| 3 | The left paddle follows the mouse (or W/S keys); the ball bounces off both paddles | Hitting returns the ball; missing lets it pass |
| 4 | Scoring: a ball past a paddle gives the other side a point and restarts from the center; the right paddle follows the ball at a limited speed | Both sides can score; the computer can be beaten |
| 5 | First to 5 wins with a message; P pauses; Space restarts | The winner is announced; pause and restart work |

## 8. Flappy-style

**Difficulty:** ★★

One button makes your bird flap up through gaps in scrolling pipes.

- **Why it's a good first game:** gravity in two lines of code, and a single control that works for everyone.
- **Watch out for:** the bird flying off the top; pipes with impossible gaps; the game being far too hard at first.

| Step | Build | Done when |
|---|---|---|
| 1 | A `<canvas>` with a sky, a ground strip, a bird (circle or emoji) and "Press Space to start" | Everything is drawn; nothing moves |
| 2 | Gravity: after Space, the bird falls; Space or a click makes it jump; it can't leave the top of the screen | The bird falls, jumps and stays on screen |
| 3 | Pairs of pipes with a gap scroll from right to left; a new pair every 1.5 seconds; the gap's height is random | Pipes keep coming, each gap at a different height, always passable |
| 4 | Touching a pipe or the ground ends the game; passing a pipe adds 1 to the score | Crashes end the game; the score counts pipes passed |
| 5 | A game-over screen with the score and best this session; Space restarts; tune gravity and gap size until a beginner can score 5 | A classmate can score 5 on their first or second try |

## 9. Breakout

**Difficulty:** ★★★

Bounce a ball off your paddle to smash rows of bricks.

- **Why it's harder:** many objects to collide with, and angles that depend on where the ball hits the paddle.
- **Watch out for:** the ball passing through bricks when it moves fast; hitting two bricks at once.

| Step | Build | Done when |
|---|---|---|
| 1 | A `<canvas>` with a paddle at the bottom, a ball and 5 rows × 8 bricks | Everything is drawn; nothing moves |
| 2 | The ball moves and bounces off the walls and ceiling; the paddle moves with the mouse or arrow keys; a ball past the bottom resets | The ball bounces; the paddle moves; a missed ball restarts |
| 3 | The ball bounces off the paddle, at an angle that depends on where it hits | Hitting the paddle's edge sends the ball more sideways than hitting the middle |
| 4 | A ball hitting a brick removes it, bounces, and adds 10 points | Bricks disappear one at a time; the score goes up by 10 |
| 5 | Three lives, "You win!" when all bricks are gone, Space to restart | Losing three balls ends the game; clearing the board wins |

## 10. 2048

**Difficulty:** ★★★

Slide numbered tiles on a 4×4 grid; equal tiles merge. Reach 2048.

- **Why it's harder:** the merge rules have tricky edge cases, which makes it a great lesson in testing, and a hard one to finish in an hour.
- **Watch out for:** a tile merging twice in one move (`2 2 4` sliding left should give `4 4`, not `8`); new tiles appearing after a move that changed nothing.

| Step | Build | Done when |
|---|---|---|
| 1 | A 4×4 grid drawn from a list of numbers, starting with two random tiles (2 or 4) and "Score: 0" | Two tiles show; reloading gives different starting tiles |
| 2 | The Left arrow slides all tiles left without merging; a new tile appears only if something moved | Tiles slide left; pressing Left again when nothing can move adds no tile |
| 3 | Merging on Left: equal neighbors merge once per move and add their total to the score | `2 2 2 2` becomes `4 4`; `2 2 4` becomes `4 4`; the score goes up by the merged values |
| 4 | Right, Up and Down work the same way | All four arrows slide and merge correctly |
| 5 | "You win!" at 2048 (with a "keep going" option), "Game over" when no move is possible, and a "New game" button | Both messages appear at the right time; New game resets the board and score |

---

## Ways to break it at step 3

The lab asks you to break your game on purpose, commit the broken version, and then restore the last working one. Pick one:

- **Accept a vague, unreviewed change.** Send `Make the game much more exciting. Change whatever you like.`, paste the result without testing, and commit it.
- **Delete a line by hand.** In the `<script>` section, delete a line containing `}` or a line that starts with `if`, and commit.
- **Change a number to something silly.** Set a speed to `1000` or a grid size to `2`, and commit.

Then follow the lab to go back. Being able to undo a bad change calmly is the point of the exercise.
