import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: "It's my first post ", likesCount: 12},
                {id: 2, message: "I'm fine and you? ", likesCount: 11},
                {id: 3, message: "I'm fine and you? ", likesCount: 11},
                {id: 4, message: "I'm fine and you? ", likesCount: 11} 
            ],
            newPostText: 'test'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Kir'},
                {id: 3, name: 'Oleg'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: "What's up ?"}, 
                {id: 3, message: "Are you busy ?"},
            ],
            newMessageText: 'test1'
        },
        friendList: {
            friends: [
                {img: "https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png", name: 'Dima'},
                {img: "https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png", name: 'Kir'},
                {img: "https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png", name: 'Oleg'},
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changes");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;