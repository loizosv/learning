	var r, slider, button, h1

	function setup() {
    h1 = createElement("h1","Layout Canvases");
    h1.id("title");
    h1.position(25,0);
    para1=createP("Frequencies of the microphone")
    para1.position(30,290);
    para1.style("z-index", 100);
    para1.style("transform","rotate("+4+"deg");

	  r = random(50);
	}

// Sketch One
var sketch1 = function(p) {
	  p.channels = 256;

	  p.setup = function() {
	    cnv = p.createCanvas(400, 200);
      cnv.position(25, 80);
	    cnv.class('cnv_left');
	    p.colorMode(p.HSB);
	    //open the mic
	    p.mic = new p5.AudioIn();
	    p.mic.start();
	    //create the fft object and connect to mic
	    p.fft = new p5.FFT(0, p.channels);
	    p.fft.setInput(p.mic);
	  }

	  p.draw = function() {
	    p.background(200, 100, 100, 10);
	    p.spectrum = p.fft.analyze();
	    p.frequencies = ["bass", "lowMid", "mid", "highMid", "treble"]
	    p.myWidth = p.width / p.channels;
	    for (p.i = 0; p.i < p.frequencies.length; p.i++) {
	      p.thisFreq = p.frequencies[p.i];
	      p.fill(0)
	      p.noStroke()
	      p.text(p.thisFreq + ": " + (p.fft.getEnergy(p.thisFreq)), 5, p.i * 20 + 20);
	      p.stroke(0);
	      p.fill((p.fft.getEnergy(p.thisFreq)), 100, 100);
	      p.rect(100, p.i * 20 + 5, (p.fft.getEnergy(p.thisFreq)) * 3, 20)
	    }
	    p.stroke(0);
	    for (p.x = 0; p.x < p.spectrum.length; p.x++) {
	      p.y = p.map(p.spectrum[p.x], 0, 256, 0, p.height)
	      p.fill(p.spectrum[p.x], 100, 90)
	      p.rect(p.x * p.myWidth, p.height - p.y, p.myWidth, p.y);
	    }
	  }
	}


	// Sketch Two
// Sketch Two
var sketch2 = function(p) {

  p.amplitude, p.song, p.volume;
  p.speed = 1;
  p.levelHistory = [];
  p.preload = function() {
    p.song = p.loadSound("mybaby.mp3");
  }
  p.setup = function() {
    p.song.play();
    p.song.loop();
    cnv = p.createCanvas(400, 200);
    cnv.position(145, 350);
	  cnv.class('cnv_right');
    p.amplitude = new p5.Amplitude();
    p.song.amp(1);
    p.para2=p.createP("Amplitude levels for the song 'My Baby'")
    p.para2.position(165,570);
    p.para2.style("z-index", 100);
    p.para2.style("transform","rotate("+-5+"deg");
  }
  p.draw = function() {
    p.background(0);

    p.song.rate(p.speed);

    p.level = p.amplitude.getLevel();
    p.levelHistory.push(p.level)
    p.colorMode(p.HSB);
    for (i = 0; i < p.levelHistory.length; i++) {
      p.y = p.map(p.levelHistory[i], 0, 1, p.height - 50, 0);
      p.hue = p.map(p.levelHistory[i], 0, 1, 0, 300);
      p.stroke(p.hue, 80, 100)
      p.line(i, 0, i, p.height);
    }

    p.stroke(0);
    p.strokeWeight(2);
    p.noFill();
    p.beginShape();
    for (i = 0; i < p.levelHistory.length; i++) {
      p.y = p.map(p.levelHistory[i], 0, 1, p.height - 50, 0);
      p.vertex(i, p.y);
    }
    p.endShape()
    if (p.levelHistory.length > p.width) {
      p.levelHistory.splice(0, 1);
    }
  }
  p.mouseClicked = function() {

    if (p.song.isPlaying()) {
      p.song.pause();
    } else {
      p.song.play();
    }
  }
}

	var mysketch1 = new p5(sketch1);
	var mysketch2 = new p5(sketch2);

	function resetBG() {
	  r = random(255);
	  sketch1.background(r, 0, 0);
	}


	//setInterval(resetBG,500);