import './App.css';
import { Navbar } from '../src/components/Navbar';
import { Cards } from '../src/components/Cards';


function App() {
  let api = "22112c2feadd44a5a4a5dec82e74fd95";
  return (

    <div>
      <Navbar />
      <Cards apiKey={api} pageSize={9} />
    </div>
  );
}

export default App;
