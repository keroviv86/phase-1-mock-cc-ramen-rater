// write your code here
init()


function init() {
    fetchphotos()
    ramenSubmitForm()
}


//fetch things from link
function fetchphotos(){
    fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(ramenData=> ramenData.forEach(renderRamenPhotos))
}

//add photos to the DOM
function renderRamenPhotos(ramen){
    let ramenMenu = document.getElementById('ramen-menu')
    let ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    
    

    //click on image
    ramenImg.addEventListener('click', ()=>renderRamenInfo(ramen))
        // document.querySelector('.detail-image').src = ramen.image;
        // document.querySelector('.name').innerHTML = ramen.name;
        // document.querySelector('.restaurant').innerHTML = ramen.restaurant;
        // document.querySelector('#rating-display').innerHTML=ramen.rating
        // document.querySelector('#comment-display').innerHTML = ramen.comment
    
    ramenMenu.appendChild(ramenImg)
}

function renderRamenInfo(ramen){
        document.querySelector('.detail-image').src = ramen.image;
        document.querySelector('.name').innerText = ramen.name;
        document.querySelector('.restaurant').textContent = ramen.restaurant;
        document.querySelector('#rating-display').innerHTML=ramen.rating
        document.querySelector('#comment-display').innerHTML = ramen.comment

}

function ramenSubmitForm(){

    //grab form 
    let form = document.getElementById('new-ramen')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        console.log(e.target)
        const ramenObj = {
            name: document.querySelector('#new-name').value,
            restaurant: document.querySelector('#new-restaurant').value,
            image: document.querySelector('#new-image').value,
            rating:document.querySelector('#new-rating').value,
            comment:document.querySelector('#new-comment').value
        }

        renderRamenPhotos(ramenObj)
        e.target.reset()

    
    })
    
}

//"name": "Shoyu Ramen",
//"restaurant": "Nonono",
// "image": "./assets/ramen/shoyu.jpg",
//  "rating": 7,
// "comment": "Delish. Can't go wrong with a classic!"

// let inputName = e.target["name"].value
// let inputRestaurant = e.target["restaurant"].value
// let inputImages = e.target["image"].value
// let inputRating = e.target["rating"].value
// let inputComment = e.target["new-comment"].value