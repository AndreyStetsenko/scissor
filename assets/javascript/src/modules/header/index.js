import '@popperjs/core';
import 'bootstrap';
import helpers from './modules/helpers';
import VideoBanner from './modules/videoBanner';
import lazyload from './modules/lazyload';

export default function header() {
    helpers();
    new VideoBanner();
    lazyload();

    window.addEventListener('error', (e) => {
        const { message, filename, lineno, colno, error } = e;
        console.log([message, filename, lineno, colno, error]);
    });
}
