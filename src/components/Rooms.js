import React, { Component } from 'react';


import "./style.css"
import { connect } from 'react-redux'
import { loadProducts } from '../actions/roomsAction';

class ProductList extends Component {
    componentWillMount() {
        this.props.loadProducts()
    }


    render() {
        const { products } = this.props
        const classes = this.props.classes;

        return (
             
            <div className=" contenedor contenedor_habitacion" key="Subheader" >
               {products.map((d, index) => (
                    <div className="habitacion" key={d.image}>
                        <div className="img">
                            <img src={d.image} alt={d.name} />
                        </div>
                        <div className="info_rooms">
                            <div className="info">
                                <h3>
                                    title={d.name}
                                </h3>
                                <p>
                                    S/ 50.00
                    </p>
                            </div>
                            <div className="info info_color">
                                <h3>
                                    Mas informacion
                    </h3>
                                <p>
                                    Reservar
                    </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.ecomm.products
    }
}

function mapDispatchToProps(dispatch) {
    return {

        loadProducts: () => {
            dispatch(loadProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
