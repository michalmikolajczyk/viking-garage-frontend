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
  // custom styles
  raido: {
    color: '#AD000D',
    fontFamily: 'Junicode'
  },
  container: {
    maxWidth: 900,
    margin: 'auto',
    width: '100%',
    padding: 30,
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
  },
});

export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          zDepth={0} // switch off box-shadow
          title="&#5809;"
          titleStyle={muiTheme.raido}
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
