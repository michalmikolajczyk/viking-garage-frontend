import * as React from 'react';
import Header from '../Header';

export default function NotFound(props) {
	return (
    <div>
      <Header />
      <div className="cont" style={{height: 500, textAlign: 'center', lineHeight: '200px'}}>
        <h1>404... page not found!</h1>
      </div>
    </div>
  );
}
