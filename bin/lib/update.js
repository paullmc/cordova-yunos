/**
 * Copyright (C) 2010-2017 Alibaba Group Holding Limited
 */

/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/

var Q      = require('q'),
    create = require('./create'),
    fs     = require('fs'),
    shell = require('shelljs');

module.exports.help = function () {
    console.log('WARNING : Make sure to back up your project before updating!');
    console.log('Usage: update PathToProject ');
    console.log('    PathToProject : The path the project you would like to update.');
    console.log('examples:');
    console.log('    update C:\\Users\\anonymous\\Desktop\\MyProject');
};

module.exports.run = function (argv) {
    var projectPath = argv[2];
    if (!fs.existsSync(projectPath)) {
        // if specified project path is not valid then reject promise
        Q.reject("YunOS platform does not exist here: " + projectPath);
    }
    return Q().then(function () {
        create.update(projectPath);
    });
};
