import * as articleHelper from '../helper/articleHelper'
import * as areaHelper from '../helper/areaHelper'
import * as chapterHelper from '../helper/chapterHelper'

export const user = state => {
    state.user.id = 1;
    state.user.name = "test_user";
};

export const chapters = state => {
    const newId = Math.floor(Math.random() * 9999);
    let chapter = chapterHelper.GetInitChapter(newId);
    chapter.title = "test";
    this.$store.dispatch('updateChapterId', chapter.id);
};

export const articles = state => {
    const newId = Math.floor(Math.random() * 9999);
    let article = articleHelper.GetInitArticle(newId);
    article.title = "test";
    article.chapterId = state.chapterId;
    state.currentArticle = article;
    articleHelper.Add(state.articles, article);
    areaHelper.showEditor(state);
};


