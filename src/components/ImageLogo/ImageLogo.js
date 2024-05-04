import React from "react";

class ImageLogo extends React.Component {
  render() {
    // Assuming this.props.alt describes what the logo represents.
    // For example, alt could be "CompanyName Logo" or "Product Logo".
    const imageAltText = this.props.alt ? this.props.alt : "Logo";

    return (
      <div>
        <img className="smallLogo" src={this.props.image} alt={imageAltText} />
      </div>
    );
  }
}

export default ImageLogo;