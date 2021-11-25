 function preload(){
   bg =loadImage("cityImage.png");
    balloonImage1=loadImage("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addImage("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
// create database and position variable here
 balloonposition=database.ref('balloon/height');
balloonposition.on("value",readHeight, showError)

  textSize(20); 
}


// function to display UI
function draw() {
  background(bg);

 


  if(keyDown(LEFT_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    balloon.scale=balloon.scale -0.01;
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    balloon.scale=balloon.scale -0.1
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-15)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    balloon.scale=balloon.scale  -0.02;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(-15,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    balloon.scale=ballon.scale -0.2
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x ,
    'y': height.y + y

  })

  }
  function readHeight(data){
    height = data.val();
    balloon.x = height.x;
    balloon.y = height.y;

  }
  function showError(){
    console.log("Error in writing to the database");
  }