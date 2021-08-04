let state = {
    ProfilePage: {
        posts: [
            {id: 1, message: "It's my first post ", likesCount: 12},
            {id: 2, message: "I'm fine and you? ", likesCount: 11},
            {id: 3, message: "I'm fine and you? ", likesCount: 11},
            {id: 4, message: "I'm fine and you? ", likesCount: 11} 
        ]
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

export default state;