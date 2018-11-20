import { connect } from 'react-redux';
import {
  addTodo,
} from '../actions';
import AddTodo from '../component/AddTodo';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  onPress: text => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
