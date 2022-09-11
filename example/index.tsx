import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToggleSwitch, Button } from 'netflix-ui';

const App = () => {
  return (
    <div>
      Test
      <ToggleSwitch enabled onChange={() => {}} />
      <Button label="myButton" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
