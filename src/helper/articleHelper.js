import * as type from '../type/types'
import * as timeHelper from './timeHelper'

export const GetInitArticle = newId => {
    let newArticle = Object.assign({}, type.getArticle());
    newArticle.id = newId;
    newArticle.updateAt = timeHelper.updateTime();
    return newArticle;
};

export const Select = (articles, selectedId) => {
    articles.forEach(article => selectedId === article.id ? article.isSelect = true : article.isSelect = false);
};

export const updateTitle = (articles, id, title) => {
    articles.forEach(article => {
        id === article.id ? article.text = title : null;
    });
};

export const updateText = (articles, id, updateText) => {
    articles.forEach(article => {
        if (id === article.id) {
            article.text = updateText;
            article.updateAt = timeHelper.updateTime()
        }
    });
};

export const Add = (articles, article) => articles.push(article);
export const DeleteItem = (articles, id) => articles.filter(article => article.id != id);
export const Filter = (articles, chapterId) => articles.filter(article => article.chapterId == chapterId).filter(article => article.isShow == true);
