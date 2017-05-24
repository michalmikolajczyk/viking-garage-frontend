import * as React from 'react';
import Header from '../Header';

export default function NotFound(props) {
	return (
    <div>
      <Header />
      <div className="not-found">
        <h1>404... page not found!</h1>
      </div>
    </div>
  );
}
