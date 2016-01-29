
import React from 'react';
import {connect} from 'react-redux';
import EducatorRequestCheckin from './EducatorRequestCheckin';
import ResultsDisplay from './ResultsDisplay';
import io from 'socket.io-client';
import Navbar from './NavBarEducator';
import * as actionCreators from '../../action_creators';

export const Educator = React.createClass({
 componentDidMount: function() {
   this.props.stopVote();
 },
 render: function() {    
   console.log('state educator', this.props);
   return (
     <div>
       <Navbar />          
       <div className="educator-container">
         <div className="center-text">
           <h4>Share this URL with your students: {window.location.href.split('?')[0]}</h4>
           {this.props.voting ?
             <ResultsDisplay ref="resultsDisplay" {...this.props} /> :
             <EducatorRequestCheckin {...this.props} />
           }
         </div>
       </div>
     </div>
   )
 }
});        

// function mapStateToProps(state) {
//  return {
//    voting: state.get('voting'),
//    upCount: state.getIn(['tally', 'thumbsUp']),
//    downCount: state.getIn(['tally', 'thumbsDown'])
//  };
// }

// const EducatorContainer = Educator;
// export const EducatorContainer;
// export const EducatorContainer = connect(mapStateToProps,actionCreators)(Educator);
