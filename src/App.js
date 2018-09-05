import React, { Component } from 'react';
import './App.css';
import aboutImg from './images/about.png'
import profileImage from './images/profileImage.png'
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Navigation />
        <div className="landing">
          <div className="landing-content">
            <h3>Welcome to</h3>
            <h1>Digital Product Design</h1>
            <p> We are glad you are here. Let's jump in</p>
            <div className="landing-buttons">
              <div className="row">
                <div className="col">
                  <button type="button" className="btn dpd-btn trans-btn">Learn More</button>
                </div>
                <div className="col">
                  <button type="button" className="btn dpd-btn dark-btn">Class Schedule</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="about">
          <div className="row about-row">
            <div className="col text-left">
              <h2>What is the class about? </h2>
              <p>We’ll be talking about what it takes to design human-centered, goal-driven  and beautiful apps and websites. We’ll start all the way from ideating a project to designing it to highest fidelity.</p>
            </div>
            <div className="col">
              <img src={aboutImg} />
            </div>
          </div>
          <div className="row about-row">
            <div className="col">
              <img src={aboutImg} />
            </div>
            <div className="col text-left">
              <h2>What’s the format?</h2>
              <p>We believe that the best way to learn is by creating something you care about with friends to guide and support you. While classes will be  packed with content and opportunites to make connections around you, we strongly believe in the power of exploring and learning outside of the classroom to fully immerse yourself in design. </p>
              <p>Want to know more? Check out our schedule</p>
            </div>
          </div>
          <div className="row about-row">
            <div className="col-12 text-center teaching">
              <h2>Who’s teaching?</h2>
              <p>Andres and Nathalyn! We’re both students and designers who love solving hard problems and creating cool products. We teach this course with the guidance of our faculty mentor, Meenu, who…………….. </p>
            </div>
            <div className="col-12 text-center">
              <div className="row prof-images">
                <div className="col">
                  <img src={profileImage} />
                </div>
                <div className="col">
                  <img src={profileImage} />
                </div>
                <div className="col">
                  <img src={profileImage} />
                </div>
              </div>
            </div>
            <div className="col-12 text-center end-text">
              <p>Say hello! We’re friendly, we promise </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
