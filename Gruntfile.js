module.exports = function(grunt) {

    var config = {},
        distPath = "dist/",
        publicJsPath = "public/js/",
        publicCssPath = "public/css/",
        publicImgPath = "public/images/";

    // Clean Folder ================================
    config.clean = [distPath, publicJsPath, publicCssPath];

    // Watch ================================
    config.watch = {
        files: ["src/js/**/*.js",
                "src/js/*.js",
                "src/css/settings/*.css",
                "src/css/generic/*.css",
                "src/css/elements/*.css",
                "src/css/objects/*.css",
                "src/css/components/*.css"
        ],
        tasks: ["default"]
    };

    // Concat ================================
    config.concat = {
        utils: {
            src: [
                "src/js/model/FiveDaysThreeHoursModel.js",
                "src/js/dao/FiveDaysThreeHoursDao.js",
                "src/js/service/FiveDaysThreeHoursService.js",
                "src/js/controller/FiveDaysThreeHoursController.js",
                "src/js/view/*.js",
                "src/js/helper/*.js",
                "src/js/app.js"
            ],
            dest: publicJsPath + "app.js"
        },
        css: {
            src: ["src/css/settings/*.css",
                  "src/css/generic/*.css",
                  "src/css/elements/*.css",
                  "src/css/objects/*.css",
                  "src/css/components/*.css"
            ],
            dest: distPath + "app.css"
        }
    };

    config.cssmin = {
        css: {
            src: distPath + "*.css",
            dest: publicCssPath + "app.min.css"
        }
    };


    // Svgmin =====================================
    config.svgmin = {
        dist: {
            files: [{
                //'public/images/download.svg' : 'src/images/download.svg'
            }]
        }
    };

    // Connect Static Web Server =====================================
    config.connect = {
        manual: {
            options: {
                keepalive: true,
                port: 4000,
                base: "public/"
            }
        },
        server: {
            options: {
                port: 8000,
                base: "."
            }
        }
    };

    // Jasmine =====================================
    config.jasmine = {
        all: {
            src: "src/js/**/*.js",
            options: {
                version: "2.3.4",
                summary: true,
                specs: "specs/scripts/**/*-spec.js",
                host: "http://localhost:8000/"
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-css");
    grunt.loadNpmTasks("grunt-svgmin");

    grunt.registerTask("default", ["clean", "concat", "cssmin", "svgmin"]);
    grunt.registerTask("tests", ["default", "connect:server", "jasmine"]);
    grunt.registerTask("testsJasmine", ["connect:server", "jasmine"]);
    grunt.registerTask("server", ["default", "connect:manual"]);


};
