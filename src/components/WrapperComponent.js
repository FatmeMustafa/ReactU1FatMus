import React, { Component } from 'react';
import styles from './WrapperComponent.module.css';

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
  //HELP ROBIN -> THIS CODE WILL NOT WORK IF ADDED TO MODULE.CSS! IT GETS OVERWRITTEN BY BOOTSTRAP HOW DO I SOLVE THIS?
  const styleToggleBTN = {
    width: "50%",
    margin: "0 auto",
    display: "block" 
  }
    return (
      <div className={styles.styleCards}>
        {
          this.state.content === true ?
          <div>{this.props.children}</div> : null
        }
        <p className={styles.styleLine}></p>
        <button className="btn btn-info" style={styleToggleBTN} onClick={this.toggleContent}>{this.state.content ? "Hide content" : "Show content"}</button>
      </div>
    );
  }
}

export default WrapperComponent;