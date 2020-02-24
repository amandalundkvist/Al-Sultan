// JavaScript Document

function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        billedIndeks = 2;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

// ------- Hovedprogram ---------
const billedliste = ["images/slide1.jpg", "images/slide2.jpg", "images/flaske.jpg"];
let billedIndeks = 0;

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})


// lyd program
const lyd =new Audio("audio/alsultanunik.mp3")

const spil=document.getElementById("start")

spil.addEventListener("click",function(){
	lyd.play()
	});


// video program

function erSynlig(elementId){
	const elementBoks = document.getElementById(elementId).getBoundingClientRect();
	const halvtredsPct = elementBoks.height*0.5;
	const start = window.innerHeight - halvtredsPct;
	
	if (elementBoks.top<=start && elementBoks.bottom - halvtredsPct>0){
		return true;
	}
	else {
		return false;
	}
	
}



function aktiverMultimedier(){
	for (let i = 0; i<=AVIdListe.length - 1; i++){
		if (erSynlig(AVIdListe[i])){
			AVIndholdsliste[i].loop = true;
			AVIndholdsliste[i].play();
		}
		else{
			AVIndholdsliste[i].pause();
			AVIndholdsliste[i].currentTime=0;
		}
	
	}
}


const AVIdListe = ["pitavide"];
const  AVIndholdsliste=[];

AVIndholdsliste[0]=document.getElementById("pitavide");



window.addEventListener("scroll",function(){
	
						aktiverMultimedier();
						aktiverTekstAnimation();
						aktiverTekstAnimation2();
	

						});


//animationer

function erSynlig2(elementId){
	const elementBoks = document.getElementById(elementId).getBoundingClientRect();
	const halvtredsPct = elementBoks.height*0.05;
	const start = window.innerHeight - halvtredsPct;
	
	if (elementBoks.top<=start && elementBoks.bottom - halvtredsPct>0){
		return true;
	}
	else {
		return false;
	}
	
}

function aktiverTekstAnimation(){
	for (let i = 0; i<=billedeIdListe.length-1; i++){
		if (erSynlig2(billedeIdListe[i])){
			document.getElementById(billedeIdListe[i]).classList.add("slide-in-left");
		}
		else {
			document.getElementById(billedeIdListe[i]).classList.remove("slide-in-left");
		}
	}
}

const billedeIdListe = ["chili","koriander","kryd","pil"];

function aktiverTekstAnimation2(){
	for (let i = 0; i<=billedeIdListe2.length-1; i++){
		if (erSynlig2(billedeIdListe2[i])){
			document.getElementById(billedeIdListe2[i]).classList.add("slide-in-right");
		}
		else {
			document.getElementById(billedeIdListe2[i]).classList.remove("slide-in-right");
		}
	}
}

const billedeIdListe2 = ["lime","peber","kanel","kik"];










