import * as React from 'react';
import Container from '../Container';

export default function NotFound(props) {
	return (
    <Container>
      <div className="cont" style={{height: 500, textAlign: 'center', lineHeight: '200px'}}>
        <h1>404... page not found!</h1>
      </div>
    </Container>
  );
}
