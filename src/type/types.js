let user = {
    id: 0,
    name: '',
    iconImage: '',
};

let article = {
    id: 0,
    type: 0,
    user_id: 0,
    chapterId: 0,
    title: '',
    text: '',
    updateAt: '',
    isShow: true,
    isSelect: false,
};

let state = {
    user: user,
    chapterId: 0,
    articles: [],
    currentArticle: article,
    writingText: ''
};

export const getState = () => state;
export const getArticle = () => article;
