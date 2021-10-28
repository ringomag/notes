// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';


function App() {  

  return (
    <div className="">
        <Navbar />
        <h2 style={{color:"rgb(63, 147, 138)"}}>Notes</h2>
        <NewNote />
        <NotesList />

      
    </div>
  );
}

export default App;
