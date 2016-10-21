/*
 * git-changelog
 * https://github.com/rafinskipg/git-changelog
 *
 * Copyright (c) 2013 rafinskipg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'test/**/*.spec.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [
        'output/tag1.md',
        'EXTENDEDCHANGELOG.md'
      ],
    },

    // Configuration to be run (and then tested).
    git_changelog: {
      minimal: {
        options: {
          app_name : 'Git changelog',
          logo : 'https://github.com/rafinskipg/git-changelog/raw/master/images/git-changelog-logo.png',
          intro : 'Git changelog is a utility tool for generating changelogs. It is free and opensource. :)'
        }
      },
      tag1: {
        options: {
          app_name : 'Since tag 1 changelog',
          file: 'output/tag1.md',
          logo : 'https://github.com/rafinskipg/git-changelog/raw/master/images/git-changelog-logo.png',
          version : 'squeezy potatoe',
          tag: 'v0.0.1',
          debug: true
        }
      },
      extended: {
        options: {
          app_name : 'Git changelog extended',
          logo : 'https://github.com/rafinskipg/git-changelog/raw/master/images/git-changelog-logo.png',
          intro : 'Git changelog is a utility tool for generating changelogs. It is free and opensource. :)',
          repo_url: 'https://github.com/rafinskipg/git-changelog',
          tag: false,
          debug: true,
          file : 'EXTENDEDCHANGELOG.md',
          grep_commits: '^fix|^feat|^docs|^refactor|^chore|BREAKING'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          //captureFile: 'tests/results.txt', // Optionally capture the reporter output to a file
          quiet: false // Optionally suppress output to standard out (defaults to false)
        },
        src: ['test/**/*.spec.js']
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('pre-test', ['clean', 'git_changelog_jira_tasks']);
  // grunt.registerTask('test', ['clean', 'git_changelog_jira_tasks', 'mochaTest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'pre-test']);

  // By default, lint and run all tests.
  grunt.registerTask('ch', [ 'git_changelog_jira_tasks']);

};
