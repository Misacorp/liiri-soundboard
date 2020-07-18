import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Router>{storyFn()}</Router>
    </>
  </ThemeProvider>
));

const req = require.context('../src/components', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
