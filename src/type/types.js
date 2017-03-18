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
        title: "閉じる",
    },
    hideArticles: {
        flag: false,
        title: "閉じる",
    },
    hideEditor: {
        flag: false,
        title: "閉じる",
    },
    hideMarkDown: {
        flag: false,
        title: "閉じる",
    },
    hideComments: {
        flag: false,
        title: "閉じる",
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
