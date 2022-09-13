import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';
import React from 'react';

describe('<Button>', () => {
  test('Default', () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy}>My Btn</Button>);

    const myButton = screen.getByRole('button', {
      name: /My Btn/i,
    });

    expect(myButton).toHaveTextContent('My Btn');
  });

  test('Is disabled', async () => {
    render(
      <Button onClick={() => {}} isDisabled>
        My Btn
      </Button>
    );

    const myButton = screen.getByRole('button', {
      name: /My Btn/i,
    });

    expect(myButton).toBeDisabled();
  });
});
