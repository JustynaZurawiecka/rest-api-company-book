import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import SingleConcert from '../../features/SingleConcert/SingleConcert';


const TicketPage = ({ singleConcert, history, updateTicket }) => {
    useEffect(function () {
        if (!singleConcert) {
            history.push("/");
        }
    }, [])
    if (singleConcert) {
        return (
            <Container>
                <SingleConcert chosenConcert={singleConcert} updateTicket={updateTicket} />
                <div className="ticket__info">


                    <Link to="/order-a-ticket">
                        <Button className="ticket__info__order-button" outline color="primary">Dalej</Button>
                    </Link>
                </div>
            </Container>
        )
    } else { return null }

}

export default TicketPage;