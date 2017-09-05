// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function processSubmit() {
	var x = document.getElementById("input_height").value;
	var y = document.getElementById("input_width").value;
	var col = document.getElementById("colorPicker").value;
	clearGrid();
	makeGrid(x, y, col);
};

$(document).ready(function() {
	$("#input_submit").click(function() {
	var x = document.getElementById("input_height").value;
	var y = document.getElementById("input_width").value;
	var col = document.getElementById("colorPicker").value;
	clearGrid();
	makeGrid(x, y, col);
});

});


/**
*	@description Creates a grid of size x by y, adds event listeners dynamically
	@param {number x} - row size
	@param {number y} - column size
	@param {color} - color to fill the cell on event trigger(mouseover)
*
*/
function makeGrid(x, y, color) {

// Your code goes here!
	for (i=0; i < x; i++)
	{
		var row = document.getElementById("pixel_canvas").insertRow();
		for (j=0; j < y; j++)
		{
			var cell = row.insertCell();
			cell.innerHTML = " hi";
			cell.addEventListener("mouseover", fillColor);
			cell.myParam = color;
		}
	};
};
/*
function clearGrid() {
	$("#pixel_canvas tr").remove();
};
*/

function clearGrid() {
	document.getElementById("pixel_canvas").innerHTML = "";
};

function fillColor(evt) {
	this.style.backgroundColor = evt.target.myParam;
};


