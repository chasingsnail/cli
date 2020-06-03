#!/usr/bin/env node

// const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const { program } = require('commander')
const inquirer = require('inquirer')

program
  .arguments('<dir>').description('input a directory')
  .action(dir => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'framework',
        message: 'which framework do you like',
        choices: [
          'react',
          'vue'
        ]
      }
    ])
    .then(ans => {
      console.log('result', ans, dir);
      const fullDir = path.resolve(process.cwd(), dir)
      console.log('fullDir is', fullDir);
      const command = `git clone https://github.com/loatheb/${ans.framework}-boilerplate.git ${fullDir}`
      childProcess.execSync(command)
    })
  })

program.parse(process.argv)
