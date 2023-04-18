import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);
//한국말로 등록

export function formatAgo(date, lang = 'en_us') {
    return format(date, lang);
}