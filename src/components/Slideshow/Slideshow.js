import React, { Component } from "react";
import "./Slide.css";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.myIndex = 0;
  }

  componentDidMount() {
    this.carousel();
  }

  carousel = () => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.myIndex++;
    if (this.myIndex > slides.length) {
      this.myIndex = 1;
    }
    slides[this.myIndex - 1].style.display = "block";
    setTimeout(this.carousel, 5000);
  };

  render() {
    const slideshowStyle = {
      maxWidth: "1300px",
      margin: "auto",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      position: "relative",
    };

    return (
      <div className="w3-content w3-section" style={slideshowStyle}>
        {/* Slide 1 */}
        <div className="mySlides w3-animate-fading">
          <img
            src="./Banner-2023.jpg"
            style={{ width: "100%" }}
            alt="Slide 1"
          />
          <div className="overlay">
            <div className="overlay-content">
              <img src="./logo.png" alt="Logo" className="logo" />
              <div>
                <h2 className="title">Ministry of Water Resources</h2>
                <h5 className="title1">
                  Govertment of the People's Republic of Bangladesh
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="mySlides w3-animate-fading">
          <img
            src="./Bogura-Khal-2023.jpg"
            style={{ width: "100%" }}
            alt="Slide 2"
          />
          <div className="overlay">
            <div className="overlay-content">
              <img src="./logo.png" alt="Logo" className="logo" />
              <div>
                <h2 className="title">Ministry of Water Resources</h2>
                <h5 className="title1">
                  Govertment of the People's Republic of Bangladesh
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="mySlides w3-animate-fading">
          <img
            src="./teesta-2023.jpg"
            style={{ width: "100%" }}
            alt="Slide 3"
          />
          <div className="overlay">
            <div className="overlay-content">
              <img src="./logo.png" alt="Logo" className="logo" />
              <div>
                <h2 className="title">Ministry of Water Resources</h2>
                <h5 className="title1">
                  Govertment of the People's Republic of Bangladesh
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
