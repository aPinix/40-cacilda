import { FC } from 'react';
import { LayoutDefault } from './layouts/LayoutDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { RoutePathsE } from './models/Models';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { basePath } from './configs/variables';

const App: FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  // console.log('basePath:', basePath);

  return (
    <>
      <LayoutDefault>
        <Router basename={basePath}>
          <Routes>
            <Route path={RoutePathsE.Home} element={<Home />} />
            <Route path={RoutePathsE.Login} element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LayoutDefault>
    </>
  );
};

export default App;
