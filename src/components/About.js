import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="imgbackground">
              <div className="form">
                <select className="input">
                  <option value="Categoria">Categoria</option>
                  <option value="Bajo">Bajo</option>
                  <option value="Medio">Medio</option>
                  <option value="Alta">Alta</option>

                </select>
                <select className="input">
                  <option value="Individual">Individual</option>
                  <option value="Familiar">Familiar</option>
                </select>
                <input className="input" type="submit" name="" value="BUSCAR"/>

              </div>
            </div>
        );
    }
}

export default About;
