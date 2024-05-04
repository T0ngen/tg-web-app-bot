import React from "react";

class Image extends React.Component {
  render() {
    return (
      <div  >
        <img className="smallLogo" src={this.props.image} alt="image" />
      </div>
    );
  }
}
export default Image;