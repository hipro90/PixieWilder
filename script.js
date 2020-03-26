var lien = "a";

function rand(max) {
	return (Math.floor(Math.random() * max));
}

function bodytest() {
	for (var i = 0; i < document.links.length; i++) {
		if (document.links[i].className == "page") {
			document.links[i].onmouseover = page;
			document.links[i].onmouseout = unpage;
			document.links[i].aecTimer = null;
		}
	}
}

function page(isFF) {
	if (isFF) {
		lien = isFF.target;
		isFF.target.aecTimer = setInterval('lien.style.color = "rgb("+rand(256)+","+rand(256)+","+rand(256)+")";', 100);
	}
}

function unpage(isFF) {
	if (isFF) {
		clearInterval(isFF.target.aecTimer);
		isFF.target.aecTimer = null;
		isFF.target.style.color = "";
	}
}
////////////////////////////////FORM EVENT//////////////////////////////////////////////
var list = document.getElementById('list');
list.addEventListener('change', function () {
	// On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
	alert(list.options[list.selectedIndex].innerHTML);
});

var list = document.getElementById('list2');
list.addEventListener('change', function () {
	// On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
	alert(list.options[list.selectedIndex].innerHTML);
});

var form = document.getElementsByClassName('button');
form.addEventListener('submit', function (e) {
	alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
});



//////////////////////////////////////////BOUTON///////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////FORM IN PROGRESS///////////////////////////////////////////////////

// var myForm = document.getElementById('Form');

// myForm.addEventListener('submit', function(e) {
// 	alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
// 	e.preventDefault();
// });

// myForm.addEventListener('reset', function(e) {
// 	alert('Vous avez réinitialisé le formulaire !');
// });

/////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////ANIME TITLE NOT FULL JS///////////////////////////////////////////////////

// anime.timeline({
//         loop: true
//     })
//     .add({
//         targets: '.ml5 .line',
//         opacity: [0.5, 1],
//         scaleX: [0, 1],
//         easing: "easeInOutExpo",
//         duration: 700
//     })

//     .add({
//         targets: '.ml5 .line',
//         duration: 600,
//         easing: "easeOutExpo",
//         translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
//     })

//     .add({
//         targets: '.ml5 .ampersand',
//         opacity: [0, 1],
//         scaleY: [0.5, 1],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=600'
//     })

//     .add({
//         targets: '.ml5 .letters-left',
//         opacity: [0, 1],
//         translateX: ["0.5em", 0],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=300'
//     })

//     .add({
//         targets: '.ml5 .letters-right',
//         opacity: [0, 1],
//         translateX: ["-0.5em", 0],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=600'
//     }).add({
//         targets: '.ml5',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////COLOR EFFET ALL ELEMENT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var overcolor = document.getElementById("bodytest");
// overcolor.addEventListener("mouseenter", function (event) {
//     event.target.style.color = "purple";
//     setTimeout(function () {
//         event.target.style.color = "";
//     }, 500);
// }, false);

// overcolor.addEventListener("mouseover", function (event) {
//         event.target.style.color = "orange";
//         setTimeout(function () {
//                 event.target.style.color = "";
//             },
//             500);
//     },
//     false);