var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var player = new Image();
var bg = new Image();
var enemy = new Image();
var weap = new Image();

weap.src = "img/weap.png";
player.src = "img/player.png";
enemy.src = "img/enemy.png";
bg.src = "img/bg.png";



//Start position Player
class Player
{    
    constructor(xPos,yPos, speed) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.speed = speed;
	}	
	
	get_x() {return this.xPos;}
	get_y() {return this.yPos;}
	get_speed() {return this.speed;}
	
	slow_left() {
		this.xPos -= 2;
		player.src = "img/player.png";
		}
	slow_right() {
		this.xPos += 2;
		player.src = "img/player.png";
		}
	left() {
		this.xPos -= this.speed;
		player.src = "img/pl.png";
	}
	right() {
		this.xPos += this.speed;
		player.src = "img/pr.png";
		}
		
    shoot() {
		
		
	}
}

var p = new Player(125, 450, 13);
var bullet = [];  	
	
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 65) p.left();
	else if (event.keyCode == 68) p.right();
	else if (event.keyCode == 32) {
		speed_bull = 5;
		bullet.push({
			x : p.get_x(),
			y : p.get_y()-5,
			speed : speed_bull
		});

	  draw_bull();
	};
});
document.addEventListener("keyup", function(event) {
	if (event.keyCode == 65) {
		p.slow_left();
	}
	else if (event.keyCode == 68) p.slow_right();
});
   

var st_speed = 1;  
var complexity = 150;
var count_lev = 0;
var speed_bull = 5;   
var score = 0;
var cn = 0;
var arr_enemy = [];
arr_enemy.push({
	x : 50,
	y : 0,
	comp : complexity,
	speed : st_speed
});
   
 
   
function draw_bull() {
	if(true) {
		/*for(var i = 0; i < bullet.length; ++i) {	
			ctx.drawImage(weap, bullet[i].x, bullet[i].y);
		    if(bullet[i].y == 0) bullet[i] = null;
			else bullet[i].y-=10;
		}*/
		}
    requestAnimationFrame(draw_bull);
}
   
function draw() {
     ctx.drawImage(bg, 0, 0);
     ctx.drawImage(player, p.get_x(), p.get_y());
	 

	 for(var i = 0; i < arr_enemy.length; i++) {
		      ctx.drawImage(enemy, arr_enemy[i].x, arr_enemy[i].y);
			  arr_enemy[i].y+=  5;
			  if(arr_enemy[i].y == arr_enemy[i].comp) {
				  if (complexity > 10) complexity -= 10;
				  
				  arr_enemy.push({
	                  x : Math.floor(Math.random() * Math.floor(285)),
                   	  y : -50,
					  comp : complexity
                  });
			  }
			 if(arr_enemy[cn].y > p.get_y()) {
				 cn++;
				 score++;
			 } 
		if(arr_enemy[i].y + 20 > p.get_y() && arr_enemy[i].y < p.get_y() + 10) 
			 {
				 if(arr_enemy[i].x < p.get_x() + 20
				 && arr_enemy[i].x > p.get_x() - 20)
				 alert("Your score: " + score);
			 } 
	 }
	 ctx.fillStyle = "#555";
	 ctx.font = "24px Verdana";
	 ctx.fillText("Score: " + score, 10, cvs.height - 20);
	 requestAnimationFrame(draw);
}


bg.onload = draw;




