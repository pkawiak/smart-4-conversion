module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./src",
                    dir: "build",
                    mainConfigFile: "require.conf.js",
                    modules: [
                        {
                            name: "app",
                            out: "app.js"
                        },
                        {
                            name: "multi",
                            out: "multi.js"
                        }
                    ]
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};