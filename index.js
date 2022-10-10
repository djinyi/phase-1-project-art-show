//DOM render functions
function renderOneArt(art) {
    //build art
    let card = document.createElement('li')
    card.class = 'card';
    card.innerHTML = `
    <img src="https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg">
    <div class="content">
        <h4>${art.title}</h4>
        <p>
            ID <span class="save-count">${art.id}</span> Save
        </p>
        <p>${art.artist_display}</p>
    </div>
    <div class="buttons">
        <button>Donate $10 </button>
    </div>
    <div class="buttons">
        <button>Save </button>
    </div>
    `
    //add art to DOM
    document.querySelector('#art-list').appendChild(card)
}



//initial render
//get data and render our art to DOM
function initialize() {
    getAllArt()
}

initialize();


//fetch request
//get fetch for all art
function getAllArt() {
    fetch('https://api.artic.edu/api/v1/artworks?page=134&limit=10')
    .then(res => res.json())
    .then(arts => arts.data.forEach(art => renderOneArt(art)))
}

//let firstDiv = document.getElementById('test');


//console.log(firstDiv);
//let myTest = document.createElement("h1");
//myTest.textContent = "Hells!"


//firstDiv.append(myTest);


//let mySecondTest = document.createElement("img");
//mySecondTest.src = "https://imgur.com/a/X5LPszC";
//let firstImage = document.getElementById('test-b');
//firstImage.append(mySecondTest);




