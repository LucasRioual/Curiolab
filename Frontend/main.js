document.getElementById("btn-accueil").addEventListener("click", function(){
    window.location ="./boite.html?id=1";
    
    
  
  });

// Récupération des pièces depuis le fichier JSON
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const dropdownMenu = document.getElementById("dropdown-menu");

   
    data.forEach(item => {
      
      const listItem = document.createElement("li");

      
      const link = document.createElement("a");
      link.href = `boite.html?id=${encodeURIComponent(item.id)}`; 
      link.textContent = item.titre; 
      listItem.appendChild(link);
      dropdownMenu.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Une erreur s'est produite lors de la récupération des données JSON : ", error);
  });


