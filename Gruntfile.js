var grunt = require('grunt');

grunt.initConfig({
    multi:{
        target1:[1,2,3],
        target2:['A','B','C']
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
grunt.registerTask('default', ['helloworld']);


