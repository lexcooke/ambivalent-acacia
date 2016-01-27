import {Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function upVote(state) {
  return state.updateIn(
    ['tally', 'thumbsUp'],
    0,
    thumbsUp => thumbsUp + 1
  );
}

function downVote(state) {
  return state.updateIn(
    ['tally', 'thumbsDown'],
    0,
    thumbsDown => thumbsDown + 1
  );
}

function stopVote() {
  return fromJS({voting: false, hasVoted: false});
}

function startVote() {
  return fromJS({
   voting: true,
   tally: {
    thumbsUp : 0,
    thumbsDown: 0
   }
 });
}

export default function(state = fromJS({voting: false}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'UPVOTE':
    return upVote(state);
  case 'DOWNVOTE':
    return downVote(state);
  case 'STOP_VOTE':
    return stopVote();
  case 'START_VOTE':
    return startVote();
  }
  return state;
}