import React from 'react';
import Container from 'components/Container';

const item = {
  image: 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Honda-CRF-450R-Motocross-Bike-PNG-Image.png',
  title: 'KTM250SX 2017',
  engine: '2-stroke',
  capacity: '249',
  maxPower: '45',
  torque: '28',
  seatHeight: '960',
}

export default function Detail(props) {
	return (
    <Container>
      <div className="detail">
        <div className="image">
          <img src={item.image} />
        </div>
        <div className="params">
          <div className="title">
            {item.title}
          </div>
          <div className="trait">
            <div className="name">
              Engine Type:
            </div>
            <div className="value">
              {item.engine}
            </div>
          </div>
          <div className="trait">
            <div className="name">
              Capacity:
            </div>
            <div className="value">
              {item.capacity}cc
            </div>
          </div>
          <div className="trait">
            <div className="name">
              Max Power:
            </div>
            <div className="value">
              {item.maxPower}HP
            </div>
          </div>
          <div className="trait">
            <div className="name">
              Torque:
            </div>
            <div className="value">
              {item.torque}Nm
            </div>
          </div>
          <div className="trait">
            <div className="name">
              Seat Height:
            </div>
            <div className="value">
              {item.seatHeight}mm
            </div>
          </div>
          <button className="ride-btn">
            <span className="raido">
              &#5809;
            </span>
            <span>
              IDE
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
}
