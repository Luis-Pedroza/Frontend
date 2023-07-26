if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js', { scope: '/PokedexPWA/' })        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.error('Error al registrar el Service Worker:', error);
        });
    });
  }
  

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeInfo("./none.webp", "?????", "?????", "?????", "?????");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            let pokeName = data.name;
            let pokeAbilities= data.abilities[0].ability.name;
            let pokeType = data.types[0].type.name;
            let pokeWeight = data.weight
            pokeInfo(pokeImg, pokeName, pokeAbilities, pokeType, pokeWeight);
        }
    });
}

const pokeInfo = (img, name, ability, type, weight) =>{
    const pokePhoto = document.getElementById("pokeImg");
    const pokeName = document.getElementById("name");
    const pokeAbilities = document.getElementById("abilities");
    const pokeType = document.getElementById("type");
    const pokeWeight = document.getElementById("weight");
    pokePhoto.src = img;
    pokeName.innerHTML = "Name: " + name;
    pokeAbilities.innerHTML = "Ability: " + ability;
    pokeType.innerHTML = "Type: " + type;
    pokeWeight.innerHTML = "Weight: " + weight + " Kg";
}

const showPokedex = ()  => {
    const showCover = document.getElementById("coverCut");
    const showInfo = document.getElementById("information");
    if (showCover.style.display == "block") {
        showCover.style.display = "none";
        showInfo.style.display = "block";
    }
    else { showCover.style.display = "none";
    showInfo.style.display = "block"; }
}
const hidePokedex = ()  => {
    const showCover = document.getElementById("coverCut");
    const showInfo = document.getElementById("information");
    if (showInfo.style.display == "block") {
        showCover.style.display = "block";
        showInfo.style.display = "none";
    }
    else { showCover.style.display = "block";
    showInfo.style.display = "none"; }
}