import { createCards } from './modules/create_cards.js';
const projectCards = [
  {
    id: 'card-llm-from-scratch',
    url: 'https://github.com/dlajambe/llm-from-scratch',
    image_path: '../static/images/llm_from_scratch.jpg',
    image_alt: '"Large language model from scratch"',
    title: 'LLM from Scratch',
    body: 'Building a GPT-inspired, generative language model from scratch in PyTorch.',
    tags: ['NLP', 'PyTorch', 'Python']
  },

  {
    id: 'card-portfolio-website', 
    url: 'https://github.com/dlajambe/portfolio',
    image_path: '../static/images/portfolio.svg',
    image_alt: '"Portfolio website"',
    title: 'Portfolio Website',
    body: 'Making and styling a Flask-based web application to exhibit my personal project portfolio.',
    tags: ['HTML', 'Sass', 'JS', 'Python']
  },

  {
    id: 'card-sentiment-transformer', 
    url: 'https://github.com/dlajambe/deep-sentiment',
    image_path: '../static/images/sentiment_transformer.svg',
    image_alt: '"Sentiment transformer neural network"',
    title: 'Sentiment Transformer',
    body: 'Creating a transformer-based neural network to classify the sentiment of English text.',
    tags: ['NLP', 'PyTorch', 'Python']
  },
];

createCards(projectCards);