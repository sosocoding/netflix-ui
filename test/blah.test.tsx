import React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/components/atoms/Button/Button';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="ok" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
