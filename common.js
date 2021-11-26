


// Note (Z is Up)
function drawAxis()
{
  push();
  // pushStyle();
  strokeWeight(1);
  stroke(255, 0, 0);
  line(0, 0, 0, 25, 0, 0); // x (red)

  stroke(0, 0, 255);
  line(0, 0, 0, 0, 25, 0); // y (green)

  stroke(0, 255, 0);    
  line(0, 0, 0, 0, 0, 25); // z (blue)
  // popStyle();
  pop();
}

function drawGrid()
{
  push();
  stroke("#585858");
  strokeWeight(0.5);
  for (let x = -100; x <= 100; x+=10)
  {
    for (let y = -100; y <= 100; y+=10)
    {
      point(x, y, 0);
    }
  }
  pop();
}

// public PVector containerMin = new PVector(-200, -200, -200);
// public PVector containerMax = new PVector(200, 200, 200);

// color containerColor = color(0, 0, 0);
// void setContainerStroke(color c)
// {
//   containerColor = c;
// }

// // This is all the same as box(400) at (0,0,0).
// void drawContainer()
// {
//   pushStyle();
//   noFill();
//   stroke(containerColor);

//   beginShape(QUADS);
//   vertex(containerMin.x, containerMin.y, containerMin.z);
//   vertex(containerMax.x, containerMin.y, containerMin.z);
//   vertex(containerMax.x, containerMax.y, containerMin.z);
//   vertex(containerMin.x, containerMax.y, containerMin.z);
//   endShape();

//   beginShape(QUADS);
//   vertex(containerMin.x, containerMin.y, containerMax.z);
//   vertex(containerMax.x, containerMin.y, containerMax.z);
//   vertex(containerMax.x, containerMax.y, containerMax.z);
//   vertex(containerMin.x, containerMax.y, containerMax.z);
//   endShape();

//   beginShape(LINES);
//   vertex(containerMin.x, containerMin.y, containerMin.z);
//   vertex(containerMin.x, containerMin.y, containerMax.z);
//   endShape();

//   beginShape(LINES);
//   vertex(containerMax.x, containerMax.y, containerMin.z);
//   vertex(containerMax.x, containerMax.y, containerMax.z);
//   endShape();

//   beginShape(LINES);
//   vertex(containerMin.x, containerMax.y, containerMin.z);
//   vertex(containerMin.x, containerMax.y, containerMax.z);
//   endShape();

//   beginShape(LINES);
//   vertex(containerMax.x, containerMin.y, containerMin.z);
//   vertex(containerMax.x, containerMin.y, containerMax.z);
//   endShape();

//   popStyle();
// }