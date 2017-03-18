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

let comment = {
    id: 0,
    user_id: 0,
    chapterId: 0,
    text: '',
    updateAt: '',
    isShow: true,
};

let areaHtml = {
    hideChapter: {
        flag: false,
        title: "close",
    },
    hideArticles: {
        flag: false,
        title: "close",
    },
    hideEditor: {
        flag: false,
        title: "close",
    },
    hideMarkDown: {
        flag: false,
        title: "close",
    },
    hideComments: {
        flag: false,
        title: "close",
    }
};

let state = {
    user: user,
    chapterId: 0,
    articles: [],
    comments: [],
    writingText: '',
    currentArticle: article,
    currentComment: comment,
    areaHtml: areaHtml,
};

export const getState = () => state;
export const getArticle = () => article;
