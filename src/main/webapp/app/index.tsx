import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './shared/error/error-boundary';
import AppComponent from './app';
import { loadIcons } from './config/icon-loader';

loadIcons();

const rootEl = document.getElementById('root');

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
      <div>
        <Component />
      </div>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
