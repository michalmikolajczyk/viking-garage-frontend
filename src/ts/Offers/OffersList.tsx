import * as React from 'react';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';
import Offer from './Offer';

export default function OffersList(props) {
  const {
    listBali,
    list,
    date,
    loading,
    location,
  } = props;

  const itemsBali = listBali && listBali.map((item, key) => <Offer data={item} key={key} date={date} location={location}/>);
  const items = list.map((item, key) => <Offer data={item} key={key} date={date} location={location}/>);

  return (
    <div>
      {listBali && <h2 className="heading-two">Hot rides in Bali</h2>}
      {listBali && (
        <div className={`offers ${loading ? 'loading' : ''}`}>
          {itemsBali}
        </div>
      )}
      {listBali && <h2 className="heading-two">Hot rides in Poland</h2>}
      <div className={`offers ${loading ? 'loading' : ''}`}>
        {items}
      </div>
    </div>
  );
}
