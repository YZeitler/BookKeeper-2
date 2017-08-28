var button = document.createElement("button");
button.id = "btn";
button.innerText = "Elevation's Website";

var body = document.getElementById("body");
body.appendChild(button);

var isON = true;

button.onclick = function() {
    if (isON) {
        document.getElementById('btn').innerHTML = "Thank You!";
        isON = false;
    } else {
        document.getElementById('btn').innerHTML = "Elevation Academy";
        isON = true;
    }
}