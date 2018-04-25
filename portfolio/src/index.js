import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


export const content = [
  {
    'id':1,
    'name': 'Pennyworth',
    'summary': 'In a team we created a mobile user application for Pennyworth, an on-demand butler service. Users can signup, login, schedule services, message their butler, and maintain services.',
    'repoFrontend': 'https://github.com/oaburgener/pennyworth.io_frontend',
    'repoBackend': 'https://github.com/oaburgener/pennyworth.io',
    'link': 'https://youtu.be/i8krQ3FfIaE',
    'tech': ['React Native', 'Redux', 'Express', 'Knex', 'PostgreSQL', 'Firebase']
  },

  {
    'id':2,
    'name': 'PRO-FILE Post',
    'summary': 'My team and I partnered with PRO-FILE to create a full-stack editorial site where athletes can sign-up and login to submit their personal articles. We provided administrative access for business owners to manage the site.',
    'repo': 'https://github.com/oaburgener/PRO-FILE_POST',
    'link': 'https://theprofilepost.herokuapp.com/',
    'tech': ['React', 'Redux','Javascript', 'CSS', 'HTML', 'Express', 'Knex', 'PostgreSQL', 'Bootstrap']
  },

  {
    'id':3,
    'name': 'Boomtown Workshop Scheduler',
    'summary': 'Boomtown, a local accelerator in Boulder, asked for an application to make tracking how successful their workshops were, easier. In a group, we then created an app for admin that sends out text message surveys to all of their attendees. With the data they receive from those surveys we then create charts so they can see the best and most attended workshops.',
    'repo': 'https://github.com/llamacoder/q2-boomtown',
    'link': 'https://boomtown-rocks.herokuapp.com/',
    'tech': ['Javascript', 'AJAX', 'CSS', 'HTML', 'jQuery', 'Express', 'Knex', 'Twilio', 'Node Scheduler', 'Chart.js']
  },

  {
    'id':4,
    'name': 'Forecast Calls For Fashion',
    'summary': 'I built an application that suggests outfits for women and men based off of the weather conditions of their location. Shopstyle Collective API and Weather Underground API was used to gather data.',
    'repo': 'https://github.com/llamacoder/q2-boomtown',
    'link': 'https://boomtown-rocks.herokuapp.com/',
    'tech': ['Javascript', 'AJAX', 'CSS', 'HTML', 'jQuery', 'Shopstyle Collective API', 'Weather Underground API']
  }
]

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
