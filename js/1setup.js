let body = document.querySelector("body");
let canvasBoard = document.querySelector("canvas");

let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect =   document.querySelector("#rect");
let line =   document.querySelector("#line");
let options =document.querySelectorAll(".size-box");

// for stroke color
let redPick = document.querySelector(".red");
let greenPick = document.querySelector(".green");
let bluePick = document.querySelector(".blue");

let cTool = "pencil";// default tool is pencil
// default width and height of canvas is smaller so lets change

// after changing canvas board dimension all the chnages will be refelected
canvasBoard.height=window.innerHeight;
canvasBoard.width=window.innerWidth;
