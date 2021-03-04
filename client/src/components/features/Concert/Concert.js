import React from 'react';
import { Row, Col, NavItem, NavLink } from 'reactstrap';

import './Concert.scss';

const Concert = ({ performer, price, genre, day, image, _id }) => (
  <article className="concert">
    <Row noGutters>
      <Col xs="6">
        <div className="concert__image-container">
          <NavItem>
            <NavLink href={"/concert/" + _id}><img className="concert__image-container__img" src={image} alt={performer} /></NavLink>
          </NavItem>
        </div>
      </Col>
      <Col xs="6">
        <div className="concert__info">
          <img className="concert__info__back" src={image} alt={performer} />
          <h2 className="concert__info__performer">{performer}</h2>
          <h3 className="concert__info__genre">{genre}</h3>
          <p className="concert__info__day-n-price">Day: {day}, Price: {price}$</p>
        </div>
      </Col>
    </Row>
  </article>
);

export default Concert;