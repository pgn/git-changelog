/*
 * git-changelog
 * https://github.com/rafinskipg/git-changelog
 *
 * Copyright (c) 2013 rafinskipg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  
  //Separated Logic in other file 
  var git_changelog = require('./git_changelog_generate');

  var defaults = require('./defaults');

  grunt.registerMultiTask('git_changelog_jira_tasks', 'A git changelog based on ANGULAR JS commit standards', function() {

    var done = this.async();
    // Options object 
    var options = this.options(defaults);

    git_changelog.generate(options).then(function(){
      done();
    });

  });

};
