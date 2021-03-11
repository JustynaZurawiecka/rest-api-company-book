import React from 'react';
import { Container, NavLink, Button } from 'reactstrap';
import { useEffect } from 'react';

import SingleConcert from '../../features/SingleConcert/SingleConcert';


const TicketPage = ({ singleConcert, history }) => {
    useEffect(function () {
        if (!singleConcert) {
            history.push("/");
        }
    }, [])
    if (singleConcert) {
        return (
            <Container>
                <SingleConcert chosenConcert={singleConcert} />
                <div className="ticket__info">


                    <NavLink href="/order-a-ticket">
                        <Button className="ticket__info__order-button" outline color="primary">Dalej</Button>
                    </NavLink>
                </div>
            </Container>
        )
    } else { return null }

}

export default TicketPage;