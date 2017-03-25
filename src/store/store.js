import Vue from 'vue'
import Vuex from 'vuex'

import * as init from './init'
import * as type from '../type/types'
import * as articleHelper from '../helper/articleHelper'
import * as areaHelper from '../helper/areaHelper'
import * as chapterHelper from '../helper/chapterHelper'

Vue.use(Vuex);

export default new Vuex.Store({
    state: type.getState(),
    mutations: {
        INIT(state){
            init.user(state);
            init.chapters(state);
            init.articles(state);
            init.html(state);
        },
        // Chapter
        UPDATE_SELECTED_CHAPTER_ID(state, id){
            state.chapterId = id;
            state.currentChapter = chapterHelper.getSelected(state.chapters, id);
        },
        ADD_CHAPTER(state, title){
            const newId = Math.floor(Math.random() * 9999);
            let chapter = chapterHelper.GetInitChapter(newId);
            chapter.title = title;
            chapterHelper.Add(state.chapters, chapter);
            state.currentChapter = chapter;
        },
        // Article
        UPDATE_SELECT_ARTICLE(state, article){
            state.currentArticle = article;
            state.writingText = article.text;
            articleHelper.Select(state.articles, state.currentArticle.id);
            areaHelper.hideEditor(state);
        },
        UPDATE_TEXT(state, updateText){
            state.writingText = updateText;
            state.currentArticle.text = updateText;
            articleHelper.updateText(state.articles, state.currentArticle.id, updateText);
        },
        UPDATE_TITLE(state, title){
            state.currentArticle.title = title;
            articleHelper.updateTitle(state.articles, state.currentArticle.id, title);
        },
        ADD_ARTICLE(state, title){
            state.writingText = "";
            const newId = Math.floor(Math.random() * 9999);
            let article = articleHelper.GetInitArticle(newId);
            article.title = title;
            article.chapterId = state.chapterId;
            state.currentArticle = article;
            articleHelper.Add(state.articles, article);
            areaHelper.showEditor(state);
        },
        DELETE_ARTICLE(state, {commit}){
            state.articles = articleHelper.DeleteItem(state.articles, state.currentArticle.id);
            commit('UPDATE_SELECT_ARTICLE', state.articles[0])
        },
        // Html
        LAYOUT_CHAPTER_SWITCH(state){
            areaHelper.LayoutChapterSwitch(state);
        },
        SHOW_EDITOR(state){
            areaHelper.showEditor(state);
        },
        HIDE_EDITOR(state){
            areaHelper.hideEditor(state);
        },
    },
    actions: {
        init({commit}){
            commit('INIT')
        },
        // Chapter
        updateChapterId({commit}, id){
            commit('UPDATE_SELECTED_CHAPTER_ID', id)
        },
        addChapter({commit}, title){
            commit('ADD_CHAPTER', title)
        },
        // Article
        updateTitle({commit}, title){
            commit('UPDATE_TITLE', title)
        },
        updateText({commit}, updateText){
            commit('UPDATE_TEXT', updateText)
        },
        updateSelectArticle({commit}, article){
            commit('UPDATE_SELECT_ARTICLE', article)
        },
        addArticle({commit}, title){
            commit('ADD_ARTICLE', title)
        },
        deleteArticle({commit}){
            commit('DELETE_ARTICLE', {commit})
        },
        // Html
        layoutChapterSwitch({commit}){
            commit('LAYOUT_CHAPTER_SWITCH', {commit})
        },
        showEditor({commit}){
            commit('SHOW_EDITOR', {commit})
        },
        hideEditor({commit}){
            commit('HIDE_EDITOR', {commit})
        },
    },
    getters: {
        // Chapter
        getChapters: state => state.chapters,
        getChapterSelectedId: state => state.currentChapter.id,
        // Article
        getArticles: state => articleHelper.Filter(state.articles, state.chapterId),
        getWritingText: state => state.writingText,
        selectedArticleId: state => state.selectedArticleId,
        getCurrentArticle: state => state.currentArticle,
        // Html
        htmlLayoutChapter: state => state.areaHtml.chapter.main.flag,
        htmlLayoutEditor: state => state.areaHtml.editor.main.flag,
        htmlEditorIsActive: state => state.areaHtml.editor.editor.flag,
        htmlEditorIsActiveTitle: state => state.areaHtml.editor.editor.switchButtonTitle,
    }
})
