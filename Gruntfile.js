/**
 * author      : ytj
 * createTime  : 2016/5/18 9:34
 * description :
 */
module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
            target: ['js/index.js']
        }
    });
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['eslint']);

};