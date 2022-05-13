var width = window.innerWidth
var height = window.innerHeight

const title = document.querySelector("#main > .title");
const title_text = [document.querySelector("#main > .title > #title-1"), document.querySelector("#main > .title > #title-1")];
title.style.position = 'absolute';

var left = (width / 2) - 171
title.style.top = '50%';
title.style.left = left+'px';
title.style.top = '-50px';

title_text[0].style.left = 

const proxy_btn = document.querySelector("#main > #buttonnest > #webproxy_btn");

proxy_btn.onclick = function() {
	window.location.href = "/webtools/webproxy/index.html";
}