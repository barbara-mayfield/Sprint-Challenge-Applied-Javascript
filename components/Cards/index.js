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

const newCard = (headline, authorPhoto, authorName) => {
    // console.log(headline)
    // console.log(authorPhoto)
    // console.log(authorName)

    const cardContain = document.createElement('div')
    cardContain.classList.add('card');
    
    const head = document.createElement('div')
    head.classList.add('headline')
    head.textContent = headline;
    
    const author = document.createElement('div')
    author.classList.add('author');
    
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container');
    
    const img = document.createElement('img')
    img.src = authorPhoto;
    
    const signature = document.createElement('span')
    signature.textContent = authorName;
    
    cardContain.appendChild(head)
    cardContain.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    imgContainer.appendChild(signature)
    
    return cardContain;
}

const container = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response.data)
        response.data.articles['javascript'].forEach( (article) => {
        const cards = newCard(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(cards);
        })
        response.data.articles['bootstrap'].forEach( (article) => {
        const cards = newCard(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(cards);
        })
        response.data.articles['technology'].forEach( (article) => {
        const cards = newCard(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(cards);
        })
        response.data.articles['jquery'].forEach( (article) => {
        const cards = newCard(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(cards);
        })
        response.data.articles['node'].forEach( (article) => {
        const cards = newCard(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(cards);
        })
    })
    .catch((error) => {
        console.error(error);})

