import React from "react";

class MemeGenerator extends React.Component {

  state = {
    topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/1ibj.jpg",
      allImages: []
  }
  
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const { memes } = response.data
      this.setState({
        allImages: memes
      })
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  submitChange = (event) => {
    event.preventDefault();
    const randImg = Math.floor(Math.random() * this.state.allImages.length);
    const dispImage = this.state.allImages[randImg].url;
    this.setState({ randomImage: dispImage })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.submit}>
          <input type="topText" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange} />
          <input type="bottomText" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange} />
          <button>GEN</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h1 className="top">{this.state.topText}</h1>
          <h1 className="bottom">{this.state.bottomText}</h1>
        </div>
      </div>
    )
  }
}

export default MemeGenerator;