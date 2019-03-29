import React, { Component } from 'react';

/*The purpose of WrapperComponent is to "wrap around" the two cards: UserComponent and form. 
It includes a button to toggle the content of the cards(toggleContent) and change the button name, depending on the boolean value from state.
*/

class WrapperComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: true,
    }
  }  

  //updates the content state and shows/hides content depending on the boolean value 
  toggleContent = () => {
    const showContent = this.state.content;
    this.setState({content: !showContent});
  }

  render() {
    //using inline styling to style cards, toggleBTN and line
    const styleCards = {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      backgroundColor: "rgb(228, 228, 228)",
      padding: "18px",
      borderRadius: "10px"
    }
    
    const styleToggleBTN = {
      width: "50%",
      margin: "0 auto",
      display: "block"
    }
    
    const styleLine = {
      borderTop: "0.5px solid rgb(175, 175, 175)",
      width: "70%",
      margin: "0 auto",
      display: "block",
      marginBottom: "25px",
      marginTop: "25px"
    }

    return (
      <div style={styleCards}>
        {
          this.state.content === true ?
          <div>{this.props.children}</div> : null
        }
        <p style={styleLine}></p>
        <button className="btn btn-info" style={styleToggleBTN} onClick={this.toggleContent}>{this.state.content ? "Hide content" : "Show content"}</button>
      </div>
    );
  }
}

export default WrapperComponent;