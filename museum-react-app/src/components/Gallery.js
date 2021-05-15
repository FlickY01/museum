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
            <div class="content">

             {this.state.previews.map((event) => (
                 <div class="element">
                    <img class="image" src={event.image}></img>
                        <h1 class="heading">{event.name}</h1>
                        <p class="text">{event.author}</p>
                    <div class="description">text</div> 
                 </div>
              ))};
             {this.state.previews.map((event) => (
                 <div class="element">
                    <img class="image" src={event.image}></img> 
                        <h1 class="heading">{event.name}</h1> /
                        <p class="text">{event.author}</p> 
                    <div class="description">text</div> 
                 </div>
                ))};
              {this.state.previews.map((event) => (
                  <div class="element">
                    <img class="image" src={event.image}></img> 
                        <h1 class="heading">{event.name}</h1> 
                        <p class="text">{event.author}</p> 
                    <div class="description">text</div> 
                   </div>
              ))};
         </div>
        )
    }
}

export default Gallery;