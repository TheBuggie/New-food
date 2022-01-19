import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Container from './component/Container';
import Carousel from './component/Carousel';
import Card from './component/Card';
import Footer from './component/Footer';
import Carousel1 from './component/Carousel1';
import Show from './component/Show';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Container/>
       <Carousel/>
       <Card/>
       <Footer/>
    </div>
  );
}

export default App;
