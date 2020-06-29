// Marshmallow Comet Effect | MIT LICENSE | © Shadow Scientist (https://github.com/Shadow-Scientist)

var colors = [
	'rgb(0,190,255)',
	'white',
	'rgb(0,160,255)',
	'orange',
	'rgb(240,245,250)',
	'rgb(230,60,0)'
];

//WORKS NICE ON FIREFOX,
//LET'S TRY ON CHROME. :)

function showtime(){
	var e = window.event,
		x = e.pageX,
		y = e.pageY;
		
	// number of particles created at a time
	// 1-9 is enough!
	var rnd = random(1, 9, true);
	
	for(var i = 0; i < rnd; i++){
		var pp = document.createElement('div');
		pp.className = 'particle';
		
		// size
		d = random(10, 60);
		pp.style.width = d+'px';
		pp.style.height = d+'px';
		
		// position
		pp.style.left = (x + random(-15, 15) - (d/2))+'px';
		pp.style.top = (y + random(-15, 15) - (d/2))+'px';
		
		// random
		pp.style.borderRadius = random(10, 50, true)+'%';
		pp.style.backgroundColor = colors[random(0, colors.length - 1, true)];
		
		// delay
		delay = (random(10, 40)/1000)+'s';
		pp.style.setProperty('--i', delay);
		
		// shifting
		shiftX = random(-200, 200);
		shiftY = random(-200, 200);
		pp.style.setProperty('--shiftX', shiftX+'px');
		pp.style.setProperty('--shiftY', shiftY+'px');
		
		// kill
		pp.addEventListener('animationend', function(){
			this.outerHTML = '';
		});
		
		container.appendChild(pp);
	}
}

function random(min, max, round){
	var p = min + Math.random()*(max - min);
	return round ? Math.round(p) : p;
}