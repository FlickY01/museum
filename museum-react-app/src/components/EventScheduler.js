import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class EventScheduler extends React.Component {
    constructor(props){
        super(props);
        this.state = { events: [] };
        this.handleReload();
        this.handleReload = this.handleReload.bind(this);
    }

    async handleReload(event) {
        const response = await api.events({date:""});
        this.setState({events: response});
    }

    render(){
        return(
            <div class="content">
              <div class="element">
                {this.state.events.map((event) => (
                    <p><span>Аукцион</span> <span>{event.date}</span> <span>{event.donater}</span> <span>{event.number}</span> <span>{event.price}</span></p>
                ))}
              </div>
              <div class="element">
                {this.state.events.map((event) => (
                    <p><span>Выступление</span> <span>{event.date}</span> <span>{event.donater}</span> <span>{event.number}</span> <span>{event.price}</span></p>
                ))}
              </div>
              <div class="element">
                {this.state.events.map((event) => (
                    <p><span>Выставка</span> <span>{event.date}</span> <span>{event.donater}</span> <span>{event.number}</span> <span>{event.price}</span></p>
                ))}
              </div>
              <div class="element">
                {this.state.events.map((event) => (
                    <p><span>Банкет</span> <span>{event.date}</span> <span>{event.donater}</span> <span>{event.number}</span> <span>{event.price}</span></p>
                ))}
              </div>
            </div>
        )
    }
}

export default EventScheduler;