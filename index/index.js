/*
* @Author: taochallenge
* @Date:   2019-12-17 17:57:57
* @Last Modified by:   taochallenge
* @Last Modified time: 2019-12-20 22:50:03
*/
// 头部部分
var destination = document.getElementById("destination");
var desimg = document.getElementById("desimg");
var des = document.getElementById("des");
var vip = document.getElementsByClassName("top-wright-text");
destination.onmouseover = function(){
	desimg.src = "images/up.png";
	des.style.display = "block";
}
destination.onmouseout = function(){
	desimg.src = "images/down.png";
	des.style.display = "none";
}
des.onmouseover = function(){
	des.style.display = "block";
}
des.onmouseout = function(){
	des.style.display = "none";
}
var desList = des.children;
for(var i=0; i<desList.length; i++){
	desList[i].onmouseover = function(){
		this.style.color = "red";
	}
	desList[i].onmouseout = function(){
		this.style.color = "";
	}
}
for(var i=0; i<vip.length; i++){
	vip[i].onmouseover = function(){
		this.style.color = "red";
	}
	vip[i].onmouseout = function(){
		this.style.color = "";
	}
}
var mydd = document.getElementById("ll");
var myddList = document.getElementsByClassName("mydd");
var my = document.getElementById("mydd");
var llimg = document.getElementById("llimg");
mydd.onmouseover = function(){
	mydd.style.color = "red";
	my.style.display = "block";
	llimg.src = "images/up.png";
}
mydd.onmouseout = function(){
	mydd.style.color = "";
	my.style.display = "none";
	llimg.src = "images/down.png";
}
my.onmouseover = function(){
	my.style.display = "block";
}
my.onmouseout = function(){
	my.style.display = "none";
}
for(var i=0; i<myddList.length; i++){
	myddList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	myddList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var zeroget = document.getElementById("zeroget");
var mm = document.getElementById("mm");
var getList = document.getElementsByClassName("get");
var mmimg = document.getElementById("mmimg");
mm.onmouseover = function(){
	mm.style.color = "red";
	zeroget.style.display = "block";
	mmimg.src = "images/up.png";
}
mm.onmouseout = function(){
	mm.style.color = "";
	zeroget.style.display = "none";
	mmimg.src = "images/down.png";
}
zeroget.onmouseover = function(){
	zeroget.style.display = "block";
}
zeroget.onmouseout = function(){
	zeroget.style.display = "none";
}
for(var i=0; i<getList.length; i++){
	getList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	getList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var buy = document.getElementById("buy");
var nn = document.getElementById("nn");
var buyyList = document.getElementsByClassName("buyy");
var nnimg = document.getElementById("nnimg");
nn.onmouseover = function(){
	nn.style.color = "red";
	buy.style.display = "block";
	nnimg.src = "images/up.png";
}
nn.onmouseout = function(){
	nn.style.color = "";
	buy.style.display = "none";
	nnimg.src = "images/down.png";
}
buy.onmouseover = function(){
	buy.style.display = "block";
}
buy.onmouseout = function(){
	buy.style.display = "none";
}
for(var i=0; i<buyyList.length; i++){
	buyyList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	buyyList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var serve = document.getElementById("serve");
var serveList = document.getElementsByClassName("servelist");
var oo = document.getElementById("oo");
var ooimg = document.getElementById("ooimg");
oo.onmouseover = function(){
	oo.style.color = "red";
	serve.style.display = "block";
	ooimg.src = "images/up.png";
}
oo.onmouseout = function(){
	oo.style.color = "";
	serve.style.display = "none";
	ooimg.src = "images/down.png";
}
serve.onmouseover = function(){
	serve.style.display = "block";
}
serve.onmouseout = function(){
	serve.style.display = "none";
}
for(var i=0; i<serveList.length; i++){
	serveList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	serveList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var hotList = document.getElementsByClassName("hot");
for(var i=0; i<hotList.length; i++){
	hotList[i].onmouseover = function(){
		this.style.color = "red";
	}
	hotList[i].onmouseout = function(){
		this.style.color = "";
	}
}
var inputtext = document.getElementById("inputtext");
inputtext.onclick = function(){
	inputtext.value = "";
}
var market = document.getElementById("market");
var marketimg = document.getElementById("marketimg");
var markettxt = document.getElementById("markettxt");
market.onmouseover=function(){
	marketimg.src = "images/redmarket.png";
	market.style.backgroundColor = "rgb(246,246,246)";
	markettxt.style.color = "rgb(255,40,50)";
}
market.onmouseout=function(){
	marketimg.src = "images/whitemarket.png";
	market.style.backgroundColor = "rgb(255,40,50)";
	markettxt.style.color = "rgb(246,246,246)";
}