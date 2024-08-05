// import React from 'react';
// import "./App.css";
// import Header from "./components/header/Header";
// import Home from "./components/home/Home";
// import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
// import Qualification from './components/qualification/Qualification';
// import Work from './components/work/Work';
// import Testimonials from './components/testimonials/Testimonials';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import ScrollUp from './components/scrollup/ScrollUp';

// const App = () => {
//   return (
//     <>
//       <Header/>

//       <main className='main' >
//         <Home/>
//         <About/>
//         <Skills/>
//         <Services/>
//         <Qualification/>
//         <Work/>
//         <Testimonials/>
//         <Contact/>
//       </main>

//       <Footer/>
//       <ScrollUp/>
//     </>
//   );
// };

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollUp from './components/scrollup/ScrollUp';
import MainPage from './components/MainPage'; // Import the MainPage component
import NotFoundPage from './components/notFoundPage/NotFoundPage'; // Import the NotFoundPage component
import Dorothea from './components/dorothea/Dorothea'; // Keep the Her component import

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='main'>
        <Routes>
          <Route path="/" element={<MainPage/>} /> {/* Use MainPage on the main route */}
          <Route path="/dorothea" element={<Dorothea/>} /> {/* Her page route */}
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </main>
      <Footer/>
      <ScrollUp/>
    </Router>
  );
};

export default App;
