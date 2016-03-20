module.exports = function( grunt ) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/target.min.js': ['target.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
}