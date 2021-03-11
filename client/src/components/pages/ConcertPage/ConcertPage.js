import React from 'react';
import { Row, Col, Container, Alert, Progress, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

import './ConcertPage.scss';

class ConcertPage extends React.Component {

    componentDidMount() {
        const { loadConcert } = this.props;
        loadConcert(this.props.match.params.id);
    }

    render() {

        const { request, concert } = this.props;
        console.log(concert, 'concert')

        if (request.pending) return <Progress animated color="primary" value={50} />;
        else if (request.error) return <Alert color="warning">{request.error}</Alert>;
        else if (!request.success || !concert) return <Alert color="info">No concert</Alert>;
        else if (request.success) return (
            <Container>
                <Row noGutters>
                    <Col xs="6">
                        <div className="concert__image-container">
                            <img className="concert__image-container__img" src={concert.image} alt={concert.title} />
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className="concert__info">
                            <h2 className="concert__info__title">{concert.performer}</h2>
                            <p className="concert__info__price">Cena: {concert.price} PLN</p>
                        </div>
                        <Link to="/buy-a-ticket">
                            <Button className="concert__info-button" outline color="primary">Kup bilet</Button>
                        </Link>
                    </Col>
                </Row>
                <h1>Opis koncertu</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Container>
        )
    };
}

export default ConcertPage;
