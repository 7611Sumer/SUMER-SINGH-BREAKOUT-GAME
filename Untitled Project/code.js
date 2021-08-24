var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Keep the box in the air by moving the paddle with the left and right arrows.
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);
paddle.shapeColor = ("blue")
ball.shapeColor = ("blue")
//Row 1
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="green";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="black";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="green";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="black";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="green";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="black";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="green";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="black";

// Row 2
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="black";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="green";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="black";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="green";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="black";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="green";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="black";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="green";

fill("red")
textSize("20");
text("Press enter to move the ball",70,200)

function draw() {
  background("grey");
  
  if(keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);


  paddle.x=World.mouseX;

  
  if(ball.isTouching(box1)){
    box1.destroy();
  }
  
  if(ball.isTouching(box2)){
    box2.destroy();
  }
  
  if(ball.isTouching(box3)){ 
    box3.destroy();
  }
  
  if(ball.isTouching(box4)){
    box4.destroy();
  }
  
   if(ball.isTouching(box5)){ 
     box5.destroy();
  }
  
   if(ball.isTouching(box6)) {
     box6.destroy();
  }
  
  if(ball.isTouching(box7)) { 
    box7.destroy();
  }
  
  if(ball.isTouching(box8)){
    box8.destroy();
  }
  // row 2 
  if(ball.isTouching(box9)){
    box9.destroy();
  }
  
  if(ball.isTouching(box10)){
    box10.destroy();
  }
  
  if(ball.isTouching(box11)){ 
    box11.destroy();
  }
  
  if(ball.isTouching(box12)){
    box12.destroy();
  }
  
   if(ball.isTouching(box13)){ 
     box13.destroy();
  }
  
   if(ball.isTouching(box14)) {
     box14.destroy();
  }
  
  if(ball.isTouching(box15)) { 
    box15.destroy();
  }
  
  if(ball.isTouching(box16)){
    box16.destroy();
  }
  
  
  
  ball.bounceOff(paddle);
  
  
  
  
  drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
