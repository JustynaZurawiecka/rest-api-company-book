import React from 'react';
import { Row, Col, Container, Alert, Progress } from 'reactstrap';

class ConcertPage extends React.Component {

    componentDidMount() {
        const { loadConcert } = this.props;
        loadConcert(this.props.match.params.id);
    }

    render() {

        const { request, concert } = this.props;

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
                            <h2 className="concert__info__title">{concert.title}</h2>
                            <p className="concert__info__price">Cena: {concert.price}</p>
                        </div>
                    </Col>
                </Row>
                <h1>Opis koncertu</h1>
                <p>Dodanie opisu do kolekcji concerts</p>
            </Container>
        )
    };
}

export default ConcertPage;
