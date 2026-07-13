const themes = [
  "theme-sky",
  "theme-meadow",
  "theme-ocean",
  "theme-paper",
  "theme-sunset",
  "theme-mint",
  "theme-peach"
];
const universeThemePools = {
  surprise: themes,
  animals: ["theme-meadow", "theme-mint", "theme-sky"],
  vehicles: ["theme-sky", "theme-paper", "theme-sunset"],
  magic: ["theme-peach", "theme-sunset", "theme-paper"]
};

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
const specialEventKinds = ["hero", "rainbow", "super-rain", "parade", "party"];
const universeConfigs = {
  surprise: {
    pool: randomEmojiPool,
    specialKinds: specialEventKinds,
    cue: "✨"
  },
  animals: {
    pool: animalEmojiPool,
    specialKinds: ["hero", "parade", "super-rain"],
    cue: "🐾"
  },
  vehicles: {
    pool: vehicleEmojiPool,
    specialKinds: ["parade", "rainbow", "super-rain"],
    cue: "🏁"
  },
  magic: {
    pool: magicEmojiPool,
    specialKinds: ["rainbow", "party", "hero"],
    cue: "🪄"
  }
};
const specialEventCues = {
  hero: "🐾",
  rainbow: "🌈",
  "super-rain": "☔",
  parade: "🏁",
  party: "🎉"
};
const specialEventConfig = {
  minCooldownMs: 22000,
  maxCooldownMs: 38000,
  minInteractions: 14
};
const energyConfigs = {
  gentle: {
    speedMode: "slow",
    minCooldownMs: 34000,
    maxCooldownMs: 54000,
    minInteractions: 20,
    visualThresholds: { normal: 0.68, rain: 0.92 },
    specialBurstScale: 0.72
  },
  normal: {
    speedMode: "normal",
    minCooldownMs: 22000,
    maxCooldownMs: 38000,
    minInteractions: 14,
    visualThresholds: { normal: 0.5, rain: 0.82 },
    specialBurstScale: 1
  },
  party: {
    speedMode: "fast",
    minCooldownMs: 14000,
    maxCooldownMs: 26000,
    minInteractions: 9,
    visualThresholds: { normal: 0.32, rain: 0.72 },
    specialBurstScale: 1.25
  }
};
const soundConfigs = {
  off: { volume: 0 },
  soft: { volume: 0.16 }
};
const timerLabels = {
  5: "5 min",
  10: "10 min",
  15: "15 min",
  off: "infini"
};
const universeLabels = {
  surprise: "surprise",
  animals: "animaux",
  vehicles: "bolides",
  magic: "magie"
};
const energyLabels = {
  gentle: "doux",
  normal: "normal",
  party: "fete"
};
const soundLabels = {
  off: "silence",
  soft: "doux"
};
const idleNudgeDelays = {
  gentle: 11000,
  normal: 8500,
  party: 6500
};
const blockedGameplayKeyCodes = new Set([
  "MetaLeft", "MetaRight", "OSLeft", "OSRight", "Super", "Hyper", "Fn",
  "ContextMenu", "Escape", "PrintScreen", "ScrollLock", "Pause",
  "CapsLock", "NumLock"
]);
for (let keyIndex = 1; keyIndex <= 12; keyIndex += 1) {
  blockedGameplayKeyCodes.add(`F${keyIndex}`);
}
const distributedPointCells = [
  [0.18, 0.2], [0.5, 0.18], [0.82, 0.2],
  [0.24, 0.48], [0.76, 0.48],
  [0.18, 0.78], [0.5, 0.82], [0.82, 0.78]
];
const pointerRepeatWindowMs = 2600;
const emojiAssetBaseUrl = "./assets/twemoji";
const lowPowerMode =
  (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4) ||
  /arm|aarch64|raspberry/i.test(navigator.userAgent);
const storageKey = "sancho-tap-tap:settings";
const performanceProfiles = {
  normal: { maxBursts: 24, sparkleRange: [3, 5], ring: true, primeCount: 2, rainBursts: 2, sizeScale: 1 },
  light: { maxBursts: 12, sparkleRange: [1, 2], ring: false, primeCount: 1, rainBursts: 1, sizeScale: 0.9 },
  ultra: { maxBursts: 8, sparkleRange: [0, 1], ring: false, primeCount: 1, rainBursts: 0, sizeScale: 0.8 }
};
const speedSettings = {
  slow: { burstLifetime: 4000, keyBurstInterval: 220, animationDuration: 4000 },
  normal: { burstLifetime: 2700, keyBurstInterval: 150, animationDuration: 2700 },
  fast: { burstLifetime: 1700, keyBurstInterval: 90, animationDuration: 1700 }
};

const playground = document.getElementById("playground");
const emojiStage = document.getElementById("emojiStage");
const specialStage = document.getElementById("specialStage");
const fullscreenButton = document.getElementById("fullscreenButton");
const parentHotspot = document.getElementById("parentHotspot");
const menuScreen = document.getElementById("menuScreen");
const playButton = document.getElementById("playButton");
const gamepadStatus = document.getElementById("gamepadStatus");
const gamepadCursor = document.getElementById("gamepadCursor");
const sessionTimer = document.getElementById("sessionTimer");
const specialProgress = document.getElementById("specialProgress");
const specialProgressCue = document.getElementById("specialProgressCue");
const resumeScreen = document.getElementById("resumeScreen");
const resumeTitle = document.getElementById("resumeTitle");
const resumeText = document.getElementById("resumeText");
const resumeButton = document.getElementById("resumeButton");
const resumeMenuButton = document.getElementById("resumeMenuButton");
const parentScreen = document.getElementById("parentScreen");
const parentResumeAction = document.getElementById("parentResumeAction");
const parentRestartAction = document.getElementById("parentRestartAction");
const parentMenuAction = document.getElementById("parentMenuAction");
const parentExitAction = document.getElementById("parentExitAction");
const parentTimerSummary = document.getElementById("parentTimerSummary");
const parentUniverseSummary = document.getElementById("parentUniverseSummary");
const parentEnergySummary = document.getElementById("parentEnergySummary");
const parentSoundSummary = document.getElementById("parentSoundSummary");
const lockScreen = document.getElementById("lockScreen");
const endingScreen = document.getElementById("endingScreen");
const endingCelebration = document.getElementById("endingCelebration");
const hint = document.getElementById("hint");
const optionButtons = Array.from(document.querySelectorAll(".option-button"));
const menuFocusables = [...optionButtons, playButton];
const parentFocusables = [parentResumeAction, parentRestartAction, parentMenuAction, parentExitAction];

let burstCount = 0;
const heldKeys = new Map();
let primeTimeouts = [];
let animationFrameId = null;
let sessionTimerTimeoutId = null;
let sessionTimerIntervalId = null;
let endingTimeoutId = null;
let menuComboTimeoutId = null;
let menuComboSource = null;
let specialEventTimeoutId = null;
let specialProgressFrameId = null;
let specialEventTaskIds = [];
let idleNudgeTimeoutId = null;
let lastGameplayActivityAt = 0;
let distributedPointCursor = Math.floor(Math.random() * distributedPointCells.length);
let pointerTapZone = "";
let pointerTapZoneCount = 0;
let lastPointerTapAt = 0;
let audioContext = null;
let lastTapSoundAt = 0;
const state = {
  isPlaying: false,
  speedMode: "normal",
  visualMode: "normal",
  universeMode: "surprise",
  energyMode: "normal",
  soundMode: "off",
  timerMode: "10",
  sessionEndsAt: null,
  remainingSessionMs: null,
  isEnding: false,
  isSessionLocked: false,
  isPausedForFocus: false,
  isParentPanelOpen: false,
  fullscreenWanted: false,
  pendingStart: false,
  specialEventActive: false,
  specialEventKind: "",
  lastSpecialKind: "",
  nextSpecialKind: "",
  lastSpecialScheduledAt: 0,
  nextSpecialAt: 0,
  specialCooldownTotalMs: 1,
  pausedSpecialCooldownRemainingMs: null,
  interactionsSinceSpecial: 0
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
  [4, 5, 6, 7],
  [8, 9, 10],
  [11, 12],
  [13]
];
const gamepadConfig = {
  deadzone: 0.24,
  moveSpeed: 15,
  menuMoveCooldown: 170
};
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function loadSavedSettings() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    if (saved.timerMode) {
      state.timerMode = saved.timerMode;
    }
    if (saved.universeMode && universeConfigs[saved.universeMode]) {
      state.universeMode = saved.universeMode;
    }
    if (saved.energyMode && energyConfigs[saved.energyMode]) {
      state.energyMode = saved.energyMode;
    }
    if (saved.soundMode && soundConfigs[saved.soundMode]) {
      state.soundMode = saved.soundMode;
    }
  } catch (error) {
    console.error("Settings load error", error);
  }
}

function persistSettings() {
  try {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        timerMode: state.timerMode,
        universeMode: state.universeMode,
        energyMode: state.energyMode,
        soundMode: state.soundMode
      })
    );
  } catch (error) {
    console.error("Settings save error", error);
  }
}

function emojiToAssetCode(emojiChar) {
  return Array.from(emojiChar)
    .map((symbol) => symbol.codePointAt(0))
    .filter((codepoint) => codepoint !== 0xfe0f)
    .map((codepoint) => codepoint.toString(16))
    .join("-");
}

function getCurrentEmojiPool() {
  return universeConfigs[state.universeMode]?.pool || randomEmojiPool;
}

function getEnergyConfig() {
  return energyConfigs[state.energyMode] || energyConfigs.normal;
}

function getSoundConfig() {
  return soundConfigs[state.soundMode] || soundConfigs.off;
}

function ensureAudioContext() {
  if (state.soundMode === "off") {
    return null;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext && navigator.userActivation && !navigator.userActivation.isActive) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playTone(frequency, startDelay, duration, gain = 1, type = "sine") {
  const context = ensureAudioContext();
  if (!context) {
    return;
  }

  const volume = getSoundConfig().volume;
  if (!volume) {
    return;
  }

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const startAt = context.currentTime + startDelay;
  const endAt = startAt + duration;
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gainNode.gain.setValueAtTime(0.0001, startAt);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(volume * gain, 0.0001), startAt + 0.018);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, endAt);
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(endAt + 0.02);
}

function playTapSound() {
  if (state.soundMode === "off") {
    return;
  }

  const now = performance.now();
  if (now - lastTapSoundAt < 95) {
    return;
  }

  lastTapSoundAt = now;
  const baseFrequency = state.energyMode === "party" ? 620 : 520;
  playTone(baseFrequency + randomBetween(-35, 40), 0, 0.07, 0.55, "sine");
  playTone(baseFrequency * 1.5, 0.025, 0.055, 0.22, "triangle");
}

function playSpecialSound(kind) {
  if (state.soundMode === "off") {
    return;
  }

  const patterns = {
    hero: [440, 660, 880],
    rainbow: [523, 659, 784, 1046],
    "super-rain": [740, 620, 520],
    parade: [392, 523, 392, 659],
    party: [523, 659, 784, 1046]
  };
  const notes = patterns[kind] || [520, 680, 840];
  notes.forEach((frequency, index) => {
    playTone(frequency, index * 0.075, 0.13, 0.42, index % 2 ? "triangle" : "sine");
  });
}

function chooseAutoVisualMode() {
  const roll = Math.random();
  const thresholds = getEnergyConfig().visualThresholds;
  if (roll < thresholds.normal) {
    return "normal";
  }
  if (roll < thresholds.rain) {
    return "rain";
  }
  return "giant";
}

function chooseSpecialEventKind() {
  const universeKinds = universeConfigs[state.universeMode]?.specialKinds || specialEventKinds;
  const availableKinds = universeKinds.filter((kind) => kind !== state.lastSpecialKind);
  return pickRandom(availableKinds.length ? availableKinds : universeKinds);
}

function scheduleNextSpecialEvent(baseTime = Date.now()) {
  const energyConfig = getEnergyConfig();
  const cooldownMs = randomBetween(energyConfig.minCooldownMs, energyConfig.maxCooldownMs);
  state.lastSpecialScheduledAt = baseTime;
  state.specialCooldownTotalMs = cooldownMs;
  state.pausedSpecialCooldownRemainingMs = null;
  state.nextSpecialAt = baseTime + cooldownMs;
  state.nextSpecialKind = chooseSpecialEventKind();
  updateSpecialCue();
  updateSpecialProgress();
}

function updateSpecialCue() {
  if (!specialProgress || !specialProgressCue) {
    return;
  }

  const cue = specialEventCues[state.nextSpecialKind] || universeConfigs[state.universeMode]?.cue || "✨";
  specialProgress.dataset.kind = state.nextSpecialKind || "";
  specialProgressCue.textContent = cue;
}

function updateSpecialProgress() {
  if (!specialProgress) {
    return;
  }

  const totalMs = Math.max(state.specialCooldownTotalMs, 1);
  const elapsedMs = Date.now() - state.lastSpecialScheduledAt;
  const timeProgress = clamp(elapsedMs / totalMs, 0, 1);
  const interactionProgress = clamp(
    state.interactionsSinceSpecial / getEnergyConfig().minInteractions,
    0,
    1
  );
  const progress = state.specialEventActive || !canInteractWithGameplay()
    ? 0
    : Math.min(timeProgress, interactionProgress);
  specialProgress.style.setProperty("--special-progress", progress.toFixed(3));
}

function pauseSpecialCooldown() {
  if (!state.nextSpecialAt) {
    return;
  }

  state.pausedSpecialCooldownRemainingMs = Math.max(state.nextSpecialAt - Date.now(), 0);
}

function resumeSpecialCooldown() {
  if (state.pausedSpecialCooldownRemainingMs === null) {
    return;
  }

  const remainingMs = state.pausedSpecialCooldownRemainingMs;
  const elapsedMs = Math.max(state.specialCooldownTotalMs - remainingMs, 0);
  state.lastSpecialScheduledAt = Date.now() - elapsedMs;
  state.nextSpecialAt = Date.now() + remainingMs;
  state.pausedSpecialCooldownRemainingMs = null;
  updateSpecialProgress();
}

function startSpecialProgressLoop() {
  if (specialProgressFrameId) {
    return;
  }

  const tick = () => {
    updateSpecialProgress();
    specialProgressFrameId = window.requestAnimationFrame(tick);
  };
  tick();
}

function stopSpecialProgressLoop({ resetProgress = true } = {}) {
  if (specialProgressFrameId) {
    window.cancelAnimationFrame(specialProgressFrameId);
    specialProgressFrameId = null;
  }
  if (resetProgress && specialProgress) {
    specialProgress.style.setProperty("--special-progress", "0");
  }
}

function getResolvedPerformanceMode() {
  return lowPowerMode ? "light" : "normal";
}

function getPerformanceProfile() {
  return performanceProfiles[getResolvedPerformanceMode()];
}

function getSpeedSetting() {
  return speedSettings[getEnergyConfig().speedMode] || speedSettings[state.speedMode] || speedSettings.normal;
}

function getSpecialBurstCount(baseCount) {
  return Math.max(1, Math.round(baseCount * getEnergyConfig().specialBurstScale));
}

function getTimerDurationMs() {
  if (state.timerMode === "off") {
    return null;
  }

  return Number.parseInt(state.timerMode, 10) * 60 * 1000;
}

function getUniverseThemePool() {
  return universeThemePools[state.universeMode] || universeThemePools.surprise;
}

function applyUniverseTheme() {
  const nextTheme = pickRandom(getUniverseThemePool());
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
  if (variant !== "rain") {
    emoji.style.animationDuration = `${getSpeedSetting().animationDuration}ms`;
  }
  emoji.style.setProperty("--twist", `${(Math.random() * 26 - 13).toFixed(2)}deg`);
  emoji.style.setProperty("--size-scale", getPerformanceProfile().sizeScale.toFixed(2));
  return emoji;
}

function createSparkles(x, y) {
  const sparkles = [];
  const profile = getPerformanceProfile();
  const [sparkleMin, sparkleMax] = profile.sparkleRange;
  const count = sparkleMax <= sparkleMin ? sparkleMin : sparkleMin + Math.floor(Math.random() * (sparkleMax - sparkleMin + 1));

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

function clearSpecialTasks() {
  specialEventTaskIds.forEach((taskId) => window.clearTimeout(taskId));
  specialEventTaskIds = [];
}

function scheduleSpecialTask(callback, delay) {
  const taskId = window.setTimeout(() => {
    specialEventTaskIds = specialEventTaskIds.filter((id) => id !== taskId);
    if (!state.specialEventActive) {
      return;
    }
    callback();
  }, delay);
  specialEventTaskIds.push(taskId);
}

function pruneBurstsIfNeeded() {
  while (burstCount >= getPerformanceProfile().maxBursts && emojiStage.firstChild) {
    emojiStage.removeChild(emojiStage.firstChild);
    burstCount -= 1;
  }
}

function spawnBurst(x, y, options = {}) {
  pruneBurstsIfNeeded();

  const burst = document.createElement("div");
  burst.className = "burst";
  const sizeMultiplier = options.sizeMultiplier || 1;
  const emojiVariant = options.variant || "main";

  const mainEmoji = createEmoji(x, y, pickRandom(getCurrentEmojiPool()), emojiVariant);
  mainEmoji.style.setProperty("--burst-scale", sizeMultiplier.toFixed(2));
  let burstLifetime = getSpeedSetting().burstLifetime;
  if (emojiVariant === "rain") {
    const fallDistance = Math.max(window.innerHeight - y + 180, 260);
    mainEmoji.classList.add("rain-drop");
    mainEmoji.style.animationDuration = "7800ms";
    mainEmoji.style.setProperty("--rain-drift", `${(Math.random() * 220 - 110).toFixed(2)}px`);
    mainEmoji.style.setProperty("--rain-fall", `${fallDistance.toFixed(2)}px`);
    burstLifetime = Math.max(getSpeedSetting().burstLifetime, 7800);
  }
  const ring = getPerformanceProfile().ring ? createRing(x, y) : null;
  const sparkles = createSparkles(x, y);

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

function createSpecialOverlay(className, x, y) {
  const overlay = document.createElement("div");
  overlay.className = `special-event ${className}`;
  overlay.style.setProperty("--origin-x", `${x.toFixed(2)}px`);
  overlay.style.setProperty("--origin-y", `${y.toFixed(2)}px`);
  return overlay;
}

function createSpecialEmojiNode(x, y, emojiChar, className, scale = 1) {
  const emoji = createEmoji(x, y, emojiChar, "main");
  emoji.classList.add("special-emoji", className);
  emoji.style.animationDuration = "";
  emoji.style.setProperty("--burst-scale", scale.toFixed(2));
  return emoji;
}

function createHeroPrintNode(x, y, emojiChar, delay, scale = 1) {
  const print = createEmoji(x, y, emojiChar, "main");
  print.classList.add("special-hero-print");
  print.style.animationDuration = "";
  print.style.animationDelay = `${delay}ms`;
  print.style.setProperty("--burst-scale", scale.toFixed(2));
  return print;
}

function getHeroEmojiPool() {
  if (state.universeMode === "animals") {
    return ["🐶", "🐱", "🦊", "🐸", "🦁", "🦒", "🐘", "🦄"];
  }
  if (state.universeMode === "vehicles") {
    return ["🚗", "🚕", "🚙", "🏎️", "🚜", "🚒", "🚀"];
  }
  if (state.universeMode === "magic") {
    return ["🦄", "🧚", "👑", "🪄", "🔮", "🌙"];
  }
  return ["🦄", "🐬", "🐘", "🦒", "🦁", "🦖", "🚀"];
}

function getHeroPrintEmoji() {
  if (state.universeMode === "vehicles") {
    return "💨";
  }
  if (state.universeMode === "magic") {
    return "✨";
  }
  return "🌟";
}

function setWanderPath(node, startX, startY, mid1X, mid1Y, mid2X, mid2Y, mid3X, mid3Y, endX, endY) {
  node.style.setProperty("--wander-start-x", `${startX.toFixed(2)}px`);
  node.style.setProperty("--wander-start-y", `${startY.toFixed(2)}px`);
  node.style.setProperty("--wander-mid1-x", `${mid1X.toFixed(2)}px`);
  node.style.setProperty("--wander-mid1-y", `${mid1Y.toFixed(2)}px`);
  node.style.setProperty("--wander-mid2-x", `${mid2X.toFixed(2)}px`);
  node.style.setProperty("--wander-mid2-y", `${mid2Y.toFixed(2)}px`);
  node.style.setProperty("--wander-mid3-x", `${mid3X.toFixed(2)}px`);
  node.style.setProperty("--wander-mid3-y", `${mid3Y.toFixed(2)}px`);
  node.style.setProperty("--wander-end-x", `${endX.toFixed(2)}px`);
  node.style.setProperty("--wander-end-y", `${endY.toFixed(2)}px`);
}

function interpolateWanderPoint(points, progress) {
  const clamped = clamp(progress, 0, 1);
  const segmentCount = points.length - 1;
  const scaled = clamped * segmentCount;
  const index = Math.min(Math.floor(scaled), segmentCount - 1);
  const localT = scaled - index;
  const start = points[index];
  const end = points[index + 1];

  return {
    x: start.x + (end.x - start.x) * localT,
    y: start.y + (end.y - start.y) * localT
  };
}

function spawnHeroSpecial(x, y) {
  const exitLeft = Math.random() > 0.5;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sidePadding = Math.max(width * 0.06, 56);
  const safeTop = Math.max(height * 0.16, 76);
  const safeBottom = Math.max(height - Math.max(height * 0.14, 78), safeTop + 80);
  const startX = exitLeft ? width + sidePadding : -sidePadding;
  const endX = exitLeft ? -sidePadding : width + sidePadding;
  const startY = clamp(y + randomBetween(-height * 0.18, height * 0.16), safeTop, safeBottom);
  const mid1X = exitLeft ? width * randomBetween(0.68, 0.78) : width * randomBetween(0.22, 0.32);
  const mid1Y = clamp(startY + randomBetween(-height * 0.2, height * 0.16), safeTop, safeBottom);
  const mid2X = width * randomBetween(0.44, 0.56);
  const mid2Y = clamp(height * randomBetween(0.38, 0.62), safeTop, safeBottom);
  const mid3X = exitLeft ? width * randomBetween(0.22, 0.34) : width * randomBetween(0.66, 0.78);
  const mid3Y = clamp(mid2Y + randomBetween(-height * 0.18, height * 0.18), safeTop, safeBottom);
  const endY = clamp(mid3Y + randomBetween(-height * 0.22, height * 0.22), safeTop, safeBottom);
  const wanderPoints = [
    { x: startX, y: startY },
    { x: mid1X, y: mid1Y },
    { x: mid2X, y: mid2Y },
    { x: mid3X, y: mid3Y },
    { x: endX, y: endY }
  ];
  const overlay = createSpecialOverlay("special-hero", width / 2, height / 2);
  const heroScale = width < 520 ? 1.72 : 2.65;
  const printScaleBase = width < 520 ? 0.34 : 0.42;
  const heroEmoji = createSpecialEmojiNode(0, 0, pickRandom(getHeroEmojiPool()), "special-hero-emoji", heroScale);
  setWanderPath(heroEmoji, startX, startY, mid1X, mid1Y, mid2X, mid2Y, mid3X, mid3Y, endX, endY);

  overlay.appendChild(heroEmoji);
  const printCount = getResolvedPerformanceMode() === "normal" ? 7 : 4;
  const printEmoji = getHeroPrintEmoji();
  for (let index = 0; index < printCount; index += 1) {
    const progress = (index + 1) / (printCount + 1);
    const point = interpolateWanderPoint(wanderPoints, progress);
    overlay.appendChild(
      createHeroPrintNode(
        clamp(point.x + randomBetween(-22, 22), 28, width - 28),
        clamp(point.y + randomBetween(-18, 18), 28, height - 28),
        printEmoji,
        540 + index * 620,
        printScaleBase + Math.random() * 0.12
      )
    );
  }
  specialStage.replaceChildren(overlay);

  const heroDuration = 7600;
  const burstCountForHero = getSpecialBurstCount(getResolvedPerformanceMode() === "normal" ? 18 : 9);
  for (let index = 0; index < burstCountForHero; index += 1) {
    scheduleSpecialTask(() => {
      const progress = index / Math.max(burstCountForHero - 1, 1);
      const point = interpolateWanderPoint(wanderPoints, progress);
      const nextPoint = interpolateWanderPoint(wanderPoints, Math.min(progress + 0.08, 1));
      const trailX = point.x - (nextPoint.x - point.x) * 0.7;
      const trailY = point.y - (nextPoint.y - point.y) * 0.7;
      const burstX = clamp(trailX + randomBetween(-46, 46), 40, window.innerWidth - 40);
      const burstY = clamp(trailY + randomBetween(-42, 42), 40, window.innerHeight - 40);
      spawnBurst(burstX, burstY, { sizeMultiplier: 0.82 + Math.random() * 0.24 });
    }, 520 + index * ((heroDuration - 1400) / Math.max(burstCountForHero - 1, 1)));
  }

  return heroDuration;
}

function spawnRainbowSpecial(x, y) {
  const overlay = createSpecialOverlay("special-rainbow", x, y);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const arcColors = [
    "#ff5d67",
    "#ff9d3b",
    "#ffe25d",
    "#67d87b",
    "#5ab8ff",
    "#7283ff",
    "#ff77d2"
  ];

  const ribbon = document.createElement("div");
  ribbon.className = "special-rainbow-ribbon";

  arcColors.forEach((color, index) => {
    const band = document.createElement("div");
    band.className = "special-rainbow-band";
    band.style.setProperty("--band-color", color);
    band.style.setProperty("--band-offset", `${index * 1.12}rem`);
    band.style.animationDelay = `${index * 35}ms`;
    ribbon.appendChild(band);
  });
  overlay.appendChild(ribbon);

  ["left", "right"].forEach((side) => {
    const cloud = document.createElement("div");
    cloud.className = `special-rainbow-cloud special-rainbow-cloud-${side}`;
    overlay.appendChild(cloud);
  });

  specialStage.replaceChildren(overlay);

  const burstCountForRainbow = getSpecialBurstCount(getResolvedPerformanceMode() === "normal" ? 8 : 4);
  for (let index = 0; index < burstCountForRainbow; index += 1) {
    scheduleSpecialTask(() => {
      const progress = (index + 1) / (burstCountForRainbow + 1);
      const burstX = width * (0.12 + progress * 0.76);
      const burstY = clamp(height * 0.7 - Math.sin(progress * Math.PI) * (height * 0.28), 70, height - 90);
      spawnBurst(burstX, burstY, { sizeMultiplier: 0.96 + Math.random() * 0.2 });
    }, 220 + index * 160);
  }

  return 3600;
}

function spawnSuperRainSpecial(x, y) {
  const overlay = createSpecialOverlay("special-super-rain", x, y);
  const cloud = document.createElement("div");
  cloud.className = "special-cloud";
  const cloudX = clamp(x, 120, window.innerWidth - 120);
  const cloudY = clamp(y - 120, 72, window.innerHeight * 0.32);
  cloud.style.left = `${cloudX}px`;
  cloud.style.top = `${cloudY}px`;
  overlay.appendChild(cloud);
  const cloudTwo = document.createElement("div");
  cloudTwo.className = "special-cloud special-cloud-secondary";
  cloudTwo.style.left = `${clamp(cloudX + randomBetween(-180, 180), 120, window.innerWidth - 120)}px`;
  cloudTwo.style.top = `${clamp(cloudY + randomBetween(-20, 20), 72, window.innerHeight * 0.34)}px`;
  overlay.appendChild(cloudTwo);
  specialStage.replaceChildren(overlay);

  const burstCountForRain = getSpecialBurstCount(getResolvedPerformanceMode() === "normal" ? 16 : 8);
  for (let index = 0; index < burstCountForRain; index += 1) {
    scheduleSpecialTask(() => {
      const burstX = randomBetween(window.innerWidth * 0.08, window.innerWidth * 0.92);
      const burstY = randomBetween(28, Math.max(window.innerHeight * 0.34, 64));
      spawnBurst(burstX, burstY, {
        sizeMultiplier: 1 + Math.random() * 0.36,
        variant: "rain"
      });
    }, 120 + index * 150);
  }

  return 4300;
}

function getParadeEmojiPool() {
  if (state.universeMode === "vehicles") {
    return ["🚗", "🚕", "🚙", "🏎️", "🚜", "🚒", "🚀"];
  }
  if (state.universeMode === "animals") {
    return ["🐶", "🐱", "🦊", "🐸", "🦁", "🦒", "🦄"];
  }
  if (state.universeMode === "magic") {
    return ["🦄", "🧚", "👑", "🪄", "🔮", "💫", "🌙"];
  }
  return ["🚗", "🦄", "🦖", "🚀", "🐬", "🎈", "🏎️"];
}

function setParadePath(node, startX, endX, y, delay, direction) {
  const directionMultiplier = Number(direction);
  node.style.setProperty("--parade-start-x", `${startX.toFixed(2)}px`);
  node.style.setProperty("--parade-mid-x", `${((startX + endX) / 2).toFixed(2)}px`);
  node.style.setProperty("--parade-end-x", `${endX.toFixed(2)}px`);
  node.style.setProperty("--parade-y", `${y.toFixed(2)}px`);
  node.style.setProperty("--parade-tilt-start", `${(-8 * directionMultiplier).toFixed(2)}deg`);
  node.style.setProperty("--parade-tilt-mid", `${(5 * directionMultiplier).toFixed(2)}deg`);
  node.style.setProperty("--parade-tilt-end", `${(8 * directionMultiplier).toFixed(2)}deg`);
  node.style.animationDelay = `${delay}ms`;
}

function spawnParadeSpecial(x, y) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const overlay = createSpecialOverlay("special-parade", width / 2, height / 2);
  const pool = getParadeEmojiPool();
  const rows = getSpecialBurstCount(getResolvedPerformanceMode() === "normal" ? 5 : 3);
  const duration = 5200;

  for (let index = 0; index < rows; index += 1) {
    const fromLeft = index % 2 === 0;
    const startX = fromLeft ? -90 : width + 90;
    const endX = fromLeft ? width + 90 : -90;
    const rowProgress = (index + 1) / (rows + 1);
    const rowY = clamp(height * (0.22 + rowProgress * 0.56), 82, height - 70);
    const emoji = createSpecialEmojiNode(0, 0, pickRandom(pool), "special-parade-emoji", 1.45);
    setParadePath(emoji, startX, endX, rowY, index * 280, fromLeft ? "1" : "-1");
    overlay.appendChild(emoji);

    scheduleSpecialTask(() => {
      spawnBurst(
        clamp(width * rowProgress + randomBetween(-70, 70), 40, width - 40),
        clamp(rowY + randomBetween(-26, 26), 40, height - 40),
        { sizeMultiplier: 0.88 + Math.random() * 0.18 }
      );
    }, 900 + index * 420);
  }

  specialStage.replaceChildren(overlay);
  return duration;
}

function spawnPartySpecial(x, y) {
  const overlay = createSpecialOverlay("special-party", x, y);
  const center = createSpecialEmojiNode(
    clamp(x, 80, window.innerWidth - 80),
    clamp(y, 80, window.innerHeight - 80),
    pickRandom(["🎉", "🥳", "🎈", "🪄", "👑"]),
    "special-party-hero",
    2.35
  );
  overlay.appendChild(center);
  specialStage.replaceChildren(overlay);

  const burstCountForParty = getSpecialBurstCount(getResolvedPerformanceMode() === "normal" ? 14 : 7);
  for (let index = 0; index < burstCountForParty; index += 1) {
    scheduleSpecialTask(() => {
      const point = nextDistributedPoint();
      spawnBurst(
        clamp(point.x + randomBetween(-28, 28), 36, window.innerWidth - 36),
        clamp(point.y + randomBetween(-32, 32), 36, window.innerHeight - 36),
        { sizeMultiplier: 0.95 + Math.random() * 0.32 }
      );
    }, 180 + index * 180);
  }

  return 3900;
}

function endSpecialEvent() {
  if (specialEventTimeoutId) {
    window.clearTimeout(specialEventTimeoutId);
    specialEventTimeoutId = null;
  }
  clearSpecialTasks();
  state.specialEventActive = false;
  state.specialEventKind = "";
  specialStage.replaceChildren();
  applyModeClasses();
  updateSpecialProgress();
}

function startSpecialEvent(kind, x, y) {
  if (state.specialEventActive || !canInteractWithGameplay()) {
    return;
  }

  state.specialEventActive = true;
  state.specialEventKind = kind;
  state.lastSpecialKind = kind;
  state.interactionsSinceSpecial = 0;
  scheduleNextSpecialEvent(Date.now());
  applyModeClasses();
  playSpecialSound(kind);

  let duration = 3200;
  if (kind === "hero") {
    duration = spawnHeroSpecial(x, y);
  } else if (kind === "rainbow") {
    duration = spawnRainbowSpecial(x, y);
  } else if (kind === "super-rain") {
    duration = spawnSuperRainSpecial(x, y);
  } else if (kind === "parade") {
    duration = spawnParadeSpecial(x, y);
  } else {
    duration = spawnPartySpecial(x, y);
  }

  specialEventTimeoutId = window.setTimeout(() => {
    specialEventTimeoutId = null;
    endSpecialEvent();
  }, duration);
}

function maybeTriggerSpecialEvent(x, y) {
  if (!canInteractWithGameplay() || state.specialEventActive) {
    return;
  }

  state.interactionsSinceSpecial += 1;
  if (state.interactionsSinceSpecial < getEnergyConfig().minInteractions) {
    updateSpecialProgress();
    return;
  }

  if (Date.now() < state.nextSpecialAt) {
    updateSpecialProgress();
    return;
  }

  startSpecialEvent(state.nextSpecialKind || chooseSpecialEventKind(), x, y);
}

function getPointerCoveragePlan(x, y) {
  const now = Date.now();
  const zoneColumn = Math.floor(clamp(x / Math.max(window.innerWidth, 1), 0, 0.999) * 4);
  const zoneRow = Math.floor(clamp(y / Math.max(window.innerHeight, 1), 0, 0.999) * 3);
  const zone = `${zoneColumn}:${zoneRow}`;
  if (zone === pointerTapZone && now - lastPointerTapAt < pointerRepeatWindowMs) {
    pointerTapZoneCount += 1;
  } else {
    pointerTapZone = zone;
    pointerTapZoneCount = 1;
  }
  lastPointerTapAt = now;

  if (pointerTapZoneCount < 3) {
    return null;
  }

  const mainPoint = nextDistributedPoint();
  const echoPoint = nextDistributedPoint();
  return {
    main: {
      x: clamp(mainPoint.x + randomBetween(-34, 34), 36, window.innerWidth - 36),
      y: clamp(mainPoint.y + randomBetween(-30, 30), 36, window.innerHeight - 36)
    },
    echo: {
      x: clamp(echoPoint.x + randomBetween(-34, 34), 36, window.innerWidth - 36),
      y: clamp(echoPoint.y + randomBetween(-30, 30), 36, window.innerHeight - 36),
      delay: pointerTapZoneCount % 2 === 0 ? 70 : 130
    }
  };
}

function triggerCoverageEcho(echoPoint) {
  if (!echoPoint || getResolvedPerformanceMode() !== "normal") {
    return;
  }

  window.setTimeout(() => {
    if (canInteractWithGameplay()) {
      spawnBurst(echoPoint.x, echoPoint.y, { sizeMultiplier: 0.86 });
    }
  }, echoPoint.delay);
}

function getIdleNudgeDelay() {
  const baseDelay = idleNudgeDelays[state.energyMode] || idleNudgeDelays.normal;
  return getResolvedPerformanceMode() === "normal" ? baseDelay : baseDelay + 2500;
}

function clearIdleNudge() {
  if (idleNudgeTimeoutId) {
    window.clearTimeout(idleNudgeTimeoutId);
    idleNudgeTimeoutId = null;
  }
}

function spawnIdleNudge() {
  if (!canInteractWithGameplay() || state.specialEventActive) {
    scheduleIdleNudge();
    return;
  }

  const point = nextDistributedPoint();
  spawnBurst(
    clamp(point.x + randomBetween(-24, 24), 42, window.innerWidth - 42),
    clamp(point.y + randomBetween(-22, 22), 42, window.innerHeight - 42),
    { sizeMultiplier: 0.98 }
  );
  scheduleIdleNudge();
}

function scheduleIdleNudge() {
  clearIdleNudge();
  if (!canInteractWithGameplay()) {
    return;
  }

  const delay = getIdleNudgeDelay();
  idleNudgeTimeoutId = window.setTimeout(() => {
    idleNudgeTimeoutId = null;
    if (Date.now() - lastGameplayActivityAt < delay) {
      scheduleIdleNudge();
      return;
    }
    spawnIdleNudge();
  }, delay);
}

function recordGameplayActivity() {
  lastGameplayActivityAt = Date.now();
  scheduleIdleNudge();
}

function triggerPlayModeBursts(x, y, options = {}) {
  const coveragePlan = options.source === "pointer" ? getPointerCoveragePlan(x, y) : null;
  const primaryX = coveragePlan?.main?.x ?? x;
  const primaryY = coveragePlan?.main?.y ?? y;
  state.visualMode = chooseAutoVisualMode();
  applyModeClasses();

  if (state.visualMode === "rain") {
    const originX = clamp(primaryX + (Math.random() * 240 - 120), 36, window.innerWidth - 36);
    const originY = clamp(primaryY - 90 - Math.random() * 150, 26, Math.max(primaryY - 22, 26));
    spawnBurst(originX, originY, { sizeMultiplier: 0.92, variant: "rain" });
    const extraBursts = Math.max(getPerformanceProfile().rainBursts, 2);
    for (let index = 0; index < extraBursts; index += 1) {
      const point = nextDistributedPoint();
      window.setTimeout(() => {
        if (canInteractWithGameplay()) {
          spawnBurst(
            clamp(point.x, 36, window.innerWidth - 36),
            clamp(point.y - randomBetween(70, 190), 24, Math.max(window.innerHeight * 0.58, 90)),
            {
              sizeMultiplier: 0.82 + Math.random() * 0.24,
              variant: "rain"
            }
          );
        }
      }, 420 * (index + 1));
    }
    return;
  }

  if (state.visualMode === "giant") {
    spawnBurst(primaryX, primaryY, { sizeMultiplier: 1.85 });
    if (getResolvedPerformanceMode() === "normal") {
      window.setTimeout(() => {
        if (canInteractWithGameplay()) {
          const point = nextDistributedPoint();
          spawnBurst(
            clamp(point.x + randomBetween(-36, 36), 40, window.innerWidth - 40),
            clamp(point.y + randomBetween(-32, 32), 40, window.innerHeight - 40),
            { sizeMultiplier: 1.2 }
          );
        }
      }, 90);
    }
    return;
  }

  spawnBurst(primaryX, primaryY);
  triggerCoverageEcho(coveragePlan?.echo);
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

function resetPointerCoverage() {
  pointerTapZone = "";
  pointerTapZoneCount = 0;
  lastPointerTapAt = 0;
}

function clearEndingCelebration() {
  if (endingCelebration) {
    endingCelebration.replaceChildren();
  }
}

function playEndingSound() {
  if (state.soundMode === "off") {
    return;
  }

  playTone(523, 0, 0.11, 0.32, "sine");
  playTone(659, 0.08, 0.12, 0.28, "triangle");
  playTone(784, 0.18, 0.16, 0.24, "sine");
}

function spawnEndingCelebration() {
  clearEndingCelebration();
  if (!endingCelebration) {
    return;
  }

  const pool = [...getCurrentEmojiPool(), "⭐", "✨", "🎈", "💛"];
  const count = getResolvedPerformanceMode() === "normal" ? 12 : 7;
  const rows = Math.ceil(count / 4);

  for (let index = 0; index < count; index += 1) {
    const token = createEmoji(0, 0, pickRandom(pool), "main");
    token.className = "ending-token emoji-image";
    const column = index % 4;
    const row = Math.floor(index / 4);
    const x = ((column + 0.5 + randomBetween(-0.22, 0.22)) / 4) * 100;
    const y = 18 + ((row + 0.5 + randomBetween(-0.18, 0.18)) / rows) * 64;

    token.style.left = `${clamp(x, 8, 92).toFixed(2)}%`;
    token.style.top = `${clamp(y, 16, 84).toFixed(2)}%`;
    token.style.animationDelay = `${(index % 6) * 75}ms`;
    token.style.setProperty("--ending-rotate", `${randomBetween(-14, 14).toFixed(2)}deg`);
    token.style.setProperty("--ending-drift", `${randomBetween(-18, 18).toFixed(2)}px`);
    token.style.setProperty("--ending-scale", `${randomBetween(0.88, 1.18).toFixed(2)}`);
    endingCelebration.appendChild(token);
  }

  playEndingSound();
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
  focusAction(resumeButton);
}

function hideResumeScreen() {
  state.isPausedForFocus = false;
  playground.classList.remove("is-paused");
  resumeScreen.setAttribute("aria-hidden", "true");
}

function updateParentFocus() {
  const availableActions = getParentAvailableActions();
  if (gamepadState.parentFocusIndex >= availableActions.length) {
    gamepadState.parentFocusIndex = 0;
  }
  parentFocusables.forEach((button, index) => {
    const availableIndex = availableActions.indexOf(button);
    button.classList.toggle(
      "is-focused",
      state.isParentPanelOpen &&
        gamepadState.connected &&
        availableIndex !== -1 &&
        availableIndex === gamepadState.parentFocusIndex
    );
  });
}

function getParentAvailableActions() {
  return parentFocusables.filter((button) => !button.hidden);
}

function focusAction(button) {
  if (!button) {
    return;
  }

  window.requestAnimationFrame(() => {
    if (!button.hidden) {
      button.focus({ preventScroll: true });
    }
  });
}

function focusCurrentParentAction() {
  focusAction(getParentAvailableActions()[gamepadState.parentFocusIndex]);
}

function updateParentActions() {
  parentResumeAction.hidden = state.isSessionLocked;
}

function getParentTimerSummaryLabel() {
  if (state.isSessionLocked) {
    return "terminee";
  }

  if (state.timerMode === "off") {
    return "infini";
  }

  if (state.isPlaying) {
    const remainingMs = state.sessionEndsAt
      ? state.sessionEndsAt - Date.now()
      : state.remainingSessionMs;

    if (Number.isFinite(remainingMs) && remainingMs > 0) {
      return `${formatRemainingTime(remainingMs)} restant`;
    }
  }

  return timerLabels[state.timerMode] || state.timerMode;
}

function updateParentSummary() {
  parentTimerSummary.textContent = getParentTimerSummaryLabel();
  parentUniverseSummary.textContent = universeLabels[state.universeMode] || state.universeMode;
  parentEnergySummary.textContent = energyLabels[state.energyMode] || state.energyMode;
  parentSoundSummary.textContent = soundLabels[state.soundMode] || state.soundMode;
}

function applyModeClasses() {
  const resolvedPerformanceMode = getResolvedPerformanceMode();
  playground.classList.toggle("is-low-power", resolvedPerformanceMode !== "normal");
  playground.classList.toggle("is-ultra-light", resolvedPerformanceMode === "ultra");
  playground.classList.toggle("is-rain-mode", state.visualMode === "rain");
  playground.classList.toggle("is-giant-mode", state.visualMode === "giant");
  playground.classList.toggle("is-energy-gentle", state.energyMode === "gentle");
  playground.classList.toggle("is-energy-party", state.energyMode === "party");
  playground.classList.toggle("is-universe-surprise", state.universeMode === "surprise");
  playground.classList.toggle("is-universe-animals", state.universeMode === "animals");
  playground.classList.toggle("is-universe-vehicles", state.universeMode === "vehicles");
  playground.classList.toggle("is-universe-magic", state.universeMode === "magic");
  playground.classList.toggle("is-special-active", state.specialEventActive);
  playground.classList.toggle("is-special-hero", state.specialEventKind === "hero");
  playground.classList.toggle("is-special-rainbow", state.specialEventKind === "rainbow");
  playground.classList.toggle("is-special-super-rain", state.specialEventKind === "super-rain");
  playground.classList.toggle("is-special-parade", state.specialEventKind === "parade");
  playground.classList.toggle("is-special-party", state.specialEventKind === "party");
  playground.classList.toggle("is-session-locked", state.isSessionLocked);
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
  clearIdleNudge();
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
  recordGameplayActivity();
  triggerPlayModeBursts(point.x, point.y);
  maybeTriggerSpecialEvent(point.x, point.y);
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
  if ((!state.isPlaying && !state.isSessionLocked) || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  stopAllInteractiveInput();
  pauseSpecialCooldown();
  endSpecialEvent();
  pauseSessionTimer();
  state.isParentPanelOpen = true;
  gamepadState.parentFocusIndex = 0;
  updateParentActions();
  updateParentSummary();
  parentScreen.setAttribute("aria-hidden", "false");
  playground.classList.add("is-parent-open");
  stopSpecialProgressLoop({ resetProgress: false });
  updateParentFocus();
  focusCurrentParentAction();
}

function closeParentPanel() {
  if (!state.isParentPanelOpen) {
    return;
  }

  state.isParentPanelOpen = false;
  parentScreen.setAttribute("aria-hidden", "true");
  playground.classList.remove("is-parent-open");
  updateParentFocus();

  if (state.isSessionLocked) {
    return;
  }

  if (state.isPlaying && !state.isEnding) {
    if (state.fullscreenWanted && !document.fullscreenElement) {
      showResumeScreen("plein ecran requis", "touche une fois pour revenir dans le jeu en plein ecran.");
      return;
    }

    hideResumeScreen();
    resumeSpecialCooldown();
    startSessionTimer();
    startSpecialProgressLoop();
    lastGameplayActivityAt = Date.now();
    scheduleIdleNudge();
  }
}

async function restartCurrentSession() {
  state.fullscreenWanted = true;
  parentScreen.setAttribute("aria-hidden", "true");
  playground.classList.remove("is-parent-open");
  state.isParentPanelOpen = false;
  updateParentFocus();

  if (!document.fullscreenElement) {
    const enteredFullscreen = await ensureFullscreen();
    if (!enteredFullscreen) {
      state.pendingStart = true;
      showResumeScreen(
        "plein ecran requis",
        "touche une fois pour passer en plein ecran avant de relancer.",
        "entrer en plein ecran",
        true
      );
      return;
    }
  }

  state.remainingSessionMs = getTimerDurationMs();
  startSessionCore();
}

function isModifierKey(code) {
  return code === "ShiftLeft" || code === "ShiftRight" || code === "ControlLeft" ||
    code === "ControlRight" || code === "AltLeft" || code === "AltRight" ||
    code === "MetaLeft" || code === "MetaRight";
}

function isKeyboardMenuCombo(event) {
  return event.shiftKey && event.code === "KeyM";
}

function isBlockedGameplayKey(event) {
  if (isKeyboardMenuCombo(event)) {
    return false;
  }

  return blockedGameplayKeyCodes.has(event.code) ||
    event.key === "Meta" ||
    event.key === "OS" ||
    event.key === "Super" ||
    event.key === "Hyper" ||
    event.metaKey;
}

function startKeyboardMenuCombo() {
  if (!state.isPlaying && !state.isSessionLocked) {
    return;
  }

  if (state.isParentPanelOpen) {
    closeParentPanel();
  } else {
    openParentPanel();
  }
}

function maybeStartGamepadMenuCombo(gamepad) {
  const leftBumperPressed = Boolean(gamepad.buttons[4]?.pressed);
  const rightBumperPressed = Boolean(gamepad.buttons[5]?.pressed);
  const startPressed = Boolean(gamepad.buttons[9]?.pressed || gamepad.buttons[8]?.pressed);
  const comboPressed = leftBumperPressed && rightBumperPressed && startPressed;

  if (!comboPressed) {
    return false;
  }

  if (gamepadState.previousButtons.menu) {
    return true;
  }

  if (state.isPlaying || state.isSessionLocked) {
    if (state.isParentPanelOpen) {
      closeParentPanel();
    } else {
      openParentPanel();
    }
  }

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
  const focusMap = {
    "timer:5": 0,
    "timer:10": 1,
    "timer:15": 2,
    "timer:off": 3,
    "universe:surprise": 4,
    "universe:animals": 5,
    "universe:vehicles": 6,
    "universe:magic": 7,
    "energy:gentle": 8,
    "energy:normal": 9,
    "energy:party": 10,
    "sound:off": 11,
    "sound:soft": 12,
    play: 13
  };
  gamepadState.menuFocusIndex =
    focusMap[`timer:${state.timerMode}`] ??
    focusMap[`universe:${state.universeMode}`] ??
    focusMap[`energy:${state.energyMode}`] ??
    focusMap[`sound:${state.soundMode}`] ??
    focusMap.play;
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
    const availableActions = getParentAvailableActions();
    const delta = movingLeft ? -1 : 1;
    gamepadState.parentFocusIndex =
      (gamepadState.parentFocusIndex + delta + availableActions.length) % availableActions.length;
    updateParentFocus();
  }

  gamepadState.previousDirections.left = movingLeft;
  gamepadState.previousDirections.right = movingRight;

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    getParentAvailableActions()[gamepadState.parentFocusIndex]?.click();
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
      const comboPressed = maybeStartGamepadMenuCombo(activeGamepad);
      if (comboPressed) {
        gamepadState.previousButtons.primary = false;
        gamepadState.previousButtons.menu = true;
      } else {
        handleGamepadMenuNavigation(menuHorizontal, menuVertical, primaryPressed);
        gamepadState.previousButtons.primary = primaryPressed;
        gamepadState.previousButtons.menu = Boolean(
          activeGamepad.buttons[9]?.pressed || activeGamepad.buttons[8]?.pressed
        );
      }
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
  playTapSound();
  recordGameplayActivity();
  triggerPlayModeBursts(pointX, pointY, { source: "pointer" });
  maybeTriggerSpecialEvent(pointX, pointY);
}

function nextDistributedPoint() {
  const marginX = Math.max(window.innerWidth * 0.08, 48);
  const marginY = Math.max(window.innerHeight * 0.1, 56);
  const safeWidth = Math.max(window.innerWidth - marginX * 2, 1);
  const safeHeight = Math.max(window.innerHeight - marginY * 2, 1);
  const jump = 2 + Math.floor(Math.random() * 4);
  distributedPointCursor = (distributedPointCursor + jump) % distributedPointCells.length;
  const [cellX, cellY] = distributedPointCells[distributedPointCursor];
  const jitterX = randomBetween(-0.11, 0.11);
  const jitterY = randomBetween(-0.12, 0.12);

  return {
    x: marginX + clamp(cellX + jitterX, 0, 1) * safeWidth,
    y: marginY + clamp(cellY + jitterY, 0, 1) * safeHeight
  };
}

function nextKeyboardPoint() {
  return nextDistributedPoint();
}

function triggerKeyboardBurst() {
  const point = nextKeyboardPoint();
  hideHint();
  playTapSound();
  recordGameplayActivity();
  triggerPlayModeBursts(point.x, point.y);
  maybeTriggerSpecialEvent(point.x, point.y);
}

function handleKeydown(event) {
  if (isKeyboardMenuCombo(event)) {
    event.preventDefault();
    startKeyboardMenuCombo();
    return;
  }

  if (
    isBlockedGameplayKey(event) &&
    (state.isPlaying || state.isPausedForFocus || state.isParentPanelOpen || state.isSessionLocked || state.pendingStart)
  ) {
    event.preventDefault();
    event.stopPropagation();
    releaseKey(event);
    return;
  }

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
      (group === "universe" && value === state.universeMode) ||
      (group === "energy" && value === state.energyMode) ||
      (group === "sound" && value === state.soundMode);

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function showMenu() {
  state.isPlaying = false;
  state.isEnding = false;
  state.isSessionLocked = false;
  state.isPausedForFocus = false;
  state.isParentPanelOpen = false;
  state.pendingStart = false;
  state.fullscreenWanted = false;
  state.remainingSessionMs = null;
  state.visualMode = "normal";
  state.interactionsSinceSpecial = 0;
  scheduleNextSpecialEvent();
  endSpecialEvent();
  releaseAllKeys();
  clearPrimeTimeouts();
  clearSessionTimer();
  stopSpecialProgressLoop();
  clearIdleNudge();
  if (endingTimeoutId) {
    window.clearTimeout(endingTimeoutId);
    endingTimeoutId = null;
  }
  clearEndingCelebration();
  resetHint();
  clearBursts();
  resetPointerCoverage();
  playground.classList.remove("is-playing");
  playground.classList.remove("is-ending");
  playground.classList.remove("is-paused");
  playground.classList.remove("is-parent-open");
  menuScreen.removeAttribute("hidden");
  resumeScreen.setAttribute("aria-hidden", "true");
  parentScreen.setAttribute("aria-hidden", "true");
  lockScreen.setAttribute("aria-hidden", "true");
  applyModeClasses();
  setMenuFocusForState();
  updateParentFocus();
}

function endSessionSoftly() {
  if (!state.isPlaying || state.isEnding) {
    return;
  }

  state.isEnding = true;
  endSpecialEvent();
  clearPrimeTimeouts();
  clearSessionTimer();
  stopSpecialProgressLoop();
  stopAllInteractiveInput();
  clearIdleNudge();
  spawnEndingCelebration();
  playground.classList.add("is-ending");
  endingScreen.removeAttribute("aria-hidden");

  endingTimeoutId = window.setTimeout(() => {
    endingTimeoutId = null;
    endingScreen.setAttribute("aria-hidden", "true");
    state.isPlaying = false;
    state.isEnding = false;
    state.isSessionLocked = true;
    playground.classList.remove("is-playing");
    playground.classList.remove("is-ending");
    lockScreen.setAttribute("aria-hidden", "false");
    clearEndingCelebration();
    applyModeClasses();
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
  state.visualMode = "normal";
  state.interactionsSinceSpecial = 0;
  scheduleNextSpecialEvent();
  endSpecialEvent();
  applyUniverseTheme();
  clearPrimeTimeouts();
  clearBursts();
  clearEndingCelebration();
  resetPointerCoverage();
  resetHint();
  playground.classList.add("is-playing");
  playground.classList.remove("is-ending");
  playground.classList.remove("is-paused");
  playground.classList.remove("is-parent-open");
  state.isSessionLocked = false;
  menuScreen.setAttribute("hidden", "hidden");
  resumeScreen.setAttribute("aria-hidden", "true");
  parentScreen.setAttribute("aria-hidden", "true");
  lockScreen.setAttribute("aria-hidden", "true");
  endingScreen.setAttribute("aria-hidden", "true");
  applyModeClasses();
  startSpecialProgressLoop();
  resetGamepadCursor();
  lastGameplayActivityAt = Date.now();
  scheduleIdleNudge();
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
  if (group === "universe" && universeConfigs[value]) {
    state.universeMode = value;
    scheduleNextSpecialEvent();
    applyUniverseTheme();
  }
  if (group === "energy" && energyConfigs[value]) {
    state.energyMode = value;
    scheduleNextSpecialEvent();
  }
  if (group === "sound" && soundConfigs[value]) {
    state.soundMode = value;
    if (value === "soft") {
      playTone(660, 0, 0.09, 0.35, "sine");
      playTone(880, 0.07, 0.1, 0.28, "triangle");
    }
  }

  syncOptionButtons();
  applyModeClasses();
  persistSettings();
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
  pauseSpecialCooldown();
  endSpecialEvent();
  pauseSessionTimer();
  showResumeScreen(title, text);
  stopSpecialProgressLoop({ resetProgress: false });
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
    resumeSpecialCooldown();
    startSessionTimer();
    startSpecialProgressLoop();
    lastGameplayActivityAt = Date.now();
    scheduleIdleNudge();
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
  const profile = getPerformanceProfile();

  const entries = [
    [width * 0.35, height * 0.52, 260],
    [width * 0.65, height * 0.48, 520]
  ].slice(0, profile.primeCount);

  primeTimeouts = entries.map(([x, y, delay]) => window.setTimeout(() => {
    if (state.isPlaying) {
      triggerPlayModeBursts(x, y);
    }
  }, delay));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker error", error);
    });
  });
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

loadSavedSettings();
applyUniverseTheme();
applyModeClasses();
syncOptionButtons();
showMenu();
setGamepadStatusLabel();
resetGamepadCursor();
updateMenuFocus();
syncFullscreenState();
pollGamepads();
registerServiceWorker();

playground.addEventListener("pointerdown", handlePointer, { passive: false });
fullscreenButton.addEventListener("click", toggleFullscreen);
parentHotspot.addEventListener("click", openParentPanel);
menuScreen.addEventListener("click", handleOptionClick);
playButton.addEventListener("click", startGame);
resumeButton.addEventListener("click", handleResumeAction);
resumeMenuButton.addEventListener("click", showMenu);
parentResumeAction.addEventListener("click", closeParentPanel);
parentRestartAction.addEventListener("click", restartCurrentSession);
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
