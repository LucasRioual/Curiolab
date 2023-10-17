// Récupération des paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

var images = [4];
images[0] = new Image();
images[1] = new Image();
images[2] = new Image();
images[3] = new Image();

var cheminsImages = [4];

var divs = document.getElementById("block-left").children;
const main_img = document.getElementById("img-main");

// Utilisez la variable "titre" comme bon vous semble dans votre script "page.js"
console.log("Titre récupéré depuis l'URL : " + id);

// Récupération des pièces depuis le fichier JSON
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const piece = data.find(item => item.id == id);
    document.getElementById("txt-Ring").innerText = piece.titre;
    document.getElementById("txt-titre").innerText = piece.soustitre;
    document.getElementById("txt-description").innerText = piece.description;
    document.getElementById("txt-prix").innerText = piece.prix + " € TTC";
    document.getElementById("txt-prix-HT").innerText = piece.prixht + " € HT";
    

    cheminsImages[0] = piece.ressource + "/face1.JPG";
    cheminsImages[1] = piece.ressource + "/face2.JPG";
    cheminsImages[2] = piece.ressource + "/face3.JPG";
    cheminsImages[3] = piece.ressource + "/face4.JPG";
    console.log(cheminsImages);

    for (var i = 0; i < images.length; i++) {
      images[i].src = cheminsImages[i];
      images[i].onload = load_image(i);
    }


    

  })
 


// Retouner à la page pricipal

document.getElementById("block_logo").addEventListener("click", function(){
  window.location ="./index.html";
  
  

});




//Afficher les images de la boites 




function load_image(index){
    divs[index].style.backgroundImage = 'url(' + images[index].src + ')';
    if(index==0){
        main_img.style.backgroundImage = 'url(' + images[index].src + ')';
        divs[index].style.border = "4px solid #FFB800";
    }
}

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function(event) {
      for (var j = 0; j < divs.length; j++) {
        divs[j].style.border = null;
      }
      event.currentTarget.style.border = "4px solid #FFB800";
      main_img.style.backgroundImage = event.currentTarget.style.backgroundImage;
    });
  }

  //******************************** */

  //Compteur

const btn_moins = document.getElementById("btn-moins");
const btn_plus = document.getElementById("btn-plus");
const txt_compteur = document.getElementById("txt-compteur");

var count = 1;

btn_moins.addEventListener("click", function(){
  if(count>=2){
    count -= 1;
  }
  txt_compteur.innerText = count;
  
  

});

btn_plus.addEventListener("click", function(){
  
  count += 1;
  
  txt_compteur.innerText = count;
  

});



