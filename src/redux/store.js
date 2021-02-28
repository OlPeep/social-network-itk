import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _renderAll () {
        console.log("yo");
    },
    state: {
        profilePage: {
            PostList: [
                { message: "Hi hi", likes: 10 },
                { message: "Ho ho", likes: 15 },
                { message: "Yo", likes: 15 },
                { message: "Россия будет свободной!", likes: 1500 },
                { message: "FREEDOM!", likes: 3000 }
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            newMesText: ""
        },
        Navbar: {}
    },
    getState() {
        return this.state;
    }, 
    subscribe(observer) {
        this._renderAll = observer;
    },
    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
        this.state.Navbar = navbarReducer(this.state.Navbar, action);

        this._renderAll(this.state);
        }
    }

export default store;
window.store = store;