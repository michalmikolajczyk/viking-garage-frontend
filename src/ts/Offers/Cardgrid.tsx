import * as React from 'react';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';
import Container from '../Container';
import Card from './Card';

export default function Cardgrid(props) {

  const {
    data,
    loadMore,
    loading,
  } = props;

  const loader = loading ? (
      <CircularProgress size={60} thickness={7} color="white" />
    ) : (
      <button className="loadmore" onClick={loadMore}>
        Load more results
      </button>
    );

  const mappedItems = data.map(item => <Card data={item} key={item.key} />);

  return (
    <Container>
      <div>
        <div className="cardgrid">
          {mappedItems}
        </div>
        <div className="load">
          {loader}
        </div>
      </div>
    </Container>
  );
}
