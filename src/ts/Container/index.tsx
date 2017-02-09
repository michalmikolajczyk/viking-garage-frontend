import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBar';
import Footer from '../Footer';
import Header from '../Header';
import Search from '../Search';

export default function Container(props) {
  return (
     <div>
      <AppBarVG />
      <Header />
      <Search />
      <div className="cont">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
