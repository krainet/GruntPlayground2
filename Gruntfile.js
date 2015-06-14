module.exports = function(grunt) {

    //Cargamos los plugins

    //jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Cargamos nuestro archivo de configuracion
    var userConfig = require( './build.config.js' );

    grunt.initConfig({
        multi:{
            target1:[1,2,3],
            target2:['A','B','C']
        },

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
            /*
                ignore_warning: {
                options: {
                    //'-W015': true,   //Para ignorar este warning concretamente
                },
                src: [userConfig.app_files.js],
            }
            */
        },

        //WATCH
        watch: {
            scripts: {
                //Archivos que vigilamos
                files: [userConfig.app_files.js,'Gruntfile.js'],
                //Tareas a ejecutar
                tasks: ['jshint'],
                options: {
                    spawn: true,
                },
            },
        }
    });


    //Hello TASK
    grunt.registerTask('helloworld','Hola Mundo',function(){
        grunt.log.ok('Hello world');
    });

    //Base Multi Task
    grunt.registerMultiTask('multi','Multitask test',function(){
        return true;
    });

    //Default task
    grunt.registerTask('default', ['helloworld','jshint']);

};
