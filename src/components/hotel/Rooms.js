import React, { Component } from 'react';

class Rooms extends Component {
    render() {
        return (
            <div class="card">
            <header class="card__thumb">
                <a href="#">
                <img src="" alt=""/>
                </a>
            </header>
            <div class="card__body">
                <div class="card__category"><a href="#">Photos</a></div>
                <h2 class="card__title"><a href="#">Reservar</a></h2>
                <div class="card__subtitle">Habitacione Doble</div>
                <p class="card__description">
                Mas Informacion
                </p>
            </div>
            </div>
        );
    }
}

export default Rooms;