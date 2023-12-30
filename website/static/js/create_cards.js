function createCard(cardData) {  
    // Step 1 - Create the card's child elements
    var template = document.createElement('div');
    const tagId = 'content-tags-'.concat(cardData.id);
    template.innerHTML = (
       `<div class="aspect-ratio">
          <div class="content">
            <div class="content-main">
              <div class="card-graphic">
                <img src=${cardData.image_path} align="middle" alt=${cardData.image_path}/>
              </div>
              <div class="card-text">
                <div class="card-title">
                  ${cardData.title}
                </div>
                <div class="card-body">
                  ${cardData.body}
                </div>
              </div>
            </div>
            <div class="content-tags" id=${tagId}>
            </div>
          </div>
        </div>`
    );

    // Step 2 - Insert the child elements into the card
    clonedElement = template.firstElementChild.cloneNode(true);
    var cardDiv = document.getElementById(cardData.id);
    cardDiv.appendChild(clonedElement);

    // Step 3 - Insert tags. The number of tags is variable for each card,
    // so they cannot be hard coded in step 1.
    var tagsDiv = document.getElementById(tagId);
    for (let i = 0; i < cardData.tags.length; i++) {
      var tagTemplate = document.createElement('div');
      tagTemplate.innerHTML = `<div class="tag">${cardData.tags[i]}</div>')`;
      var clonedElement = tagTemplate.firstElementChild.cloneNode(true);
      tagsDiv.appendChild(clonedElement);
    }

    // Step 4 - Add an onclick attribute so that the hyperlink works
    // when the card is clicked
    function handleClick() {
      window.open(cardData.url);
    }
    cardDiv.onclick = handleClick;
}

// Add cards to be rendered here
const cards = [
  {
    id: 'card-minerals-engineering',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0892687521003733',
    image_path: '../static/images/minerals_engineering.jpg',
    title: 'Minerals Engineering - 2021',
    body: 'Development and economic evaluation of multivariate anodic incident detection systems.',
    tags: ['C++', 'Python']
  },

  {
    id: 'card-light-metals', 
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-36408-3_74',
    image_path: '../static/images/light_metals.jpg',
    title: 'Light Metals - 2020',
    body: 'Anodic incident detection through multivariate analysis of individual anode current signals.',
    tags: ['R']
  },

  {
    id: 'card-laval', 
    url: 'https://library-archives.canada.ca/eng/services/services-libraries/theses/Pages/item.aspx?idNumber=1153644585',
    image_path: '../static/images/laval.jpg',
    title: 'Laval University - 2020',
    body: 'Multivariate monitoring of individual anode current signals for anodic incident detection.',
    tags: []
  }
];

for (let i = 0; i < cards.length; i++) {
  createCard(cards[i]);
}
