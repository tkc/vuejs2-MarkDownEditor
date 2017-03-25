const openDefault = { flag: false, switchButtonTitle: "close" };
const closeDefault = { flag: true, switchButtonTitle: "edit" };

export const showEditor = state => state.areaHtml.editor.editor = closeDefault;
export const hideEditor = state => state.areaHtml.editor.editor = openDefault;

export const LayoutChapterSwitch = state => {
    if (!state.areaHtml.chapter.main.flag) {
        state.areaHtml.chapter.main = closeDefault;
        state.areaHtml.editor.main = openDefault;
    } else {
        state.areaHtml.chapter.main = openDefault;
        state.areaHtml.editor.main = closeDefault;
    }
};
