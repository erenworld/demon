# makenode 
nodemon from scratch

nodemon is a tool that helps develop NodeJs based applications by automatically restarting the node application when file changes in the directory are detected. We can simply install it globally and use it throughout our system without making any additional changes to the code.

1. We should be able to run any JS file using makenode <filename> command
2. Automatically restart the node application when changes are detected in files
3. Manually restart the server when user enters make

## How it works internally?
It will create a node child process for the given file and keep eyes on the files in the repo. 
If new changes are detected, just kill the child process and again create a new process.

## What is a CLI ?
A CLI tool? CLI stands for ‘command line application’. It helps us run any command on the terminal which will do some magic with our system. For example - to run any JavaScript file NodeJs provides us with node CLI. 
