
let state = {
    dialogsPage: {
        messages: [
            {id: "1", message: "HI"},
            {id: "2", message: "Whats up?"},
            {id: "3", message: "How are you?"},
            {id: "4", message: "HI"},
        ],

        dialogs: [
            {user: "Nadyrbek", id: "1"},
            {user: "Ayperi", id: "2"},
            {user: "Aydana", id: "3"},
            {user: "Kurmangazy", id: "4"},
            {user: "Baktybek", id: "5"},
            {user: "Jamiyla", id: "6"},
        ],
    },

    profilePage: {
        posts: [
            {id: 1, likesCount: "37", comment: "Hello!"},
            {id: 2, likesCount: "41", comment: "How are you!"},
            {id: 3, likesCount: "327", comment: "It's amazing!"},
            {id: 4, likesCount: "477", comment: "By!"},
        ],
    },
}

export let addPost = (messagePost) => {
    let newPost = {
        id: 5,
        likesCount: 0,
        comment: messagePost,
    };

    state.profilePage.posts.push(newPost);
} 

export default state;