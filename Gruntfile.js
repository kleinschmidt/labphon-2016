'use strict';

/**
 * This file is mostly pulled from the one generate by Yeoman 1.0 Beta
 **/

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        watch: {
            livereload: {
                files: [
                    '*.html',
                    'styles/*.css',
                    'scripts/*.js',
                    'images/*.{png,jpg,jpeg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:9000'
            }
        }
    });
    grunt.renameTask('regarde', 'watch');
    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};
