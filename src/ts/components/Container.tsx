import React from 'react';
import {Link} from 'react-router';
import {AppBar} from 'material-ui';
import AppBarLine from 'components/AppBarLine';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Search from 'components/Search';

const barStyle = {
  position: 'fixed',
};

const titleStyle = {
  fontFamily: 'Junicode',
  color: '#AD000D'
};

export default function Container(props) {
  return (
     <div>
      <AppBar
        zDepth={0} // switch off box-shadow
        style={barStyle}
        title={<Link to="/">&#5809;</Link>}
        titleStyle={titleStyle}
        showMenuIconButton={false}
        iconElementRight={<Menu />}
      />
      <AppBarLine />
      <Header />
      <Search />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </div>   
  );
}
