(function (root) {
    'use strict';

    function nextTick(fn) {
        setTimeout(fn, 0);
    }

    // -----------------------------------------------------------------------

    function capture(object) {
        var names = [];

        if (typeof object !== 'object') {
            return names;
        }

        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                names.push(prop);
            }
        }

        return names;
    }

    function difference(array1, array2) {
        var diff = [];

        array2.forEach(function (item) {
            if (array1.indexOf(item) === -1) {
                diff.push(item);
            }
        });

        return diff;
    }

    // -----------------------------------------------------------------------

    // Helpers properties.

    var primary = null;
    var secondary = null;

    // -----------------------------------------------------------------------

    // Start mechanism to catch difference between two states.

    // 1. Save all properties from root scope.
    primary = capture(root);

    nextTick(function () {
        // 2. After next ticket of clock tick capture one more time.
        //    This is invoke when whole page is loaded, so all of global
        //    variables are instanced.
        secondary = capture(root);
    });

    nextTick(function () {
        // 3. In next tick we display difference between 2 previous ticks of global clock.
        console.log(difference(primary, secondary));
    });

    // -----------------------------------------------------------------------

    // Export in CommonJS style.
    if (typeof module === 'object' && module.exports) {
        module.exports = {
            capture: capture,
            difference: difference,
            nextTick: nextTick
        }
    }

}(this));
