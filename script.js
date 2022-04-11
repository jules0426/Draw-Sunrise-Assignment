let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
let cloud = document.getElementById("cloud");

//Canvas Size
cnv.width = 400;
cnv.height = 400;

//Grass
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

//Sun
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 15, Math.PI, 0);
ctx.fill();

//Cloud
ctx.drawImage(cloud, 130, 120);
ctx.drawImage(cloud, 170, 100);