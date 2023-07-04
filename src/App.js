import logo from './logo.svg';
import {action,originals,comedy,horror} from './urls'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'  />
      <RowPost url={action} title='Action' isSmall  />
      <RowPost url={comedy} title='Comedy' isSmall  />
      <RowPost url={horror} title='horror' isSmall  />
    </div>
  );
}

export default App;
