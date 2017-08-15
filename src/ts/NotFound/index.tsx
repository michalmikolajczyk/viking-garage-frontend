import * as React from 'react';
import Header from '../Header';
import AppBarVG from '../AppBarVG';

export default function NotFound(props) {
	return (
    <div>
      <AppBarVG {...props} />
      <Header />
      <div className="not-found">
        <h1>404... page not found!</h1>
      </div>
    </div>
  );
}
