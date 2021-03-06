import React from 'react';
import Button from 'react-bootstrap/lib/Button'

class MyEatups extends React.Component {
	constructor(props) {
    super(props);
  }

  onSessionDelete(index, props) {
    var sessionToDelete = props.userSession[index];

    $.ajax({
      type:'DELETE',
      url: 'http://localhost:3000/sessions/deleteMeetUp',
      data: JSON.stringify({userId: sessionToDelete.creatorId, sessionId: sessionToDelete.id}),
      contentType: 'application/json',
      success: () => {
        console.log('success');
        this.props.refresh();
      }
    });
  }


  render () {

    var userCreatedSessions = this.props.userSession.map((result, index) => 
      <div className="card card-block">
        <p className="card-title myEatUp">{result.sessionname}</p>
        <Button className="deleteButton" bsStyle="danger" bsSize="xsmall" 
        onClick= { this.onSessionDelete.bind(this, index, this.props) }>Delete</Button>
      </div>
      )

    return (
      <div>
        <h2>Your EatUps</h2>
        <ul className='list-group eatupsList'>
          {userCreatedSessions}
        </ul>
      </div>
  	)
  }
}


export default MyEatups;