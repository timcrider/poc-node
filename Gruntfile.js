module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'lib/*.js', 'tests/test-*.js']
		},
		nodeunit: {
			all: ['tests/test-*.js']
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['test']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['jshint', 'nodeunit']);
	grunt.registerTask('default', ['test', 'watch']);
};

