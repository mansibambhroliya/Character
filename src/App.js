
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { AiOutlineBorderOuter } from 'react-icons/ai';
import mycss from './css/Style.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
import Category from './componets/Category';
import Singleproduct from './componets/Singleproduct';
import Footer from './componets/Footer';
import Error from './componets/Error';
import Contact from './componets/Contact';
import Blog from './componets/Blog';
import Singlecomment from './componets/Singlecomment';
import Commentpost from './componets/Commentpost';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="navbar" element={ <Navbar/> } /> */}
        <Route path="/" element={ <Home/> } />        
        <Route path="about" element={ <About/> } />        
        <Route path="contact" element={ <Contact/> } />        
        <Route path="category/:id" element={ <Category/> } />
        <Route path='singleproduct/:id' element={ <Singleproduct/> }/>
        <Route path="review" element={ <Blog/> } />
        <Route path="comment/:id" element={ <Singlecomment/> } />
        <Route path="commentpost/:id" element={ <Commentpost/> } />
        <Route path="footer" element={ <Footer/> } />
        <Route path="*" element={ <Error/> } />      
      </Routes>
    </div>
  )
}

export default App