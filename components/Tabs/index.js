// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



const newTabs = data => {
    
    const tab = document.createElement('div')
    tab.classList.add('tab');
    tab.textContent = data.topics;
    
    return tab;
}

const trending = document.querySelector('.title')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then((response) => {
            const newTab = newTabs(response.data)
                trending.appendChild(newTab)
            })
            .catch((error) => {
              console.log(error);
        })
console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));