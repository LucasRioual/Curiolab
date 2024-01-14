const dropdownMenu = document.getElementById("dropdown-menu");

const getStuff = async () => {
    try{
      const response = await fetch('http://node.persil.ovh1.ec-m.fr:10411/api/stuff');
      const data = await response.json();
      console.log(data);
      data.forEach(item => {
      
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `boite.html?id=${encodeURIComponent(item._id)}`; 
        link.textContent = item.titre; 
        listItem.appendChild(link);
        dropdownMenu.appendChild(listItem);
        firstUrl = item._id;
      });

    }
    catch(error){
      console.error(error);
    }
    
  }


  getStuff();