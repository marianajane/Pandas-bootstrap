var panda1 = document.getElementById("img1");
var panda2 = document.getElementById("img2");
var panda3 = document.getElementById("img3");
var panda4 = document.getElementById("img4");
var parr1 = document.getElementById("p1");
var parr2 = document.getElementById("p2");
var flag=true;
var flag2=true;
var botonCerrar = document.getElementsByClassName("box-Im");

var array = Array.prototype.forEach.call(botonCerrar, function (elemento){ 
	// this.style.display = "none"
	elemento.addEventListener("click",eliminaPanda);
})

// botonCerrar[0].addEventListener("click", cerrarIm);

function eliminaPanda(){
	// alert("mata panadas x.x");
	this.style.display="none";
}

function mostrarPandas(){
	panda1.style.display="block";
	panda2.style.display="block";
	panda3.style.display="block";
	panda4.style.display="block";
}

//Botones intermedios y párrafos

var botonOrigen=document.getElementById("origenTxt");
var botonExtincion=document.getElementById("extincionTxt");

botonOrigen.addEventListener("click", mostrarOcultarp1);
botonExtincion.addEventListener("click", mostrarOcultarp2);

function mostrarOcultarp1() { 
	if (flag==true) {
		parr1.style.display = "none";
		flag=false;
	} else {
		parr1.style.display = "flex";
	}
	
}

function mostrarOcultarp2() { 
	if (flag2==true) {
		parr2.style.display = "none";
		flag2=false;
	} else {
		parr2.style.display = "flex";
	}
}