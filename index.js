//Event handlers
function handleSubmit(e) {
    e.preventDefault();
    let patronObj = {
        firstName:e.target.fname.value,
        lastName:e.target.lname.value,
        donation:e.target.donation.value
    }
    renderOnePatron(patronObj);
    addPatron(patronObj);
    let form = document.querySelector('form');
    form.reset();
 }
  
 //render patrons
 function renderOnePatron(patronObj) {
    //add patron to existing list
    let outsideBox = document.createElement('tr')
    let patronFName = document.createElement('td')
    patronFName.textContent = patronObj.firstName
    let patronLName = document.createElement('td')
    patronLName.textContent = patronObj.lastName
    let patronDonation = document.createElement('td')
    patronDonation.textContent = patronObj.donation
    //experiment
    let documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(outsideBox)
    outsideBox.appendChild(patronFName),
    outsideBox.appendChild(patronLName),
    outsideBox.appendChild(patronDonation),
  
    //add patron to DOM
    document.querySelector('tbody').appendChild(documentFragment)
 }
  
 //DOM render functions
 function renderOneArt(art) {
    //build art
    let card = document.createElement('li')
    card.class = 'card';
    card.innerHTML = `
    <img class="hi" src="https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg">
    <div class="content">
        <h4>${art.title}</h4>
        <p>${art.artist_display}</p>
    </div>
    <div id="button_listen">
        <button class="buttons" >Save </button><br>
        <br>
    </div>
    `
    //add art to DOM
    document.querySelector('#art-list').appendChild(card)
  
 //event listeners
  
  
    let btn = card.querySelectorAll('.buttons')
    btn.forEach(bttn => bttn.addEventListener('click', () => {
        window.alert("Saved!")
    })
    )
  
  
  
 let mOver = card.querySelectorAll('.hi')
 mOver.forEach(over => over.addEventListener('mouseover', e => e.target.style.border= "solid")
 )
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
  
 //for patron fetch
 function addPatron(patronObj) {
    fetch('http://localhost:3000/artData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(patronObj)
    })
    .then(res => res.json())
    .then(patron => console.log(patron))
 }
  
  
  
  
  
 document.querySelector('#submit_patron').addEventListener('submit', e => handleSubmit(e))
  

 
