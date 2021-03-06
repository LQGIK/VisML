import React from 'react';

import BoxButton from './buttons/BoxButton.js';
import "./css/Home.css";
import robot_illustration from "./media/robot_illustration.png"
import { Container, Row, Col } from 'reactstrap';

class Home extends React.Component {

  render() {

    return (
        <div id="Home">
            <div className="firstHalf">
                <h1 className="title">VisML</h1>
                <p className="welcome">
                    Welcome to VisML. This is an educational website intended for students, hobbyists, and developers alike.
                    Here you can begin your journey in exploring Artificial Intelligence.
                </p>
            </div>
            <div className="secondHalf">
                <div className="strip"></div>
                <div className="playButton">
                    <BoxButton to="/play"label="PLAY"></BoxButton>
                </div>
            </div>
            <img id="robot_illustration" src={robot_illustration}></img>
            <div className="oval shadow">

            </div>
        </div>
       
    );
  };
}

//Home.contextType = GridContext; 
export default Home;