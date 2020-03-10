// acessing the elements from our page
var buttonElement = document.querySelector("button");
var textElement = document.querySelector("p");

// listening to a click event on the button
buttonElement.addEventListener("click", changeText, false);

// what gets called when the button is clicked
function changeText(e) {
	textElement.innerText = "hello, world!";
}