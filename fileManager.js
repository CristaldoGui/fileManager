const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs');
const path = require('path');

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve(`Directory '${dirPath}' created successfully`);
            }
        });
    })
}

function createFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err);
            } else {
                resolve(`File '${filePath}' created successfully`);
            }
        });
    });
}

function listFiles(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if(err) {
                reject(err);
            } else {
                resolve(files);
            }
        }) 
    })
}


function readFiles(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8" , (err, data) => {
            if(err) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    })
}


function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(error);
            } else {
                resolve('File written successfully!');
            }
        })
    })
}


function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err) {
                reject(error);
            } else {
                resolve('File deleted successfully!');
            }
        })
    })
}

function createPath(currentPath, fileName) {
    return new Promise((resolve, reject) => {
       const newPath = path.join(currentPath, fileName, (err) => {
            if(err) {
                reject(error);
            } else {
                resolve(newPath);
            }
       });
    })
}

module.exports = {createDirectory, createFile, listFiles, readFiles, writeFile, deleteFile, createPath};