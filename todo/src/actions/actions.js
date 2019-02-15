export const ADDTODO =  'ADDTODO';
export const REMOVETODO = 'REMOVETODO';

export const addToDo = (payload) => {
  return {type: ADDTODO, payload:'add'};
}

export const removeToDo = (payload) => {
  return {type: REMOVETODO, payload:'remove'};
}