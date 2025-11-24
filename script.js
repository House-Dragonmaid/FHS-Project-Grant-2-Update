
var button = document.createElement("button");
button.textContent = "Change background and font size";

button.addEventListener("click", function () {
    var body = document.getElementById("increase");

    // If the target element doesn't exist, create it so we don't call setAttribute on null.
    if (!body) {
        body = document.createElement("p");
        body.id = "increase";
        // append the created paragraph near the end of the body
        document.body.appendChild(body);
    }

    body.setAttribute("style", "background-color: white; font-size: 30px");
});
document.body.appendChild(button);

// Try to find a target div by id (#Begin) or class (.Begin). Only attach the
// click listener when an element is found to avoid calling addEventListener on null.
var div = document.getElementById("Begin") || document.querySelector(".Begin");
if (div) {
    div.addEventListener("click", function () {
        console.log("Div has been clicked");
    });
} else {
    console.warn('No element found for "#Begin" or ".Begin"; click listener not attached.');
}

var text = document.createElement("p");
name = prompt("What is your name?");
text.textContent = "Thank you for reading " + name + "!";
document.body.appendChild(text);
console.log("User's name is: " + name);