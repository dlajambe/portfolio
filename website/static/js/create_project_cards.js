import { createCards } from './modules/create_cards.js';
const projectCards = [
  {
    id: 'card-llm-from-scratch',
    url: 'https://github.com/dlajambe/llm-from-scratch',
    image_path: '../static/images/llm_from_scratch.jpg',
    title: 'LLM from scratch',
    body: 'Building a GPT-inspired deep language model from scratch with generative AI.',
    tags: ['NLP', 'PyTorch', 'Python']
  },

  {
    id: 'card-portfolio-website', 
    url: 'https://github.com/dlajambe/portfolio',
    image_path: '../static/images/portfolio.svg',
    title: 'Portfolio website',
    body: 'Making and styling my personal portfolio website, powered by Flask.',
    tags: ['HTML', 'CSS', 'JS', 'Python']
  },

  {
    id: 'card-sentiment-transformer', 
    url: '/',
    image_path: '../static/images/sentiment_transformer.svg',
    title: 'Sentiment transformer',
    body: 'Creating a deep transformer model to classify movie reviews as positive or negative.',
    tags: ['NLP', 'PyTorch', 'Python']
  },
];

createCards(projectCards);