import { createCards } from './modules/create_cards.js';
const projectCards = [
  {
    id: 'card-llm-from-scratch',
    url: 'https://github.com/dlajambe/llm-from-scratch',
    image_path: '../static/images/llm_from_scratch.jpg',
    title: 'LLM from scratch',
    body: 'Building a GPT-inspired language model from scratch with generative AI.',
    tags: ['NLP', 'PyTorch', 'Python']
  },

  {
    id: 'card-portfolio-website', 
    url: 'https://github.com/dlajambe/portfolio',
    image_path: '../static/images/portfolio.jpg',
    title: 'Portfolio website',
    body: 'Making and styling my personal Flask-based portfolio website.',
    tags: ['HTML', 'CSS', 'JS', 'Python']
  },
];

createCards(projectCards);