import React from "react";
import "./MemeGenerator.css"

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "",
      allMemeings: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateImage = this.generateImage.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((fetchedData) => {
        this.setState({
          allMemeings: fetchedData.data.memes,
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  generateImage(event){
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * this.state.allMemeings.length);
    this.setState({
        randomImage:this.state.allMemeings[randomNumber].url,
    })
  }
  render() {
    return (
      <div>
        <div>
          <form className="meme-form">
            <input
              type="text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
              placeholder="Top Text"
            />
            <br />
            <input
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
              placeholder="Bottom Text"
            />
            <br />
            <button onClick={this.generateImage}>Gen</button>
          </form>
        </div>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
          <h2></h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
