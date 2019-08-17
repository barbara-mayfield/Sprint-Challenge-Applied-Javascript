// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'));

const newArticle = data => {
    const card = document.createElement('div')
    card.classList.add('card');
    
    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = `${data.headline}`;
    
    const author = document.createElement('div')
    author.classList.add('author');
    
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container');
    
    const img = document.createElement('img')
    img.src = `${data.authorPhoto}`;
    
    const signature = document.createElement('span')
    signature.textContent = `By ${data.authorName}`;
    
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    imgContainer.appendChild(signature)
    
    return card;
}

let cardData = [];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(newArticle(response.data));
        })
    .catch((error) => {
        console.error(error);})

