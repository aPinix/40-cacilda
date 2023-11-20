import { FC } from 'react';
import { LayoutDefault } from './layouts/LayoutDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { RoutePathsE } from './models/Models';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App: FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <LayoutDefault>
        <Router>
          <Routes>
            <Route path={RoutePathsE.Home} element={<Home />} />
            <Route path={RoutePathsE.Login} element={<Login />} />
            <Route path={RoutePathsE.About} element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LayoutDefault>
    </>
  );
};

export default App;
