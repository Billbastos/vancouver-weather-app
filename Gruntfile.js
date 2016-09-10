module.exports = function(grunt) {

  var config = {},
      distPath = "dist/",
      publicJsPath = "public/js/",
      publicCssPath = "public/css/",
      publicImgPath = "public/images/";

  // Clean Folder ================================
  config.clean = [distPath, publicJsPath, publicCssPath, publicImgPath];

  // Concat ================================
  config.concat = {
    utils: {
      src: [
        "src/js/model/FiveDaysThreeHoursDao.js",
        "src/js/dao/FiveDaysThreeHoursModel.js",
        "src/js/services/FiveDaysThreeHoursService.js",
      ],
      dest: distPath + "app.js"
    },
    css: {
      src: "src/css/*.css",
      dest: distPath + "app.css"
    }

  };

  // Minification ================================
  config.uglify = {
    options: {
      banner: "/*! v<%= grunt.option('versionNumber') %> - <%= grunt.template.today('yyyy-mm-dd') %> */ ",
      mangle : true,
      compress: true,
      report: "gzip"
    },
    target: {
      src: distPath + "*.js",
      expand: true,
      ext: ".min.js",
      dest: publicJsPath
    }
  };

  config.cssmin = {
    css:{
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

  // JSHint =====================================
  config.jshint = {};
  config.jshint.src = {
    options: {
      laxcomma: true,
      ignores: ["src/**/jquery*.js"]
    },
    files: {
      dist: ["src/**/*.js"]
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
        helpers: "specs/helpers/**/*.js",
        host : "http://localhost:8000/"
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-css");
  grunt.loadNpmTasks("grunt-svgmin");

  grunt.registerTask("default", ["clean", "jshint", "concat", "uglify", "cssmin", "svgmin"]);
  grunt.registerTask("tests", ["default", "connect:server", "jasmine"]);
  grunt.registerTask("testsJasmine", ["connect:server", "jasmine"]);
};
