let user = {
    id: 0,
    name: '',
    iconImage: '',
};

let chapter = {
    id: 0,
    orderNum: 0,
    title: '',
    updateAt: '',
    isShow: true,
    isSelect: false,
};

const articleType = {
    master: "master",
    child: "child",
    result: "result",
};

let article = {
    id: 0,
    parentId: 0,
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

let areaAttribute = {
    flag: false,
    borderColor: "",
    backGroundColor: "",
    switchButtonTitle: "close",
};

let areaHtml = {
    header: {
        main: {
            areaAttribute,
        }
    },
    chapter: {
        main: {
            areaAttribute,
        }
    },
    editor: {
        main: {
            areaAttribute,
        },
        chapter: {
            areaAttribute,
        },
        articles: {
            areaAttribute,
        },
        editor: {
            areaAttribute,
        },
        markDown: {
            areaAttribute,
        },
        comments: {
            areaAttribute,
        }
    },
    footer: {
        main: {
            areaAttribute,
        }
    },
};

let state = {
    user: user,
    chapterId: 0,
    chapters: [],
    articles: [],
    articleDetails: [],
    comments: [],
    writingText: '',
    currentArticle: article,
    currentChapter: chapter,
    currentComment: comment,
    areaHtml: areaHtml,
};

export const getState = () => state;
export const getArticle = () => article;
export const getChapter = () => chapter;
