import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar /><ItemListContainer greeting='Hola Coders' />
    
    </div>
  );
}

export default App;
