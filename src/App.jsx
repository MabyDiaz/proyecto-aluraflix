import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import NewVideo from './pages/NewVideo.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/new-video'
            element={<NewVideo />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
