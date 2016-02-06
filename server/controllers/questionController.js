import Question from '../models/questions.js';

function createQuestion (params, callback) {
  //return callback(params);
  return Question.create({
    prompt: params.prompt,
    presentation_id: params.presentation_id,
    question_type: params.question_type
  })
  .then(function(response){
    callback(response);
  });

}

export default {
  createQuestion: createQuestion
}