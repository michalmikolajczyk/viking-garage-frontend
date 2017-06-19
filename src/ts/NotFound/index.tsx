import * as React from 'react';
import Header from '../Header';
import AppBar from '../AppBar';

export default function NotFound(props) {
	return (
    <div>
      <AppBar />
      <Header />
      <div className="not-found">
        <h1>404... page not found!</h1>
      </div>
    </div>
  );
}
