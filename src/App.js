import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Adduser from './Components/Adduser';
import Alluser from './Components/Alluser';
import Edituser from './Components/Edituser';
import About from './Components/About';
import Footer from './Components/Footer';
import Upload from './Components/Upload';
import View from './Components/View';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
          <Route exact path='/Home' element={< Home />}></Route>
          <Route exact path='/Signup' element={< Signup />}></Route>
          <Route exact path='/Contact' element={< Contact />}></Route>
          <Route exact path="/all" element={<Alluser />} />
          <Route exact path="/add" element={<Adduser />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Upload" element={<Upload />} />
          <Route exact path="/View" element={<View />} />
          <Route exact path="/edit/:id" element={<Edituser />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      {/* <Adduser /> */}
      {/* <Alluser /> */}
      {/* <Edituser /> */}
    </div>
  );
}

export default App;
