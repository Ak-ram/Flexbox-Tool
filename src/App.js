import './App.scss';
import Box from './components/box/box';
import Controls from './components/controls/controls';
import Screen from './components/screen/screen';
import Header from './layout/header/header'
function App() {
  return (
    <div className="app">
      <Header/>
      <Screen />
      <Controls />
    </div>
  );
}

export default App;
