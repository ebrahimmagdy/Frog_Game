const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

//obstacles
const canvasObs = document.getElementById("canvasObstacle");
const canvasObstacle = canvasObs.getContext("2d");
canvasObs.width = 600;
canvasObs.height = 600;


let turtleImg = document.getElementById("turtleImg");
let wood = document.getElementById("wood");

let redCar = document.getElementById("redCar");
let truckCar = document.getElementById("truckCar");

let wrapperImg=document.getElementById("wrapper");
let topImg=document.getElementById("topImg");
let bottomImg=document.getElementById("bottomImg");
let centerImg=document.getElementById("centerImg");

let carsArray = [];
let logsArray = [];

let carsArrayN = [];
let logsArrayN = [];
//obstacles


// global variables
// const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let freeze = false;
let gameSpeed = 1;
let particlesArray = [];
let ripplesArray = [];




let grid = 80;
let safe = false;
let gameLevels=0;


const maxParticles = 300;
// const carsArray = [];
// const logsArray = [];




//images

const froggerSprite = new Image();
froggerSprite.src = '../images/frog_spritesheet.png'
// const backgroundForGame = new Image();
// backgroundForGame.src = '../images/GameBAckGround.png';

const collisions = new Image();
collisions.src = '../images/collisions.png'