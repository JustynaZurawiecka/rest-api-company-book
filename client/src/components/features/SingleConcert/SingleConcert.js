import React, { useState } from 'react';

const SingleConcert = ({ chosenConcert }) => {
    console.log(chosenConcert);
    const [count, setCount] = useState(0);

    return (
        <div className="ticket__info">
            <div >
                <p className="ticket__info__concert-title">Performer: {chosenConcert.performer}</p>
                <p className="ticket__info__concert-price">Cena: Cena {chosenConcert.price} PLN</p>
                <img className="concert__image-container__img" src={chosenConcert.image} alt={chosenConcert.title} />
                <div className="ticket__info__concert-count">
                    <label for="count">Wybierz ilość biletów:</label>
                    <select onChange={(e) => { setCount(e.target.value) }} name="count" id="count">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <div className="ticket__info__concert-count_max">Maksymalna ilość biletow to 4. W przypadku chęci zakupu większej ilości biletów zapraszamy do kontaktu</div>
                </div>
                <p className="ticket__info__concert-price">Suma: {chosenConcert.price * count} PLN</p>
            </div>
        </div>
    )
}

export default SingleConcert;