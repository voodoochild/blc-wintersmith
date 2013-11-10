module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      build: {
        command: 'rm -rf build; wintersmith build; find build -name "*.DS_Store" -type f -delete'
      },

      publish: {
        command: 'scp -r build/* kw@mythlan.co.uk:/var/www/blacklionchest.co.uk'
      }
    }
  });

  // Modules
  grunt.loadNpmTasks('grunt-shell');

  // Tasks
  grunt.registerTask('build', 'shell:build');
  grunt.registerTask('deploy', 'shell:publish');
};
