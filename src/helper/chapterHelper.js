import _ from 'underscore'
import * as type from '../type/types'
import * as timeHelper from './timeHelper'

export const GetInitChapter = newId => {
    let newChapter = Object.assign({}, type.getChapter());
    newChapter.id = newId;
    newChapter.updateAt = timeHelper.updateTime();
    return newChapter;
};

export const Add = (state, title) => {
    const count = state.chapters.length;
    const newId = Math.floor(Math.random() * 9999);
    let chapter = GetInitChapter(newId);
    chapter.title = title;
    chapter.orderNum = count;
    state.chapters.push(chapter);
    state.currentChapter = chapter;
};

export const updateTitle = (state, id, title) => {
    state.chapters = state.chapters.map(chapter => {
        id == chapter.id ? chapter.title = title : null;
        return chapter;
    });
};

export const getSelected = (state, selectedId) => {
    const filtered = state.chapters.filter(chapter => chapter.id == selectedId);
    state.currentChapter = filtered[0];
};

export const deleteChapter = (state, id) => {
    state.chapters = state.chapters.filter(chapter => chapter.id != id)
        .map((chapter, index) => {
            chapter.orderNum = index;
            return chapter;
        });
    state.chapters = _.sortBy(state.chapters, chapter => chapter.orderNum)
};

export const updateOrder = (state, id, isUp) => {
    state.chapters = state.chapters.map((chapter,index) => {
        chapter.orderNum = index * 100;
        id == chapter.id ? isUp ? chapter.orderNum -= 150 : chapter.orderNum += 150 : null;
        return chapter;
    });
    state.chapters = _.sortBy(state.chapters, chapter => chapter.orderNum);
    state.chapters = state.chapters.map((chapter, index) => {
        chapter.orderNum = index;
        return chapter;
    });
};
