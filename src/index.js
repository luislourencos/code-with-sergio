import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { i18next } from './lang/i18next';
import { I18nextProvider } from 'react-i18next';
import { App } from './app';

ReactDOM.render(
  <I18nextProvider i18n={i18next} >
    <App />
  </I18nextProvider>,

  document.getElementById('root')
);
