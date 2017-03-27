import getMuiTheme from 'material-ui/styles/getMuiTheme';

const raidoRed1 = '#BB0003';
const raidoRed2 = '#FF2427';

const muiThemeVG = getMuiTheme({
  fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  palette: {
    primary1Color: 'black',
    primary2Color: 'black',
  },
  appBar: {
    color: 'white',
    textColor: 'black',
  },
  menuItem: {
    selectedTextColor: raidoRed1,
  },
  toggle: {
    // trackOnColor: raidoRed1,
    thumbOnColor: 'black',
  },
});

export default muiThemeVG
