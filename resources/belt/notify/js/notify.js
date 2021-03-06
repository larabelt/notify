import 'belt/notify/js/bootstrap/inputs';
import 'belt/notify/js/bootstrap/filters';
import 'belt/notify/js/bootstrap/functions';
import 'belt/notify/js/bootstrap/mixins';
import 'belt/notify/js/bootstrap/tiles';

import alerts from 'belt/notify/js/alerts/routes';
import store from 'belt/core/js/store/index';

window.larabelt.notify = _.get(window, 'larabelt.notify', {});

export default class BeltNotify {

    constructor(components = []) {
        this.components = [];

        _(components).forEach((value, index) => {
            this.addComponent(value);
        });

        if ($('#belt-notify').length > 0) {

            const router = new VueRouter({
                mode: 'history',
                base: '/admin/belt/notify',
                routes: []
            });

            router.addRoutes(alerts);

            new Vue({router, store}).$mount('#belt-notify');
        }
    }

    addComponent(Class) {
        this.components[Class.name] = new Class();
    }
}