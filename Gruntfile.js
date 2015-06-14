module.exports = function(grunt) {

    //Cargamos los plugins

    //jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //watch
    grunt.loadNpmTasks('grunt-contrib-watch');

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

        copy: {
            build_app_assets: {
                files: [
                    {
                        src: ['**'],
                        dest: '<%= build_dir %>/assets/',
                        cwd: 'src/assets',
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
    grunt.registerTask('dev', ['jshint','connect','watch']);
};
