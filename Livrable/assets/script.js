const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let imageSlider = document.getElementById("slider")
let descriptionSlider = document.getElementById("descriptionSlider")
let flecheDeGauche = document.getElementById("g")
let flecheDeDroite = document.getElementById("d")
let dotsContainer = document.querySelector("body ol");

let i = 0

function updateSlide(i) {
	// Mettre a jour le contenu
    imageSlider.setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
    descriptionSlider.innerHTML = slides[i].tagLine;

    // Mettre à jour la classe des dots
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === i) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// Ecouteur d'action au clic sur les boutons droite et gauche
	flecheDeGauche.addEventListener("click", function() {
		i = (i - 1 + slides.length) % slides.length
		imageSlider.setAttribute("src","./assets/images/slideshow/" + slides[i].image)
		descriptionSlider.innerHTML = slides[i].tagLine
		updateSlide(i);
	})


	flecheDeDroite.addEventListener("click", function() {
		i = (i + 1) % slides.length
		imageSlider.setAttribute("src","./assets/images/slideshow/" + slides[i].image)
		descriptionSlider.innerHTML = slides[i].tagLine
		updateSlide(i);
	});

// Ajout des éléments "Dot" dans la div dédiée
	slides.forEach((element, i) => {
		let dot = document.createElement("li");
		dot.classList.add("dot");
		dot.setAttribute("data-index", i);
		dotsContainer.appendChild(dot);
	
		// Ajouter un écouteur d'événements aux dots pour changer la diapositive au clic
		dot.addEventListener("click", function () {
			updateSlide(i);
		});
	});
	

updateSlide(i);






	
