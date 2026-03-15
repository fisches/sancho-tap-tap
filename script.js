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
const emojiAssetBaseUrl = "./assets/twemoji";
const lowPowerMode =
  (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4) ||
  /arm|aarch64|raspberry/i.test(navigator.userAgent);
const maxBursts = lowPowerMode ? 12 : 24;
const speedSettings = {
  slow: { burstLifetime: 4000, keyBurstInterval: 220, animationDuration: 4000 },
  normal: { burstLifetime: 2700, keyBurstInterval: 150, animationDuration: 2700 },
  fast: { burstLifetime: 1700, keyBurstInterval: 90, animationDuration: 1700 }
};

const playground = document.getElementById("playground");
const emojiStage = document.getElementById("emojiStage");
const fullscreenButton = document.getElementById("fullscreenButton");
const parentHotspot = document.getElementById("parentHotspot");
const menuScreen = document.getElementById("menuScreen");
const playButton = document.getElementById("playButton");
const gamepadStatus = document.getElementById("gamepadStatus");
const gamepadCursor = document.getElementById("gamepadCursor");
const sessionTimer = document.getElementById("sessionTimer");
const resumeScreen = document.getElementById("resumeScreen");
const resumeTitle = document.getElementById("resumeTitle");
const resumeText = document.getElementById("resumeText");
const resumeButton = document.getElementById("resumeButton");
const resumeMenuButton = document.getElementById("resumeMenuButton");
const parentScreen = document.getElementById("parentScreen");
const parentMenuAction = document.getElementById("parentMenuAction");
const parentExitAction = document.getElementById("parentExitAction");
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
let menuComboTimeoutId = null;
let menuComboSource = null;
const state = {
  isPlaying: false,
  speedMode: "normal",
  emojiMode: "all",
  timerMode: "10",
  sessionEndsAt: null,
  remainingSessionMs: null,
  isEnding: false,
  isPausedForFocus: false,
  isParentPanelOpen: false,
  fullscreenWanted: false,
  pendingStart: false
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
  },
  parentFocusIndex: 0
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
const menuReturnConfig = {
  keyboardHoldMs: 1200,
  gamepadHoldMs: 1200
};

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function emojiToAssetCode(emojiChar) {
  return Array.from(emojiChar)
    .map((symbol) => symbol.codePointAt(0))
    .filter((codepoint) => codepoint !== 0xfe0f)
    .map((codepoint) => codepoint.toString(16))
    .join("-");
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

function createEmoji(x, y, emojiChar, variant = "main") {
  const emoji = document.createElement("img");
  emoji.className = variant === "sparkle" ? "emoji emoji-image sparkle" : "emoji emoji-image";
  emoji.src = `${emojiAssetBaseUrl}/${emojiToAssetCode(emojiChar)}.png`;
  emoji.alt = "";
  emoji.decoding = "async";
  emoji.loading = "eager";
  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;
  emoji.style.animationDuration = `${getSpeedSetting().animationDuration}ms`;
  emoji.style.setProperty("--twist", `${(Math.random() * 26 - 13).toFixed(2)}deg`);
  return emoji;
}

function createSparkles(x, y) {
  const sparkles = [];
  const count = lowPowerMode ? 1 + Math.floor(Math.random() * 2) : 3 + Math.floor(Math.random() * 3);

  for (let index = 0; index < count; index += 1) {
    const sparkle = createEmoji(x, y, pickRandom(sparklePools), "sparkle");
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
  const ring = lowPowerMode ? null : createRing(x, y);
  const sparkles = createSparkles(x, y);
  const { burstLifetime } = getSpeedSetting();

  if (ring) {
    burst.appendChild(ring);
  }
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

function pauseSessionTimer() {
  if (state.timerMode === "off") {
    return;
  }

  if (state.sessionEndsAt) {
    state.remainingSessionMs = Math.max(state.sessionEndsAt - Date.now(), 1000);
  }

  clearSessionTimer();
}

function clearMenuReturnCombo() {
  if (menuComboTimeoutId) {
    window.clearTimeout(menuComboTimeoutId);
    menuComboTimeoutId = null;
  }

  menuComboSource = null;
}

function syncFullscreenState() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.textContent = isFullscreen ? "quitter plein ecran" : "plein ecran";
  playground.classList.toggle("is-fullscreen", isFullscreen);
}

function setResumeContent(title, text, actionLabel = "reprendre", canReturnMenu = false) {
  resumeTitle.textContent = title;
  resumeText.textContent = text;
  resumeButton.textContent = actionLabel;
  resumeMenuButton.hidden = !canReturnMenu;
}

function showResumeScreen(title, text, actionLabel = "reprendre", canReturnMenu = false) {
  setResumeContent(title, text, actionLabel, canReturnMenu);
  state.isPausedForFocus = true;
  playground.classList.add("is-paused");
  resumeScreen.setAttribute("aria-hidden", "false");
}

function hideResumeScreen() {
  state.isPausedForFocus = false;
  playground.classList.remove("is-paused");
  resumeScreen.setAttribute("aria-hidden", "true");
}

function updateParentFocus() {
  [parentMenuAction, parentExitAction].forEach((button, index) => {
    button.classList.toggle("is-focused", state.isParentPanelOpen && gamepadState.connected && index === gamepadState.parentFocusIndex);
  });
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
  clearMenuReturnCombo();
}

function canInteractWithGameplay() {
  return state.isPlaying && !state.isEnding && !state.isPausedForFocus && !state.isParentPanelOpen;
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

function openParentPanel() {
  if (!state.isPlaying || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  stopAllInteractiveInput();
  pauseSessionTimer();
  state.isParentPanelOpen = true;
  gamepadState.parentFocusIndex = 0;
  parentScreen.setAttribute("aria-hidden", "false");
  playground.classList.add("is-parent-open");
  updateParentFocus();
}

function closeParentPanel() {
  if (!state.isParentPanelOpen) {
    return;
  }

  state.isParentPanelOpen = false;
  parentScreen.setAttribute("aria-hidden", "true");
  playground.classList.remove("is-parent-open");
  updateParentFocus();

  if (state.isPlaying && !state.isEnding) {
    if (state.fullscreenWanted && !document.fullscreenElement) {
      showResumeScreen("plein ecran requis", "touche une fois pour revenir dans le jeu en plein ecran.");
      return;
    }

    hideResumeScreen();
    startSessionTimer();
  }
}

function isModifierKey(code) {
  return code === "ShiftLeft" || code === "ShiftRight" || code === "ControlLeft" ||
    code === "ControlRight" || code === "AltLeft" || code === "AltRight" ||
    code === "MetaLeft" || code === "MetaRight";
}

function isKeyboardMenuCombo(event) {
  return event.shiftKey && event.code === "KeyM";
}

function startKeyboardMenuCombo() {
  if (menuComboSource === "keyboard") {
    return;
  }

  clearMenuReturnCombo();
  menuComboSource = "keyboard";
  menuComboTimeoutId = window.setTimeout(() => {
    menuComboTimeoutId = null;
    menuComboSource = null;
    if (state.isPlaying && heldKeys.has("KeyM") && (heldKeys.has("ShiftLeft") || heldKeys.has("ShiftRight"))) {
      if (state.isParentPanelOpen) {
        closeParentPanel();
      } else {
        openParentPanel();
      }
    }
  }, menuReturnConfig.keyboardHoldMs);
}

function maybeStartGamepadMenuCombo(gamepad) {
  const leftBumperPressed = Boolean(gamepad.buttons[4]?.pressed);
  const rightBumperPressed = Boolean(gamepad.buttons[5]?.pressed);
  const startPressed = Boolean(gamepad.buttons[9]?.pressed || gamepad.buttons[8]?.pressed);
  const comboPressed = leftBumperPressed && rightBumperPressed && startPressed;

  if (!comboPressed) {
    if (menuComboSource === "gamepad") {
      clearMenuReturnCombo();
    }
    return false;
  }

  if (menuComboSource === "gamepad") {
    return true;
  }

  clearMenuReturnCombo();
  menuComboSource = "gamepad";
  menuComboTimeoutId = window.setTimeout(() => {
    menuComboTimeoutId = null;
    menuComboSource = null;
    if (state.isPlaying) {
      if (state.isParentPanelOpen) {
        closeParentPanel();
      } else {
        openParentPanel();
      }
    }
  }, menuReturnConfig.gamepadHoldMs);

  return true;
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

function handleGamepadParentPanel(gamepad, horizontal, primaryPressed) {
  const comboPressed = maybeStartGamepadMenuCombo(gamepad);
  if (comboPressed) {
    gamepadState.previousButtons.primary = false;
    return;
  }

  const movingLeft = horizontal < -0.5;
  const movingRight = horizontal > 0.5;
  const horizontalPressed = movingLeft || movingRight;

  if (horizontalPressed && !gamepadState.previousDirections.left && !gamepadState.previousDirections.right) {
    gamepadState.parentFocusIndex = movingLeft ? 0 : 1;
    updateParentFocus();
  }

  gamepadState.previousDirections.left = movingLeft;
  gamepadState.previousDirections.right = movingRight;

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    [parentMenuAction, parentExitAction][gamepadState.parentFocusIndex]?.click();
  }
}

function handleGamepadResumeOverlay(primaryPressed) {
  if (primaryPressed && !gamepadState.previousButtons.primary) {
    resumeButton.click();
  }
}

function handleGamepadGameplay(gamepad) {
  const comboPressed = maybeStartGamepadMenuCombo(gamepad);
  const primaryPressed = !comboPressed && isGamepadBurstPressed(gamepad);

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    startGamepadSpawn();
  }

  if (!primaryPressed) {
    stopGamepadSpawn();
  }

  gamepadState.previousButtons.primary = primaryPressed;
  gamepadState.previousButtons.menu = comboPressed;
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

    if (state.isParentPanelOpen) {
      handleGamepadParentPanel(activeGamepad, menuHorizontal, primaryPressed);
      gamepadState.previousButtons.primary = primaryPressed;
    } else if (state.isPausedForFocus) {
      handleGamepadResumeOverlay(primaryPressed);
      gamepadState.previousButtons.primary = primaryPressed;
    } else if (state.isPlaying) {
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
  if (!canInteractWithGameplay()) {
    return;
  }

  if (event.target === fullscreenButton) {
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

  if (state.isPausedForFocus && event.code === "Enter") {
    event.preventDefault();
    resumeButton.click();
    return;
  }

  if (event.key === "Tab") {
    return;
  }

  if (heldKeys.has(event.code)) {
    return;
  }

  heldKeys.set(event.code, 0);

  if (isKeyboardMenuCombo(event)) {
    startKeyboardMenuCombo();
    return;
  }

  if (isModifierKey(event.code)) {
    return;
  }

  if (!canInteractWithGameplay()) {
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
  }
  heldKeys.delete(event.code);

  if (event.code === "KeyM" || event.code === "ShiftLeft" || event.code === "ShiftRight") {
    clearMenuReturnCombo();
  }
}

function releaseAllKeys() {
  heldKeys.forEach((intervalId) => window.clearInterval(intervalId));
  heldKeys.clear();
  stopGamepadSpawn();
  clearMenuReturnCombo();
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
  state.isPausedForFocus = false;
  state.isParentPanelOpen = false;
  state.pendingStart = false;
  state.fullscreenWanted = false;
  state.remainingSessionMs = null;
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
  playground.classList.remove("is-paused");
  playground.classList.remove("is-parent-open");
  menuScreen.removeAttribute("hidden");
  resumeScreen.setAttribute("aria-hidden", "true");
  parentScreen.setAttribute("aria-hidden", "true");
  setMenuFocusForState();
  updateParentFocus();
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
  const durationMs = state.remainingSessionMs ?? getTimerDurationMs();
  clearSessionTimer();

  if (!durationMs) {
    state.remainingSessionMs = null;
    return;
  }

  state.remainingSessionMs = durationMs;
  state.sessionEndsAt = Date.now() + durationMs;
  playground.classList.add("has-timer");
  updateSessionTimerLabel();

  sessionTimerIntervalId = window.setInterval(() => {
    updateSessionTimerLabel();
  }, 1000);

  sessionTimerTimeoutId = window.setTimeout(() => {
    state.remainingSessionMs = null;
    endSessionSoftly();
  }, durationMs);
}

function startSessionCore() {
  state.isPlaying = true;
  state.isEnding = false;
  state.pendingStart = false;
  state.isPausedForFocus = false;
  state.isParentPanelOpen = false;
  applyRandomTheme();
  clearPrimeTimeouts();
  clearBursts();
  resetHint();
  playground.classList.add("is-playing");
  playground.classList.remove("is-ending");
  playground.classList.remove("is-paused");
  playground.classList.remove("is-parent-open");
  menuScreen.setAttribute("hidden", "hidden");
  resumeScreen.setAttribute("aria-hidden", "true");
  parentScreen.setAttribute("aria-hidden", "true");
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
    syncFullscreenState();
  } catch (error) {
    console.error("Fullscreen error", error);
  }
}

async function ensureFullscreen() {
  if (document.fullscreenElement) {
    syncFullscreenState();
    return true;
  }

  try {
    await document.documentElement.requestFullscreen();
    syncFullscreenState();
    return true;
  } catch (error) {
    syncFullscreenState();
    console.error("Fullscreen error", error);
    return false;
  }
}

function pauseForInterruption(title, text) {
  if (!state.isPlaying || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  stopAllInteractiveInput();
  pauseSessionTimer();
  showResumeScreen(title, text);
}

async function startGame() {
  state.fullscreenWanted = true;
  state.pendingStart = true;
  const enteredFullscreen = await ensureFullscreen();

  if (!enteredFullscreen) {
    menuScreen.setAttribute("hidden", "hidden");
    showResumeScreen(
      "plein ecran requis",
      "touche une fois pour passer en plein ecran avant de lancer la partie.",
      "entrer en plein ecran",
      true
    );
    return;
  }

  state.remainingSessionMs = getTimerDurationMs();
  startSessionCore();
}

async function handleResumeAction() {
  if (state.fullscreenWanted && !document.fullscreenElement) {
    const enteredFullscreen = await ensureFullscreen();
    if (!enteredFullscreen) {
      showResumeScreen(
        "plein ecran requis",
        state.pendingStart
          ? "touche une fois pour passer en plein ecran avant de lancer la partie."
          : "retourne dans le plein ecran pour reprendre tranquillement.",
        state.pendingStart ? "entrer en plein ecran" : "reprendre",
        state.pendingStart
      );
      return;
    }
  }

  hideResumeScreen();

  if (state.pendingStart) {
    state.remainingSessionMs = getTimerDurationMs();
    startSessionCore();
    return;
  }

  if (state.isPlaying && !state.isEnding) {
    startSessionTimer();
  }
}

async function exitFullscreenToMenu() {
  state.fullscreenWanted = false;

  if (document.fullscreenElement) {
    try {
      await document.exitFullscreen();
    } catch (error) {
      console.error("Exit fullscreen error", error);
    }
  }

  syncFullscreenState();
  showMenu();
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

function handleVisibilityChange() {
  if (document.hidden) {
    pauseForInterruption("petite pause", "reviens en plein ecran pour continuer la partie.");
  }
}

function handleWindowBlur() {
  releaseAllKeys();
  pauseForInterruption("petite pause", "reviens en plein ecran pour continuer la partie.");
}

function handleFullscreenChange() {
  syncFullscreenState();

  if (!state.fullscreenWanted || !state.isPlaying || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  if (!document.fullscreenElement) {
    pauseForInterruption("plein ecran requis", "touche une fois pour revenir dans le jeu en plein ecran.");
  }
}

applyRandomTheme();
playground.classList.toggle("is-low-power", lowPowerMode);
syncOptionButtons();
showMenu();
setGamepadStatusLabel();
resetGamepadCursor();
updateMenuFocus();
syncFullscreenState();
pollGamepads();

playground.addEventListener("pointerdown", handlePointer, { passive: false });
fullscreenButton.addEventListener("click", toggleFullscreen);
parentHotspot.addEventListener("click", openParentPanel);
menuScreen.addEventListener("click", handleOptionClick);
playButton.addEventListener("click", startGame);
resumeButton.addEventListener("click", handleResumeAction);
resumeMenuButton.addEventListener("click", showMenu);
parentMenuAction.addEventListener("click", showMenu);
parentExitAction.addEventListener("click", exitFullscreenToMenu);
window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", releaseKey);
window.addEventListener("blur", handleWindowBlur);
window.addEventListener("resize", resetGamepadCursor);
window.addEventListener("gamepadconnected", handleGamepadConnected);
window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);
document.addEventListener("visibilitychange", handleVisibilityChange);
document.addEventListener("fullscreenchange", handleFullscreenChange);

document.addEventListener(
  "gesturestart",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);
