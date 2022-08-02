import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App: ', () => {

  test('should have header', () => {
    render(<App/>);
    const header = screen.getByTestId('header');
    expect(header).toBeTruthy();
  })

  test('should have footer', () => {
    render(<App/>);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeTruthy();
  })

  test('should have left-side', () => {
    render(<App/>);
    const leftSide = screen.getByTestId('left-side');
    expect(leftSide).toBeTruthy();
  })

  test('should have right-side', () => {
    render(<App/>);
    const rightSide = screen.getByTestId('right-side');
    expect(rightSide).toBeTruthy();
  })

  test('should have main', () => {
    render(<App/>);
    const main = screen.getByTestId('main');
    expect(main).toBeTruthy();
  })

  test('should have button', () => {
    render(<App/>);
    const button = screen.getByTestId('button');
    expect(button).toBeTruthy();
  })
})
