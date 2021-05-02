import Palette from './Palette';

import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

import './App.css';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
