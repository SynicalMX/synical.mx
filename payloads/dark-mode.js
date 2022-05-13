alert("activated");

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     all[i].style.backgroundColor = "#303030"
}

document.body.innerText.style.color = "#ffffff"