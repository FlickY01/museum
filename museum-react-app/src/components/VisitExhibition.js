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

        )
    }
}

export default VisitExhibition;