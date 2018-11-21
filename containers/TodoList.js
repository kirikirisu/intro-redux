import { connect } from 'react-redux';
import {
  removeTodo,
} from '../actions';
import TodoList from '../component/TodoList';

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
