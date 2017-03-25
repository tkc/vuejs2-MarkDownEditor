import * as articleHelper from '../helper/articleHelper'
import * as areaHelper from '../helper/areaHelper'
import * as chapterHelper from '../helper/chapterHelper'

export const user = state => {
    state.user.id = 1;
    state.user.name = "user_tkc";
};

export const chapters = state => {
    for (let i = 0; i < 3; i++) {
        const title = "chapter_" + i;
        chapterHelper.Add(state, title);
    }
};

export const articles = state => {
    for (let i = 0; i < 3; i++) {
        const newId = Math.floor(Math.random() * 9999);
        let article = articleHelper.GetInitArticle(newId);
        article.title = "article" + i;
        article.chapterId = state.chapterId;
        state.currentArticle = article;
        articleHelper.Add(state.articles, article);
    }
    areaHelper.showEditor(state);
};

export const html = state => {
    areaHelper.LayoutChapterSwitch(state);
};
