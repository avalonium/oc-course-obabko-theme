"use strict";

let App = function () {

    return {
        createInstances: function ()
        {

        },
        onDOMContentLoaded: function(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
            } else {
                callback();
            }
        },
    }
}();

App.onDOMContentLoaded(function () {
    App.createInstances();
});