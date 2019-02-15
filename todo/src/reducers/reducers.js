import { ADDTODO, REMOVETODO} from '../actions/actions';

const inst = {
  todo: []
}

export default (state = inst, action) => {
  switch (inst, action) {
    case ADDTODO:
    return {
      todo: state.todo + action.payload
    }
    case REMOVETODO:
    return {todo: state.todo + action.payload
  }
  default:
  return state;
}
}