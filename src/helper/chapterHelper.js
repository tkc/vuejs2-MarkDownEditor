import * as type from '../type/types'
import * as timeHelper from './timeHelper'

export const GetInitChapter = newId => {
    let newChapter = Object.assign({}, type.getChapter());
    newChapter.id = newId;
    newChapter.updateAt = timeHelper.updateTime();
    return newChapter;
};

export const updateTitle = (chapters, id, title) => {
    chapters.forEach(chapter => {
        id === chapter.id ? chapter.text = title : null;
    });
};

export const getSelected = (chapters, selectedId) => {
    const filtered = chapters.filter(chapter => chapter.id == selectedId);
    return filtered[0];
};

export const Add = (chapters, chapter) => chapters.push(chapter);
export const DeleteItem = (chapters, id) => chapters.filter(chapter => chapter.id != id);
