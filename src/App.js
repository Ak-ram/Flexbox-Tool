import './App.scss';
import Box from './components/box/box';
import Controls from './components/controls/controls';
import Screen from './components/screen/screen';
function App() {
  return (
    <div className="app">
      <Screen />
      <Controls />
    </div>
  );
}

export default App;
