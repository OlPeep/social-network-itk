import { render, screen } from '@testing-library/react';
import AppWithWrap from './App';
import ReactDOM from 'react-dom';

test('renders ok', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithWrap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
