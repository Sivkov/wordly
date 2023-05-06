import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      brand: "Ford",
      color: "yellow"
    };
  }

  changeBrand = () => {
    this.setState({ brand: this.state.brand === "Chevrolet" ? "Ford" :"Chevrolet" });
  }

  static getDerivedStateFromProps(props, state) {
    return {color: props.color };
  }

  render() {
    return (
      <div>
        <h2 >Hi, I prefer {this.state.color} {this.state.brand} ! </h2>
        <button
          type="button"
          onClick={this.changeBrand}>Change brand</button>
      </div>
    )
  }
}

export default Car; 