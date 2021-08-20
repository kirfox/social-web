let rerenderEntireTree = () => {
    console.log("State changes");
} 

let state = {
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
        ]
    },
    friendList: {
        friends: [
            {img: "https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png", name: 'Dima'},
            {img: "https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png", name: 'Kir'},
            {img: "https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png", name: 'Oleg'},
        ],
    },
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.ProfilePage.newPostText,
        likesCount: 0
    }
    state.ProfilePage.posts.push(newPost);
    state.ProfilePage.newPostText="";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    let rerenderEntireTree = observer;
}

export default state;