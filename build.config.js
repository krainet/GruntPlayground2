/** Archivo de configuration de app **/
/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * App directorys
     */
    build_dir: 'build',
    compile_dir: 'bin',

    /**
     * App files
     */
    app_files: {
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js','Gruntfile.js','build.config.js'],
        jsunit: [ 'src/**/*.spec.js' ],

        html: [ 'build/*' ]
    },


    vendor_files: {
        js: [
            'vendor/angular/angular.js'
        ],
        css: [
        ],
        assets: [
        ]
    }
};

