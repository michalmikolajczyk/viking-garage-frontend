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
      <div className="indiegogo-wrapper">
        <a href="https://www.indiegogo.com/projects/viking-garage-disrupting-a-motorcycle-industry-community" target="_blank">
          <img src="http://res.cloudinary.com/hkhuw4b7v/image/upload/v1515392258/IGG_Logo_Frame_Black_RGB_fmyyan.png" className="indiegogo-img" alt="Indiegogo" />
          <h2 className="heading-two jet-black">Hello there! Check out the special offers in our campaign on Indiegogo!</h2>
        </a>
      </div>
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
