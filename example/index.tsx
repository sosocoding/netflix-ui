import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

// import { ToggleSwitch, Button } from 'netflix-ui';

// import { Button } from '../src/components/atoms/Button/Button';
// import { ToggleSwitch } from '../src/components/atoms/Toogle/Toggle';

// import 'netflix-ui/dist/netflix-ui.cjs.development.css';

const App = () => {
  return <div>Test</div>;
};

const rootElement = document.getElementById('root');

// 👇️ use type assertion
const root = createRoot(rootElement as Element);

root.render(<App />);
