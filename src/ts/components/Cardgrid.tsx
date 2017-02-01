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
import 'Cardgrid.scss';

export default function Cardgrid(props) {

  const {
    data,
    loadMore,
    loading,
    muiTheme,
  } = props;

  const loader = loading ? (
      <CircularProgress size={60} thickness={7} color="white" />
    ) : (
      <button className="loadmore" onClick={loadMore}>
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
      <img className="image" src={item.img} alt={item.title} />
    </GridTile>));

  return (
    <div className="cardgrid">
      <div className="container">
        <GridList cellHeight={300}>
          {mappedItems}
        </GridList>
      </div>
      <div className="load">
        {loader}
      </div>
    </div>
  );
}
