import React from 'react';
import { Link } from 'react-router';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Search from 'components/Search';

export default function Container(props) {
  return (
     <div>
      <AppBar />
      <Header />
      <Search />
      <div className="cont">
        {props.children}
      </div>
      <Footer />
    </div>   
  );
}
