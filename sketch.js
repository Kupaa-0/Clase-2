function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', '-1');
  background(255, 216, 223); // color base
}

function draw() {
  colorMode(HSB, 360, 100, 100); // tonos fáciles de variar
  let d = random(20, 50);        // diámetro aleatorio
  noStroke();
  fill(random(0, 360), 100, 100);
  ellipse(mouseX, mouseY, d, d);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 'p') save('dibujo.jpg');        // guarda imagen
  if (key === 'c') background(255, 216, 223); // limpia lienzo
}

