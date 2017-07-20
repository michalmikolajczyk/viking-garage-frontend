import * as React from 'react';
import i from '../i18n';

export default function Groupon(props) {
  return (
    <div className="groupon-main">
      <a className="image-link" href="https://www.groupon.pl/deals/viking-garage" target="_blank">
        <img src="https://res.cloudinary.com/hkhuw4b7v/image/upload/c_scale,w_610/v1500232121/groupon_logo_tpslhq.png" />
      </a>
      <p className="groupon-p">Cześć! Jeżeli posiadasz już GROUPON® na motocykle oferowane u nas, możesz zarezerwować jazdę. Zadzwoń do nas: <a className="reganchor" href="tel:+48667772402" target="_blank">667 772 402</a> lub <a className="reganchor" href="tel:+48697951264" target="_blank">697 951 264</a>, albo napisz na <a className="reganchor" href="mailto:ride@vikinggarage.com" target="_blank">ride@vikinggarage.com</a>!</p>
      <p className="groupon-p">Jeżeli jeszcze nie masz zniżek na wystawiane tu motocykle, zapraszamy <a className="reganchor" href="https://www.groupon.pl/deals/viking-garage" target="_blank">do skorzystania z oferty GROUPON®</a>. Jazdy na wybranych motocyklach na terenie Warszawy nawet 30% taniej!</p>
    </div>
  );
}
