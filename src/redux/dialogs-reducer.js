const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState =  {
  dialogs: [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Kir'},
      {id: 3, name: 'Oleg'},
  ],
  messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: "What's up ?"}, 
      {id: 3, message: "Are you busy ?"},
  ]
}

const dialogsReducer = (state = initialState, action) => {
  debugger
  switch(action.type) {
    case ADD_MESSAGE:
      return{
        ...state,
        messages: [...state.messages, {id: 5, message: action.newMessageText}]
      }  
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText})
debugger
export default dialogsReducer;