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
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
        jsunit: [ 'src/**/*.spec.js' ],

        html: [ 'src/index.html' ]
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
