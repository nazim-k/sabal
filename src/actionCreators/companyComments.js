import { ADD_COMMENT } from '../actions';

const addComment = ({ username, comment, ticker }) => ({
  type: ADD_COMMENT,
  username,
  comment,
  ticker
});

export default {
  addComment
}