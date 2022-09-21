import React, { Component } from 'react'
import ProductList from './ProductList';
import { Route, Routes } from 'react-router-dom';
import About from "./About";
import Contact from './Contact';
import Home from './Home';
import NotFound from '../NotFound';
import Staff from './Staff';
import Donations from './Donations';
import Djs from './Djs';
import Topics from './Topics';

export class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route element={<About />} path={"/about"} />
          <Route element={<Contact />} path={"/contact"} />
          <Route element={<Home />} path={"/"} />
          <Route element={<ProductList />} path={"/products"} />
          <Route element={<Staff />} path={"/staff"} />
          <Route element={<Donations />} path={"/donations"} />
          <Route element={<Djs />} path={"/djs"} />
          <Route element={<Topics />} path={"/topics"} />
          <Route element={<NotFound />} path={"/*"} />
        </Routes>
      </main>
    )
  }
}

export default Main