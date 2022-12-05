
import './App.css';
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import Icon1 from './components/Icon1';
import Icon2 from './components/Icon2';
import Icon3 from './components/Icon3';
import Icon4 from './components/Icon4';
 


function App() {
  return (
  <div className="App"> 
    <header className="App-header">
      <Navbar />
      <Headline />
    </header>
    <Icon1 />
    <Icon2 />
    <Icon3 />
    <Icon4 />

    </div>
  );
}
export default App;