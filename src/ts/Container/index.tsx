import * as React from 'react';
import { Link } from 'react-router';
import { default as AppBarVG } from '../AppBar';
import Footer from '../Footer';
import Header from '../Header';

export default function Container(props) {
  const header = props.close ? null : <Header />;
  return (
     <div>
      <AppBarVG />
      { header }
      {props.children}
      <Footer />
    </div>
  );
}
