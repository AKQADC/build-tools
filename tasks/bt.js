/*
 * grunt-build-tools
 * https://github.com/mkay581/build-tools
 *
 * Copyright (c) 2015 Mark Kennedy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerTask('bt', 'Set of custom build tools.', function() {
        var command = arguments[0];
        if (command) {
            require('./../src/' + command)(grunt, Array.prototype.slice(arguments, 1));
        } else if (!command) {
            grunt.log.error('you must specify a bt command');
        } else {
            grunt.log.error('there is no bt command named ' + command + '.');
        }
    });

};
