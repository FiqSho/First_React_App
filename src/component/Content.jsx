import  { Component } from "react";
import '../assets/css/Content.css'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      displayedText: "",
    };
  }

  handleButtonClick = () => {
    this.setState({ displayedText: this.state.text });
  };

  handleTextAreaChange = (e) => {
    const maxLength = 200; 
    const value = e.target.value;

    if (value.length <= maxLength) {
      this.setState({ text: value });
    }
  };

  render() {
    return (
      <div className="container bg-light h-75">
        <div className="row">
          <div className="col text-center">
            <h3 className="pt-5 ">This is Content section</h3>
              <br />
              <br />
            <textarea className="form-control h-50 overflow-auto pt-3" placeholder="Leave a text here to display"
              value={this.state.text}
              onChange={this.handleTextAreaChange}
            />
            <button onClick={this.handleButtonClick}
            className="btn btn-primary mt-2">Display Text</button>
            {this.state.displayedText && <p className=" fw-bolder fs-5 alert alert-primary overflow-auto">{this.state.displayedText}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
