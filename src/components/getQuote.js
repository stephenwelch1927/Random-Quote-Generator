import React from "react";
import axios, { Axios } from "axios";
import { useState } from "react";

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
    };
  }
  
  componentDidMount() {
      axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
          console.log(response);
          this.setState({
            quote: response.data.setup
          }); //setQuote(response.data.setup + " ... " + response.data.punchline);
        });
  }
    
  render() {
    return <div>
        <p>{this.quote}</p>
    </div>;
  }
}
export default GetQuote;
