import { createCards } from './modules/create_cards.js';
const projectCards = [
  {
    id: 'card-llm-from-scratch',
    url: 'https://github.com/dlajambe/llm-from-scratch',
    image_path: '../static/images/llm_from_scratch.jpg',
    title: 'LLM from Scratch',
    body: 'Building a GPT-inspired, generative language model from scratch in PyTorch.',
    tags: ['NLP', 'PyTorch', 'Python']
  },

  {
    id: 'card-portfolio-website', 
    url: 'https://github.com/dlajambe/portfolio',
    image_path: '../static/images/portfolio.svg',
    title: 'Portfolio Website',
    body: 'Making and styling a Flask-based web application to exhibit my personal project portfolio.',
    tags: ['HTML', 'Sass', 'JS', 'Python']
  },

  {
    id: 'card-sentiment-transformer', 
    url: 'https://github.com/dlajambe/deep-sentiment',
    image_path: '../static/images/sentiment_transformer.svg',
    title: 'Deep Sentiment Model',
    body: 'Creating a deep neural network to classify movie reviews as positive or negative.',
    tags: ['NLP', 'PyTorch', 'Python']
  },
];

createCards(projectCards);