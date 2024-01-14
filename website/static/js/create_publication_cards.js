// Add cards to be rendered here
import { createCards } from './modules/create_cards.js';
const publicationCards = [
  {
    id: 'card-minerals-engineering',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0892687521003733',
    image_path: '../static/images/minerals_engineering.jpg',
    image_alt: '"Minerals Engineering cover page"',
    title: 'Minerals Engineering cover page',
    body: 'Development and economic evaluation of multivariate anodic incident detection systems.',
    tags: []
  },

  {
    id: 'card-light-metals', 
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-36408-3_74',
    image_path: '../static/images/light_metals.jpg',
    image_alt: '"2020 Light Metals cover page"',
    title: 'Light Metals - 2020',
    body: 'Anodic incident detection through multivariate analysis of individual anode current signals.',
    tags: []
  },

  {
    id: 'card-laval', 
    url: 'https://library-archives.canada.ca/eng/services/services-libraries/theses/Pages/item.aspx?idNumber=1153644585',
    image_path: '../static/images/laval.jpg',
    image_alt: '"Laval University crest"',
    title: 'Laval University - 2020',
    body: 'Multivariate monitoring of individual anode current signals for anodic incident detection.',
    tags: []
  }
];

createCards(publicationCards);
