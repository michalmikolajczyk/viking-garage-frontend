import React from 'react';
import ReactDOM from 'react-dom';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import {
  AppBar,
  FlatButton,
} from 'material-ui';
import CardContainer from 'containers/CardContainer';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Search from 'components/Search';

const muiTheme = getMuiTheme({
  fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  appBar: {
    textColor: 'black',
    color: 'white',
  },
  textField: {
    focusColor: '#AD000D',
  },
});

const titleStyle = {
  fontFamily: 'Junicode',
  color: '#AD000D'
}

export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          zDepth={0} // switch off box-shadow
          title="&#5809;"
          titleStyle={titleStyle}
          showMenuIconButton={false}
          iconElementRight={<Menu />}
        />
        <Header />
        <Search />
        <CardContainer />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
