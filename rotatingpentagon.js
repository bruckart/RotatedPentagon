

// fix for EasyCam to work with p5 v0.7.2
Dw.EasyCam.prototype.apply = function(n) 
{
  var o = this.cam;
  n = n || o.renderer,
  n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
};

function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);

  // define initial state
  var state = {
    distance : 282.316,
    center   : [0, 0, 0],
    rotation : [-0.548, -0.834, 0.066, -0.015],
  };
  
  easycam = new Dw.EasyCam(this._renderer, {distance:200, center:[0,0,0], rotation:[1,0,0,0]});
}


function drawSphere()
{
  push();
  stroke(255, 126, 0); // orange
  strokeWeight(0.1);

  for (i = 0; i < PI; i = i + 0.2)
  {
    // Rotate with z being 0.
    // point(cos(i)*r, sin(i)*r, 0);

    for (j = 0; j < TWO_PI; j = j + 0.2)
    {
      let x = 20 * cos(j) * sin(i);
      let y = 20 * sin(j) * sin(i);
      let z = 20 *          cos(i);
      point(x, y, z);
 
      // Rotate with y being 0.
      //point(cos(j)*r, 0, sin(j)*r);
    }
  }

  pop();
}


function drawFibonacciSphere()
{
  push();
  strokeWeight(0.2);
  stroke(188, 188, 188);
  
  let GR = (sqrt(5)+1)/2 - 1; // golden ratio
  
  for (i = 0; i < 900; i++)
  {
    let longitude = GR * TWO_PI * i;
    longitude /= (2 * PI);
    longitude -= floor(longitude);
    longitude *= TWO_PI;
    
    if (longitude > PI)
    {
      longitude -= (2 * PI);
    }
    
    let latitude = asin(-1 + 2 * i / 900);
    let cosLatitude = cos(latitude);

    point(20 * cosLatitude * cos(longitude),
          20 * cosLatitude * sin(longitude),
          20 * sin(latitude));
  }
  
  pop();
}

let rotationVal = 1;
let rotationInc = 0.5;
function draw() 
{
  background(22);
  drawAxis();
  drawGrid();
  
  drawSphere();
  // drawFibonacciSphere();
  
  //rotateX(radians(30));
  //rotateY(radians(-30));

  let numPnts = 5;
  let angle = (TWO_PI / numPnts);
  
  // 6.28 / 5 = 1.256
  // 
  // 1.256 * 1 = 1.256
  // 1.256 * 2 = 2.512
  // 1.256 * 3 = 3.768
  // 1.256 * 4 = 5.024
  // 1.256 * 5 = 6.28

  let pnts = [];
  for (let i = 1; i <= numPnts; i++)
  {
    pnts.push(new p5.Vector(20 * sin(angle * i + radians(rotationVal)),
                            20 * cos(angle * i + radians(rotationVal)),
                            0));
  }


  push();
  
  // Draw the points.
  strokeWeight(5);
  stroke(255);
  point(pnts[0].x, pnts[0].y, pnts[0].z);
  point(pnts[1].x, pnts[1].y, pnts[1].z);
  point(pnts[2].x, pnts[2].y, pnts[2].z);
  point(pnts[3].x, pnts[3].y, pnts[3].z);
  point(pnts[4].x, pnts[4].y, pnts[4].z);

  // Draw the lines.
  strokeWeight(0.3);
  stroke(180);
  line(pnts[0].x, pnts[0].y, pnts[0].z, pnts[1].x, pnts[1].y, pnts[1].z);
  line(pnts[1].x, pnts[1].y, pnts[1].z, pnts[2].x, pnts[2].y, pnts[2].z);
  line(pnts[2].x, pnts[2].y, pnts[2].z, pnts[3].x, pnts[3].y, pnts[3].z);
  line(pnts[3].x, pnts[3].y, pnts[3].z, pnts[4].x, pnts[4].y, pnts[4].z);
  line(pnts[4].x, pnts[4].y, pnts[4].z, pnts[0].x, pnts[0].y, pnts[0].z);

  // Draw the extension points.
  push();
  stroke("#2AD84B");
  strokeWeight(5);
  let ext0 = pnts[0].copy().add(pnts[0]);
  let ext1 = pnts[1].copy().add(pnts[1]);
  let ext2 = pnts[2].copy().add(pnts[2]);
  let ext3 = pnts[3].copy().add(pnts[3]);
  let ext4 = pnts[4].copy().add(pnts[4]);
  point(ext0.x, ext0.y, ext0.z);
  point(ext1.x, ext1.y, ext1.z);
  point(ext2.x, ext2.y, ext2.z);
  point(ext3.x, ext3.y, ext3.z);
  point(ext4.x, ext4.y, ext4.z);
  pop();




  stroke(255, 126, 0); // orange
  strokeWeight(0.1);
  let circleAngle = TWO_PI / 256;

  // Draw a circle around the initial pentagon.
  for (let i = 0; i < 256; i++)
  {
    point(20 * (sin(circleAngle * i)), 
          20 * (cos(circleAngle * i)),
          0);
  }
  pop();
  
  
  push();
  stroke("#8B9B8E");
  strokeWeight(0.6);
  let r = dist(pnts[0], ext0);

  for (let i = 0; i < 256; i++)
  {
    //point(pnts[0].x + (20 * (sin(circleAngle * i))), 
    //      pnts[0].y + (20 * (cos(circleAngle * i))),
    //      pnts[0].z + 0);
    // TODO rotate the ellipse about the z axis.
    point(pnts[0].x + (20 * (sin(circleAngle * i))), 
          pnts[0].y + (20 * (cos(circleAngle * i))),
          pnts[0].z);
  }
  for (let i = 0; i < 256; i++)
  {
    point(pnts[1].x + (20 * (sin(circleAngle * i))), 
          pnts[1].y + (20 * (cos(circleAngle * i))),
          pnts[1].z);
  }
  for (let i = 0; i < 256; i++)
  {
    point(pnts[2].x + (20 * (sin(circleAngle * i))), 
          pnts[2].y + (20 * (cos(circleAngle * i))),
          pnts[2].z);
  }
  for (let i = 0; i < 256; i++)
  {
    point(pnts[3].x + (20 * (sin(circleAngle * i))), 
          pnts[3].y + (20 * (cos(circleAngle * i))),
          pnts[3].z);
  }
  for (let i = 0; i < 256; i++)
  {
    point(pnts[4].x + (20 * (sin(circleAngle * i))), 
          pnts[4].y + (20 * (cos(circleAngle * i))),
          pnts[4].z);
  }
  pop();
  
  rotationVal+=rotationInc;
}


function keyPressed()
{
  if (rotationInc != 0)
  {
    rotationInc = 0;
  }
  else if (rotationInc == 0)
  {
    rotationInc = 0.5;
  }
}
