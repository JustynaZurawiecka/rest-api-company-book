import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

import './SingleConcert.scss';

const SingleConcert = ({ chosenConcert, updateTicket }) => {
    console.log(chosenConcert);
    const [count, setCount] = useState(0);

    const sum = count > 0 ? chosenConcert.price * count : chosenConcert.price;

    useEffect(function () {
        updateTicket({
            count: count,
            sum: sum
        })
    }, [count]);

    // function saveConcert() {
    //     localStorage.setItem('performer', chosenConcert.performer);
    //     localStorage.setItem('count', count);
    //     localStorage.setItem('sum', sum)
    // }

    // saveConcert();

    return (
        <div className="ticket__info">
            <div >
                <p className="ticket__info__concert-title">Performer: {chosenConcert.performer}</p>
                <p className="ticket__info__concert-price">Cena: {chosenConcert.price} PLN</p>
                <img className="concert__image-container__img" src={chosenConcert.image} alt={chosenConcert.title} />
                <div className="ticket__info__concert-count">
                    <label for="count">Wybierz ilość biletów:</label>
                    <select onChange={(e) => { setCount(e.target.value) }} name="count" id="count" value={count}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <div className="ticket__info__concert-count_max">Maksymalna ilość biletow to 4. W przypadku chęci zakupu większej ilości biletów zapraszamy do kontaktu</div>
                </div>
                <p className="ticket__info__concert-price">Suma: {sum} PLN</p>
                <Button class="ticket__info__concert-delete">Anuluj</Button>
            </div>
        </div>
    )
}

export default SingleConcert;