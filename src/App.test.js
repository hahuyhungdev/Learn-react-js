import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('should render h2', () => {
    render(<App />);
    expect(screen.getByText('xin chao')).toBeInTheDocument();
  });
  it('should change text', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //assert
    const outputElement = screen.getByText('hello');
    expect(outputElement).toBeInTheDocument();
  });
  //test "does not render "xin chao" if the button is clicked"
  test('should not render h2', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //assert
    const outputElement = screen.queryByText('xin chao');
    expect(outputElement).toBeNull();
  });
});
