import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = { previews: [] };
        this.handleReload();
        this.handleReload = this.handleReload.bind(this);
    }

    async handleReload(event) {
        const response = await api.previews({date:""});
        this.setState({previews: response});
    }

    render() {
        return (

        )
    }
}

export default Gallery;