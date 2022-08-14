import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './Section/Section.jsx'
// import Modal from './Modal/modal.jsx'
import Navbar from './Navbar/navbar.jsx';
import Header from './Header/Header.jsx'
function App() {
  return (
   <>
    <Navbar/>
    {/* <Modal/> */}
    <Header/>
    <Section/>

   </>
  );
}

export default App;
