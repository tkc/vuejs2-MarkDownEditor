import moment from 'moment'
const now = moment();
export const updateTime = () => now.format("YYY/MM/DD HH:mm");
