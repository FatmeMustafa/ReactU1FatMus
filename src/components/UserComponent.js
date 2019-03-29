import React, { Component } from 'react';
import './UserComponent.css';   //importing file to add external styling

/*The purpose of UserComponent is to render the users from state and toggle colors depending on the boolean value from state.*/
class UserComponent extends Component {
  render() {
    //color from DashboardComponent is passed to UserComponent as props
    let color = this.props.color;    
    const stateTrue = 'rgb(238, 164, 164)';
    const stateFalse = 'rgb(202, 174, 248)';

    return (
      <div className="container user">
        <div className="row">
          <div className="col-md-6">
            {this.props.usersName.map((userName, index) => {
              return <p className="usersList" key={`userName-${index}`} style={{ color: color ? stateTrue : stateFalse}} >{userName}</p>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UserComponent;