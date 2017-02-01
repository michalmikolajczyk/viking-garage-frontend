import React from 'react';
import {
  CircularProgress,
  FontIcon,
  IconButton,
} from 'material-ui';
import {
  GridList,
  GridTile
} from 'material-ui/GridList';
import { muiThemeable } from 'material-ui/styles';

const styles = {
  image: {
    width: 'initial',
    height: 'initial',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  load: {
    width: '100%',
    height: 135,
    paddingTop: 40,
    boxSizing: 'border-box',
    backgroundColor: '#606060',
    textAlign: 'center',
  },
  loadmore: {
    color: 'white',
    fontSize: 30,
    cursor: 'pointer',
    textDecoration: 'underline',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
  }
};

export default muiThemeable()(Cardgrid);

function Cardgrid(props) {

  const {
    data,
    loadMore,
    loading,
    muiTheme,
  } = props;

  const loader = loading ? (
      <CircularProgress size={60} thickness={7} color="white" />
    ) : (
      <button style={styles.loadmore} onClick={loadMore}>
        Load more results
      </button>
    );

  const actionIconButton = item => (
    <IconButton>
      <FontIcon
        color="white"
        hoverColor="#AD000D"
        className='fa fa-fire'/>
    </IconButton>);

  const mappedItems = data.map(item => (
    <GridTile
      key={item.key}
      title={item.title}
      subtitle={<span><b>{item.price} - {item.approx}</b></span>}
      actionIcon={actionIconButton(item)}
    >
      <img style={styles.image} src={item.img} alt={item.title} />
    </GridTile>));

  return (
    <div style={{fontFamily: muiTheme.fontFamily}}>
      <div style={muiTheme.container}>
        <GridList cellHeight={300}>
          {mappedItems}
        </GridList>
      </div>
      <div style={styles.load}>
        {loader}
      </div>
    </div>
  );
}
