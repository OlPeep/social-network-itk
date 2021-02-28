let ADD_MES = "itk/app/ADD-MES";
//let UPDATE_NEW_MES_TEXT = "UPDATE-NEW-MES-TEXT";

let initialState = {
    DailogList: [
        {name:"Lex", id:1},
        {name:"Lil", id:2},
        {name:"Bo", id:3},
        {name: "Pu", id:4},
        {name: "Lu", id:5}
      ],
    MessagesList: [
        {text: "Hey"},
        {text: "Yo"},
        {text: "Huilo"},
        {text: "lu"}
    ],
    //newMesText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MES:
            let newMes = {
                text: action.text
            }
            return {
                ...state,
                MessagesList: [...state.MessagesList, newMes]
            }
        /*case UPDATE_NEW_MES_TEXT:
            return {
                ...state,
                newMesText: action.text
            }*/
        default:
            return state;
    }
}

export const addMesActionCreator = (text) => {
    return { type: ADD_MES, text };
  }
/*export const newMesTextActionCreator = (newP) => {
    return { type: UPDATE_NEW_MES_TEXT, text: newP };
  }*/

export default dialogsReducer;