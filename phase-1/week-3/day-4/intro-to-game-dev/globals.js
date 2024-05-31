// Game Global Variables
const GAME_HEIGHT = 400;
const GAME_WIDTH = 600;
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const animate = window.requestAnimationFrame

// Control Mapping
const DOWN = 83;
const UP = 87;
const LEFT = 65;
const RIGHT = 68;
const SPACE_BAR = 32;