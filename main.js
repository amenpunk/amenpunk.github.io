var canvas;

var maxParticles, particleBreakDistance, repelDist;
var particles = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight*2.4);
    //    console.log(canvas.classList[1]);
    //canvas = createCanvas(windowWidth, windowH);

    console.log("Canvas Size :" + width + "x" + height);
    canvas.parent('mainCanvas');
    frameRate(60);
    strokeWeight(2);
    stroke(255);

    maxParticles = 120*2;
    //maxParticles = 120;
    repelDist = max(width, height)/8;
    particleBreakDistance = max(width, height) / 40;
    while (particles.length < maxParticles) {
        obj = [createVector(random(width), random(height)), createVector(random(4) - 2, random(4) - 2)];
        particles.push(obj);
    }
}

function drawParticles() {

    colorMode(HSB, 100);
    for (var i = 0; i < particles.length; i++) {
        var posi = particles[i][0];
        for (var j = i + 1; j < particles.length; j++) {
            var posj = particles[j][0];
            var dist = posi.dist(posj);
            if (dist <= particleBreakDistance) {
                strokeWeight(2-(dist/particleBreakDistance));
                stroke(100*(posi.x/width), 90, 90, 255 - 255*dist/particleBreakDistance );
                line(posi.x, posi.y, posj.x, posj.y);
            }
        }
    }

    colorMode(RGB, 255);
    fill(255, 255, 255, 200);
    noStroke();

    var mousePos = createVector(mouseX, mouseY);

    for (var i = 0; i < particles.length; i++) {
        var pos = particles[i][0];
        var speed = particles[i][1];
        var randSize = 3 + random(4);
        ellipse(pos.x, pos.y, randSize, randSize);
        pos.add(speed);

        var distToMouse = mousePos.dist(pos);

        if (distToMouse < repelDist) {
            var repel = createVector(pos.x - mousePos.x, pos.y - mousePos.y);
            var distFrac = (repelDist - distToMouse) / repelDist
            repel.setMag(50 * distFrac * distFrac);
            pos.add(repel);
        }

        if (pos.x > width) {
            pos.x -= width;
            pos.y += random(height / 10) - height / 20;
        }
        else if (pos.x < 0) {
            pos.x += width;
            pos.y += random(height / 10) - height / 20;
        }

        if (pos.y > height) {
            pos.y -= height;
            pos.x += random(width / 10) - width / 20;
        }
        else if (pos.y < 0) {
            pos.y += height;
            pos.x += random(width / 10) - width / 20;
        }
    }

}

function draw() {
    //background(15, 15, 20);
    //background(0, 0, 0);
    background(30,30,30);
    drawParticles();
    particleBreakDistance = min(particleBreakDistance + 1, width / 12);
    //var gg = document.getElementsByClassName('p5Canvas');
    //gg.className += " d-none d-md-block"
    
  //  console.log(canvas.classList);
}

$('document').ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
    });
        
});
