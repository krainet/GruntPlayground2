module.exports = function(grunt) {

    //Cargamos los plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Cargamos nuestro archivo de configuracion
    var userConfig = require( './build.config.js' );

    grunt.initConfig({
        multi:{
            target1:[1,2,3],
            target2:['A','B','C']
        },
        jshint: {
            all: [userConfig.app_files.js,'Gruntfile.js']
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
