import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import WaitAnswered from './StudentAnsweredWaiting';
import io from 'socket.io-client';
import StudentAnswering from './StudentAnswering';
import * as actionCreators from '../../action_creators';

export const Student = React.createClass({
      
  render: function() {            
    return (
      <div className="student-container center-text">
          <h4>Room name: {this.props.room}</h4>
          <div className="student-content">   
          
            { (!this.props.voting) ? 
                <Wait /> : 
                (this.props.hasVoted) ?               
                  <WaitAnswered /> : 
                  <StudentAnswering ref="answer" {...this.props} /> }
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    voting: state.get('voting'),
    upvote: state.getIn(['tally', 'thumbsUp']),
    downvote: state.getIn(['tally', 'thumbsDown']),
    hasVoted: state.get('hasVoted')
  };
}

export const StudentContainer = connect(mapStateToProps,actionCreators)(Student);
