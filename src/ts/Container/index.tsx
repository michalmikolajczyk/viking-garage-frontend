import React from 'react';
import { Link } from 'react-router';
import AppBar from 'AppBar';
import Footer from 'Footer';
import Header from 'Header';
import Search from 'Search';

export default function Container(props) {
  return (
     <div>
      <AppBar />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
