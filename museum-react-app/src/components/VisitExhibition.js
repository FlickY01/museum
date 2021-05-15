import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class VisitExhibition extends React.Component {
    constructor(props){
        super(props);
        this.state = { excursions: [] };
        this.handleReload();
        this.handleReload = this.handleReload.bind(this);
    }

    async handleReload(event) {
        const response = await api.excursions({date:""});
        this.setState({excursions: response});
    }

    render() {
        return (
            <div class="content">
              <div class="element">
                <h1 class="heading">Билет Стандарт</h1>
                {this.state.excursions.map((event) => (
                        <ul>
                            <li>{event.price}</li>
                            <li>{event.date}</li>
                           
                            <li>{event.donater}</li>
                            <li>{event.name}</li>
                        </ul>
                ))}
              </div>
              <div class="element">
                <h1 class="heading">Билет с Гидом</h1>
                {this.state.excursions.map((event) => (
                        <ul>
                            <li>{event.price}</li>
                            <li>{event.date}</li>
                            
                            <li>{event.donater}</li>
                            <li>{event.name}</li>
                        </ul>
                ))}
              </div>
              <div class="element">
                <h1 class="heading">Вип Билет</h1>
                {this.state.excursions.map((event) => (
                        <ul>
                            <li>{event.price}</li>
                            <li>{event.date}</li>
                            
                            <li>{event.donater}</li>
                            <li>{event.name}</li>
                        </ul>
                    ))}
              </div>
              <div class="element">
                <h1 class="heading">Семейный билет</h1>
                {this.state.excursions.map((event) => (
                        <ul>
                            <li>{event.price}</li>
                            <li>{event.date}</li>
                           
                            <li>{event.donater}</li>
                            <li>{event.name}</li>
                        </ul>
                    ))}
              </div>
            </div>
        )}
}

export default VisitExhibition;