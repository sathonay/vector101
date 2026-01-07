let ctx = canva.getContext("2d");

function fullScreenCanva() {
	canva.width = window.innerWidth;
	canva.height = window.innerHeight;
}

fullScreenCanva();

function clearCanva() {
	ctx.clearRect(0, 0, canva.width, canva.height);
}

function vector(vec) {
	return {
		x: vec.x2 - vec.x1,
		y: vec.y2 - vec.y1,
	}
}

function cross(vec1, vec2) {
	return vec1.x * vec2.y - vec1.y * vec2.x
}

function drawVector(vec) {
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(vec.x1, vec.y1);
	ctx.lineTo(vec.x2, vec.y2);
	ctx.strokeStyle = vec.color;
	ctx.stroke();
}