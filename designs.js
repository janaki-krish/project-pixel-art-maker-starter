// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

document.getElementById("sizePicker").addEventListener("submit", processSubmit, false);

function processSubmit(event) {
	event.preventDefault();
	var x = document.getElementById("input_height").value;
	var y = document.getElementById("input_width").value;
	var col = document.getElementById("colorPicker").value;
	clearGrid();
	makeGrid(x, y, col);
};

function makeGrid(x, y, color) {

// Your code goes here!
	var canvas = document.getElementById("pixel_canvas");
	for (i=0; i < x; i++)
	{
		var row = canvas.insertRow();
		for (j=0; j < y; j++)
		{
			var cell = row.insertCell();
			cell.innerHTML = " hi";
			cell.addEventListener("click", fillColor);
			cell.myParam = color;
		}
	};
};


function clearGrid() {
	document.getElementById("pixel_canvas").innerHTML = "";
};

function fillColor(evt) {
	this.style.backgroundColor = evt.target.myParam;
};


