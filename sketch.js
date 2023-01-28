function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function draw() {
  background("black");
  strokeWeight (1)
  stroke("white");
  noFill();

  
  for (i = 0; i < 10; i++) {
    const angle = frameCount + i * 5; // angle
    const k = 200; // amplitude of rotation
    const rotation = sin(angle) * k; // resulting rotation
    const side = 20;// initial side
    
    push();
    rectMode(CENTER);
    translate(width/4 , height/2);
    rotate(rotation);
    rect(0, 0, side * i, side * i);
    pop();

 

    
    push();
    ellipseMode(CORNER);
    translate(width/2 , height/2);
    rotate(rotation);
    ellipse(0, 0, side * i, side * i);
    pop();

    push();
    rectMode(CENTER);
    translate(width - width/4, height/2);
    rotate(rotation);
    rect(0, 0, side * i, side * i);
    pop();

    
  }
}