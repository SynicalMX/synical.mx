var width = window.innerWidth
var height = window.innerHeight

const title = document.querySelector("#main > .title");
title.style.position = 'absolute';

var titleSize = title.clientWidth
var left = (width / 2) - (titleSize / 2)

title.style.top = '50%';
title.style.left = left+'px';
title.style.top = '-50px';		  

const webtoolsbtn = document.querySelector("#buttonnest > #webtools");
const buttonsnest = document.querySelector("#buttonnest");

webtoolsbtn.onclick = function() {
	window.location.href = "/webtools/index.html"
}