const themes = ["theme-sky", "theme-meadow", "theme-ocean", "theme-paper"];

const animalEmojiPool = [
  "🐥", "🐣", "🐤", "🐻", "🐼", "🐨", "🐰", "🐹", "🐭", "🐁", "🦊", "🐸", "🐢", "🐙",
  "🐬", "🐳", "🐋", "🐠", "🐟", "🦋", "🐞", "🐝", "🪲", "🐛", "🪱", "🦗",
  "🦄", "🐶", "🐕", "🐩", "🐱", "🐈", "🐷", "🐮", "🐄", "🦁", "🐯", "🐵",
  "🦒", "🦓", "🦘", "🦩", "🦥", "🦦", "🐿️", "🦔", "🐇", "🦝", "🦫", "🦨",
  "🐆", "🐅", "🐘", "🦏", "🦛", "🐪", "🦙", "🫏", "🐎", "🦌", "🐓", "🦜",
  "🦚", "🦢", "🪿", "🐧", "🦆", "🦉", "🦇", "🐊", "🦎", "🐍", "🦕", "🦖",
  "🐉", "🐲", "🌋", "🥚", "🌈", "⭐", "🌟", "✨", "☀️", "🌙", "☁️"
];

const vehicleEmojiPool = [
  "🚗", "🚕", "🚙", "🚌", "🚓", "🚑", "🚒", "🚜", "🏎️", "🛵",
  "🚲", "🛴", "🚂", "🚆", "🚊", "🚞", "🚄", "🚅", "🚈", "🚇", "🚠", "🚡",
  "✈️", "🛩️", "🚁", "⛵", "🚤", "🛥️", "🛶", "🚢", "🛳️", "🚀", "🛸", "🚚",
  "🚛", "🚐", "🚎", "🚍", "🚘", "🛺", "🚔", "🛻"
];

const dinoEmojiPool = [
  "🦖", "🦕", "🐉", "🐲", "🥚", "🌋", "🦴", "⭐", "✨", "🌈", "☄️", "🪨"
];

const spaceEmojiPool = [
  "🚀", "🛸", "🪐", "⭐", "🌟", "✨", "☀️", "🌙", "☁️", "☄️", "🌌", "👨‍🚀"
];

const seaEmojiPool = [
  "🐠", "🐟", "🐬", "🐳", "🐋", "🐙", "🦀", "🦑", "🪼", "🐚", "🌊", "⛵"
];

const farmEmojiPool = [
  "🐮", "🐷", "🐔", "🐓", "🐣", "🐥", "🐴", "🐑", "🐐", "🚜", "🌽", "🍎"
];

const insectEmojiPool = [
  "🦋", "🐞", "🐝", "🪲", "🐛", "🪱", "🦗", "🕷️", "🕸️", "🌼", "🍃", "✨"
];

const partyEmojiPool = [
  "🎉", "🎈", "🫧", "🎊", "🥳", "🎵", "🎶", "⭐", "✨", "🌈", "💛", "🧡"
];

const colorEmojiPool = [
  "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🩷", "🤍", "🌈", "🎨", "🖍️", "✨"
];

const fruitEmojiPool = [
  "🍓", "🍒", "🍉", "🍌", "🍊", "🍍", "🥝", "🫐", "🍎", "🍐", "🍇", "🥭"
];

const magicEmojiPool = [
  "🪄", "✨", "💫", "⭐", "🌙", "🔮", "🦄", "👑", "🏰", "🧚", "💖", "🌈"
];

const skyEmojiPool = [
  "☀️", "🌙", "⭐", "🌟", "☁️", "🌤️", "⛅", "🌈", "🪁", "🦅", "🕊️", "💨"
];

const friendlyMonsterEmojiPool = [
  "👾", "🤖", "👻", "😸", "🐲", "🦖", "🦕", "💚", "🩵", "⭐", "🫧", "✨"
];

const princessEmojiPool = [
  "👑", "👸", "🦄", "🐱", "🐰", "🦋", "🌸", "🌼", "🪻", "🌈", "✨", "⭐",
  "💖", "💗", "💝", "🎀", "🩷", "💜", "🎈", "🫧", "🍓", "🍒", "🩰", "🧁",
  "🍭", "🧸", "🐶", "🐥", "🦩", "🪄", "🌙", "🏰"
];

const adventureEmojiPool = [
  "🚗", "🚙", "🏎️", "🛵", "🚲", "🚜", "🚂", "🚀", "🛸", "✈️", "🚁", "🚚",
  "🚛", "🛻", "🚌", "🚓", "🚒", "🦖", "🦕", "🐉", "🦁", "🐯", "🦊", "🐻",
  "⚽", "🏀", "⭐", "💥", "🔵", "🟢", "🛡️", "🏁"
];

const randomEmojiPool = [
  ...animalEmojiPool,
  ...vehicleEmojiPool,
  ...dinoEmojiPool,
  ...spaceEmojiPool,
  ...seaEmojiPool,
  ...farmEmojiPool,
  ...insectEmojiPool,
  ...partyEmojiPool,
  ...colorEmojiPool,
  ...fruitEmojiPool,
  ...magicEmojiPool,
  ...skyEmojiPool,
  ...friendlyMonsterEmojiPool,
  ...princessEmojiPool,
  ...adventureEmojiPool,
  "🌸", "🌼", "🪻", "🍀", "🍓", "🍉", "🍌", "🍊", "🍍", "🥝", "🍒", "🫐",
  "🎈", "🫧", "🎉", "❤️", "💛", "🧡", "🪐"
];

const sparklePools = ["✨", "⭐", "💫", "🫧", "🌟", "💛"];
const maxBursts = 24;
const speedSettings = {
  slow: { burstLifetime: 4000, keyBurstInterval: 220, animationDuration: 4000 },
  normal: { burstLifetime: 2700, keyBurstInterval: 150, animationDuration: 2700 },
  fast: { burstLifetime: 1700, keyBurstInterval: 90, animationDuration: 1700 }
};

const playground = document.getElementById("playground");
const emojiStage = document.getElementById("emojiStage");
const fullscreenButton = document.getElementById("fullscreenButton");
const menuButton = document.getElementById("menuButton");
const menuScreen = document.getElementById("menuScreen");
const playButton = document.getElementById("playButton");
const gamepadStatus = document.getElementById("gamepadStatus");
const gamepadCursor = document.getElementById("gamepadCursor");
const sessionTimer = document.getElementById("sessionTimer");
const endingScreen = document.getElementById("endingScreen");
const hint = document.getElementById("hint");
const optionButtons = Array.from(document.querySelectorAll(".option-button"));
const menuFocusables = [...optionButtons, playButton];

let burstCount = 0;
const heldKeys = new Map();
let primeTimeouts = [];
let animationFrameId = null;
let sessionTimerTimeoutId = null;
let sessionTimerIntervalId = null;
let endingTimeoutId = null;
const state = {
  isPlaying: false,
  speedMode: "normal",
  emojiMode: "all",
  timerMode: "10",
  sessionEndsAt: null,
  isEnding: false
};
const gamepadState = {
  activeIndex: null,
  connected: false,
  cursorX: window.innerWidth / 2,
  cursorY: window.innerHeight / 2,
  menuFocusIndex: menuFocusables.length - 1,
  lastMoveAt: 0,
  spawnIntervalId: null,
  previousButtons: {
    primary: false,
    menu: false
  },
  previousDirections: {
    left: false,
    right: false,
    up: false,
    down: false
  }
};
const menuGrid = [
  [0, 1, 2, 3],
  [4, 5, 6],
  [7],
  [8]
];
const gamepadConfig = {
  deadzone: 0.24,
  moveSpeed: 15,
  menuMoveCooldown: 170
};
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getCurrentEmojiPool() {
  if (state.emojiMode === "animals") {
    return animalEmojiPool;
  }

  if (state.emojiMode === "vehicles") {
    return vehicleEmojiPool;
  }

  if (state.emojiMode === "dinos") {
    return dinoEmojiPool;
  }

  if (state.emojiMode === "space") {
    return spaceEmojiPool;
  }

  if (state.emojiMode === "princess") {
    return princessEmojiPool;
  }

  if (state.emojiMode === "adventure") {
    return adventureEmojiPool;
  }

  return randomEmojiPool;
}

function getSpeedSetting() {
  return speedSettings[state.speedMode];
}

function getTimerDurationMs() {
  if (state.timerMode === "off") {
    return null;
  }

  return Number.parseInt(state.timerMode, 10) * 60 * 1000;
}

function applyRandomTheme() {
  const nextTheme = pickRandom(themes);
  playground.classList.remove(...themes);
  playground.classList.add(nextTheme);
}

function createEmoji(x, y, emojiChar) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojiChar;
  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;
  emoji.style.animationDuration = `${getSpeedSetting().animationDuration}ms`;
  emoji.style.setProperty("--twist", `${(Math.random() * 26 - 13).toFixed(2)}deg`);
  return emoji;
}

function createSparkles(x, y) {
  const sparkles = [];
  const count = 3 + Math.floor(Math.random() * 3);

  for (let index = 0; index < count; index += 1) {
    const sparkle = document.createElement("div");
    sparkle.className = "emoji sparkle";
    sparkle.textContent = pickRandom(sparklePools);
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty("--angle", `${index * (360 / count) + Math.random() * 28}deg`);
    sparkle.style.setProperty("--distance", `${50 + Math.random() * 34}px`);
    sparkles.push(sparkle);
  }

  return sparkles;
}

function createRing(x, y) {
  const ring = document.createElement("div");
  ring.className = "ring";
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  return ring;
}

function pruneBurstsIfNeeded() {
  while (burstCount >= maxBursts && emojiStage.firstChild) {
    emojiStage.removeChild(emojiStage.firstChild);
    burstCount -= 1;
  }
}

function spawnBurst(x, y) {
  pruneBurstsIfNeeded();

  const burst = document.createElement("div");
  burst.className = "burst";

  const mainEmoji = createEmoji(x, y, pickRandom(getCurrentEmojiPool()));
  const ring = createRing(x, y);
  const sparkles = createSparkles(x, y);
  const { burstLifetime } = getSpeedSetting();

  burst.appendChild(ring);
  burst.appendChild(mainEmoji);
  sparkles.forEach((sparkle) => burst.appendChild(sparkle));
  emojiStage.appendChild(burst);
  burstCount += 1;

  window.setTimeout(() => {
    if (burst.parentNode === emojiStage) {
      emojiStage.removeChild(burst);
      burstCount -= 1;
    }
  }, burstLifetime);
}

function hideHint() {
  if (hint) {
    hint.style.transition = "opacity 180ms ease";
    hint.style.opacity = "0";
  }
}

function resetHint() {
  hint.style.transition = "";
  hint.style.opacity = "";
}

function clearBursts() {
  emojiStage.replaceChildren();
  burstCount = 0;
}

function clearPrimeTimeouts() {
  primeTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  primeTimeouts = [];
}

function clearSessionTimer() {
  if (sessionTimerTimeoutId) {
    window.clearTimeout(sessionTimerTimeoutId);
    sessionTimerTimeoutId = null;
  }

  if (sessionTimerIntervalId) {
    window.clearInterval(sessionTimerIntervalId);
    sessionTimerIntervalId = null;
  }

  state.sessionEndsAt = null;
  sessionTimer.textContent = "";
  playground.classList.remove("has-timer");
}

function formatRemainingTime(remainingMs) {
  const totalSeconds = Math.max(Math.ceil(remainingMs / 1000), 0);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateSessionTimerLabel() {
  if (!state.sessionEndsAt) {
    sessionTimer.textContent = "";
    return;
  }

  sessionTimer.textContent = formatRemainingTime(state.sessionEndsAt - Date.now());
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setGamepadStatusLabel() {
  gamepadStatus.textContent = gamepadState.connected ? "manette connectee" : "manette inactive";
  playground.classList.toggle("has-gamepad", gamepadState.connected);
}

function updateGamepadCursor() {
  gamepadCursor.style.left = `${gamepadState.cursorX}px`;
  gamepadCursor.style.top = `${gamepadState.cursorY}px`;
}

function resetGamepadCursor() {
  gamepadState.cursorX = window.innerWidth / 2;
  gamepadState.cursorY = window.innerHeight / 2;
  updateGamepadCursor();
}

function stopGamepadSpawn() {
  if (gamepadState.spawnIntervalId) {
    window.clearInterval(gamepadState.spawnIntervalId);
    gamepadState.spawnIntervalId = null;
  }
}

function stopAllInteractiveInput() {
  releaseAllKeys();
  stopGamepadSpawn();
}

function isGamepadBurstPressed(gamepad) {
  return gamepad.buttons.some((button, index) => index !== 8 && index !== 9 && button?.pressed);
}

function triggerGamepadBurst() {
  const point = nextKeyboardPoint();
  hideHint();
  spawnBurst(point.x, point.y);
}

function startGamepadSpawn() {
  if (gamepadState.spawnIntervalId) {
    return;
  }

  triggerGamepadBurst();
  gamepadState.spawnIntervalId = window.setInterval(() => {
    triggerGamepadBurst();
  }, getSpeedSetting().keyBurstInterval);
}

function updateMenuFocus() {
  menuFocusables.forEach((element, index) => {
    element.classList.toggle("is-focused", index === gamepadState.menuFocusIndex && gamepadState.connected);
  });
}

function focusIndexFromGridPosition(row, column) {
  const nextRow = menuGrid[clamp(row, 0, menuGrid.length - 1)];
  const safeColumn = clamp(column, 0, nextRow.length - 1);
  return nextRow[safeColumn];
}

function getGridPositionForFocus(index) {
  for (let row = 0; row < menuGrid.length; row += 1) {
    const column = menuGrid[row].indexOf(index);
    if (column !== -1) {
      return { row, column };
    }
  }

  return { row: menuGrid.length - 1, column: 0 };
}

function moveMenuFocus(direction) {
  const { row, column } = getGridPositionForFocus(gamepadState.menuFocusIndex);
  let nextIndex = gamepadState.menuFocusIndex;

  if (direction === "left") {
    nextIndex = focusIndexFromGridPosition(row, column - 1);
  }

  if (direction === "right") {
    nextIndex = focusIndexFromGridPosition(row, column + 1);
  }

  if (direction === "up") {
    nextIndex = focusIndexFromGridPosition(row - 1, column);
  }

  if (direction === "down") {
    nextIndex = focusIndexFromGridPosition(row + 1, column);
  }

  gamepadState.menuFocusIndex = nextIndex;
  updateMenuFocus();
}

function activateFocusedMenuItem() {
  const focused = menuFocusables[gamepadState.menuFocusIndex];
  if (focused) {
    focused.click();
  }
}

function setMenuFocusForState() {
  const timerIndexMap = { "5": 0, "10": 1, "15": 2, off: 3 };
  gamepadState.menuFocusIndex = timerIndexMap[state.timerMode] ?? menuFocusables.length - 1;
  updateMenuFocus();
}

function handleGamepadMenuNavigation(horizontal, vertical, primaryPressed) {
  const now = performance.now();
  const directions = {
    left: horizontal < -0.5,
    right: horizontal > 0.5,
    up: vertical < -0.5,
    down: vertical > 0.5
  };

  Object.entries(directions).forEach(([direction, isPressed]) => {
    const wasPressed = gamepadState.previousDirections[direction];
    if (isPressed && !wasPressed && now - gamepadState.lastMoveAt > gamepadConfig.menuMoveCooldown) {
      moveMenuFocus(direction);
      gamepadState.lastMoveAt = now;
    }
    gamepadState.previousDirections[direction] = isPressed;
  });

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    activateFocusedMenuItem();
  }
}

function handleGamepadGameplay(gamepad) {
  const primaryPressed = isGamepadBurstPressed(gamepad);
  const menuPressed = Boolean(gamepad.buttons[9]?.pressed || gamepad.buttons[8]?.pressed);

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    startGamepadSpawn();
  }

  if (!primaryPressed) {
    stopGamepadSpawn();
  }

  if (menuPressed && !gamepadState.previousButtons.menu) {
    showMenu();
  }

  gamepadState.previousButtons.primary = primaryPressed;
  gamepadState.previousButtons.menu = menuPressed;
}

function pollGamepads() {
  const gamepads = typeof navigator.getGamepads === "function" ? navigator.getGamepads() : [];
  const activeGamepad =
    (gamepadState.activeIndex !== null && gamepads[gamepadState.activeIndex]) ||
    Array.from(gamepads).find(Boolean) ||
    null;

  if (activeGamepad) {
    gamepadState.activeIndex = activeGamepad.index;
    if (!gamepadState.connected) {
      gamepadState.connected = true;
      setGamepadStatusLabel();
      setMenuFocusForState();
      resetGamepadCursor();
    }

    const horizontal = activeGamepad.axes[0] || 0;
    const vertical = activeGamepad.axes[1] || 0;
    const dpadHorizontal =
      (activeGamepad.buttons[15]?.pressed ? 1 : 0) - (activeGamepad.buttons[14]?.pressed ? 1 : 0);
    const dpadVertical =
      (activeGamepad.buttons[13]?.pressed ? 1 : 0) - (activeGamepad.buttons[12]?.pressed ? 1 : 0);
    const menuHorizontal =
      Math.abs(horizontal) > gamepadConfig.deadzone ? horizontal : dpadHorizontal;
    const menuVertical =
      Math.abs(vertical) > gamepadConfig.deadzone ? vertical : dpadVertical;
    const primaryPressed = Boolean(activeGamepad.buttons[0]?.pressed || activeGamepad.buttons[2]?.pressed);

    if (state.isPlaying) {
      handleGamepadGameplay(activeGamepad);
    } else {
      handleGamepadMenuNavigation(menuHorizontal, menuVertical, primaryPressed);
      gamepadState.previousButtons.primary = primaryPressed;
      gamepadState.previousButtons.menu = Boolean(
        activeGamepad.buttons[9]?.pressed || activeGamepad.buttons[8]?.pressed
      );
    }
  } else if (gamepadState.connected) {
    gamepadState.connected = false;
    gamepadState.activeIndex = null;
    stopGamepadSpawn();
    gamepadState.previousButtons.primary = false;
    gamepadState.previousButtons.menu = false;
    gamepadState.previousDirections.left = false;
    gamepadState.previousDirections.right = false;
    gamepadState.previousDirections.up = false;
    gamepadState.previousDirections.down = false;
    setGamepadStatusLabel();
    updateMenuFocus();
  }

  animationFrameId = window.requestAnimationFrame(pollGamepads);
}

function handlePointer(event) {
  if (!state.isPlaying) {
    return;
  }

  if (event.target === fullscreenButton) {
    return;
  }

  if (event.target === menuButton) {
    return;
  }

  event.preventDefault();
  const pointX = event.clientX;
  const pointY = event.clientY;

  hideHint();
  spawnBurst(pointX, pointY);
}

function nextKeyboardPoint() {
  const marginX = Math.max(window.innerWidth * 0.08, 48);
  const marginY = Math.max(window.innerHeight * 0.1, 56);

  return {
    x: marginX + Math.random() * Math.max(window.innerWidth - marginX * 2, 1),
    y: marginY + Math.random() * Math.max(window.innerHeight - marginY * 2, 1)
  };
}

function triggerKeyboardBurst() {
  const point = nextKeyboardPoint();
  hideHint();
  spawnBurst(point.x, point.y);
}

function handleKeydown(event) {
  if (!state.isPlaying) {
    return;
  }

  if (event.key === "Tab") {
    return;
  }

  if (heldKeys.has(event.code)) {
    return;
  }

  triggerKeyboardBurst();

  const intervalId = window.setInterval(() => {
    triggerKeyboardBurst();
  }, getSpeedSetting().keyBurstInterval);

  heldKeys.set(event.code, intervalId);
}

function releaseKey(event) {
  const intervalId = heldKeys.get(event.code);
  if (intervalId) {
    window.clearInterval(intervalId);
    heldKeys.delete(event.code);
  }
}

function releaseAllKeys() {
  heldKeys.forEach((intervalId) => window.clearInterval(intervalId));
  heldKeys.clear();
  stopGamepadSpawn();
}

function syncOptionButtons() {
  optionButtons.forEach((button) => {
    const group = button.dataset.group;
    const value = button.dataset.value;
    const isActive =
      (group === "timer" && value === state.timerMode) ||
      (group === "emoji" && value === state.emojiMode);

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function showMenu() {
  state.isPlaying = false;
  state.isEnding = false;
  releaseAllKeys();
  clearPrimeTimeouts();
  clearSessionTimer();
  if (endingTimeoutId) {
    window.clearTimeout(endingTimeoutId);
    endingTimeoutId = null;
  }
  resetHint();
  clearBursts();
  playground.classList.remove("is-playing");
  playground.classList.remove("is-ending");
  menuScreen.removeAttribute("hidden");
  setMenuFocusForState();
}

function endSessionSoftly() {
  if (!state.isPlaying || state.isEnding) {
    return;
  }

  state.isEnding = true;
  clearPrimeTimeouts();
  clearSessionTimer();
  stopAllInteractiveInput();
  playground.classList.add("is-ending");
  endingScreen.removeAttribute("aria-hidden");

  endingTimeoutId = window.setTimeout(() => {
    endingTimeoutId = null;
    endingScreen.setAttribute("aria-hidden", "true");
    showMenu();
  }, 2600);
}

function startSessionTimer() {
  const durationMs = getTimerDurationMs();
  clearSessionTimer();

  if (!durationMs) {
    return;
  }

  state.sessionEndsAt = Date.now() + durationMs;
  playground.classList.add("has-timer");
  updateSessionTimerLabel();

  sessionTimerIntervalId = window.setInterval(() => {
    updateSessionTimerLabel();
  }, 1000);

  sessionTimerTimeoutId = window.setTimeout(() => {
    endSessionSoftly();
  }, durationMs);
}

function startGame() {
  state.isPlaying = true;
  state.isEnding = false;
  applyRandomTheme();
  clearPrimeTimeouts();
  clearBursts();
  resetHint();
  playground.classList.add("is-playing");
  playground.classList.remove("is-ending");
  menuScreen.setAttribute("hidden", "hidden");
  endingScreen.setAttribute("aria-hidden", "true");
  resetGamepadCursor();
  startSessionTimer();
  primeFirstView();
}

function handleOptionClick(event) {
  const button = event.target.closest(".option-button");
  if (!button) {
    return;
  }

  const { group, value } = button.dataset;
  if (group === "timer") {
    state.timerMode = value;
  }

  if (group === "emoji") {
    state.emojiMode = value;
  }

  syncOptionButtons();
  updateMenuFocus();
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.error("Fullscreen error", error);
  }
}

function primeFirstView() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  primeTimeouts = [
    window.setTimeout(() => {
      if (state.isPlaying) {
        spawnBurst(width * 0.35, height * 0.52);
      }
    }, 260),
    window.setTimeout(() => {
      if (state.isPlaying) {
        spawnBurst(width * 0.65, height * 0.48);
      }
    }, 520)
  ];
}

function handleGamepadConnected(event) {
  gamepadState.activeIndex = event.gamepad.index;
  gamepadState.connected = true;
  setGamepadStatusLabel();
  setMenuFocusForState();
  updateGamepadCursor();
}

function handleGamepadDisconnected(event) {
  if (gamepadState.activeIndex === event.gamepad.index) {
    gamepadState.activeIndex = null;
  }
}

applyRandomTheme();
syncOptionButtons();
showMenu();
setGamepadStatusLabel();
resetGamepadCursor();
updateMenuFocus();
pollGamepads();

playground.addEventListener("pointerdown", handlePointer, { passive: false });
fullscreenButton.addEventListener("click", toggleFullscreen);
menuButton.addEventListener("click", showMenu);
menuScreen.addEventListener("click", handleOptionClick);
playButton.addEventListener("click", startGame);
window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", releaseKey);
window.addEventListener("blur", releaseAllKeys);
window.addEventListener("resize", resetGamepadCursor);
window.addEventListener("gamepadconnected", handleGamepadConnected);
window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

document.addEventListener(
  "gesturestart",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);
