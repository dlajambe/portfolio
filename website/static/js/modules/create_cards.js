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

export function createCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    createCard(cards[i]);
  }
}