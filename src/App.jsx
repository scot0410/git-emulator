import './App.css';
import MyDisplay from './display/CanvasDisplay';
import MyTerminal from './terminal/TerminalDisplay';
import ParentComponent from './control/ParentComponent'

function App() {
  return (
    <div >
      <ParentComponent/>
    </div>
  );
}

export default App;
