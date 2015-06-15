module.exports = function(grunt) {

    //Cargamos los plugins

    //jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    //copy files
    grunt.loadNpmTasks('grunt-contrib-copy');

    //clean files
    grunt.loadNpmTasks('grunt-contrib-clean');

    //Connect web server
    grunt.loadNpmTasks('grunt-contrib-connect');

    //Cargamos nuestro archivo de configuracion
    var userConfig = require( './build.config.js' );

    grunt.initConfig({
        //JSHINT
        jshint: {
            all: [userConfig.app_files.js],
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },

        //Clean build dir
        clean: [userConfig.build_dir],

        copy: {
            build_js_files: {
                files: [
                    {
                        src: [userConfig.app_files.appjs],
                        dest: '../'+userConfig.build_dir,
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            build_css_files: {
                files: [
                    {
                        src: [userConfig.app_files.appcss],
                        dest: userConfig.build_dir,
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            build_html_files: {
                files: [
                    {
                        src: [userConfig.app_files.apphtml],
                        dest: userConfig.build_dir,
                        cwd: '.',
                        expand: true
                    }
                ]
            }
        },

        //WATCH
        watch: {
            scripts: {
                //Archivos que vigilamos
                files: [userConfig.app_files.js,userConfig.app_files.html],
                //Tareas a ejecutar
                tasks: ['jshint'],
                options: {
                    spawn: true,
                }
            },
            options: {
                livereload: true
            }
        },

        //CONNECT DEV-SERVER WITH LIVE RELOAD
        connect: {
            devServer: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    serverreload: false,
                    base: 'build',
                    livereload: true
                }
            }
        }
    });

    //Default task
    grunt.registerTask('default', ['jshint']);

    //My Own task
    grunt.registerTask('dev', ['jshint','connect','clean','copy:build_js_files','copy:build_css_files',
        'copy:build_html_files','watch']);
};
