import header from '../../modules/header';
import sliderProductPhoto from './modules/sliderProductPhoto';

/**
 * Static page
 */
class Static {
    /**
     * Static page constructor
     */
    constructor() {
        this.initModules();
    }
    /**
     * Static for init plugins
     */
    initModules() {
        header();
        sliderProductPhoto();
    }
}

new Static();
