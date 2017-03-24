import * as type from '../type/types'
import * as timeHelper from './timeHelper'

export const GetInitChapter = newId => {
    let newChapter = Object.assign({}, type.getChapter());
    newChapter.id = newId;
    newChapter.updateAt = timeHelper.updateTime();
    return newChapter;
};

export const Filter = (chapters, selectedId) => {
    chapters.forEach(chapter => selectedId === chapter.id ? chapter.isSelect = true : chapter.isSelect = false);
};

export const updateTitle = (chapters, id, title) => {
    chapters.forEach(chapter => {
        if (id === chapter.id) {
            chapter.text = title;
        }
    });
};

export const Add = (chapters, chapter) => chapters.push(chapter);
export const DeleteItem = (chapters, id) => chapters.filter(chapter => chapter.id != id);
