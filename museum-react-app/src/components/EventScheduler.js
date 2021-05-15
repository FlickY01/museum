import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class EventScheduler extends React.Component {
    constructor(props){
        super(props);
        this.state = { events: [] };
        this.handleReload = this.handleReload.bind(this);
    }

    async handleReload(event) {
        const response = await api.events({date:""});
        this.setState({events: response});
    }

    render(){
        return(
            
        )
    }
}

export default EventScheduler;