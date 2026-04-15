import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Men from "./pages/Men"
import Women from './pages/Women';
import AnyCloths from './pages/AnyCloths';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* Nested Routes */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} >
            {/* Nested dynamic Routes */}
            <Route path=":anycloths" element={<AnyCloths />}> {/* It is dynamic routing, because there is a ":" before the name of the route. Anything you write after "men/" will be redirect you to <AnyCloths /> page. */}
              <Route path="details" element={<Details />} /> {/* But it is not dynamic as there is no colons before the route. Though you can access the params through useParams() */}
            </Route>
          </Route>
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App