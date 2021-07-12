//import express from 'express'
//import { get, listen } from "express";
const express = require('express');
const app = express();
const fs = require('fs');

//import { readdir } from 'fs';
 
app.get('/', function (req, res) {
    fs.readdir("C:/Users/deept/OneDrive/Desktop",(err,files) => {
        if (err) throw err;
        
        files.forEach(file => {
            console.log(file);
            if (file.isFile())
            res.send('<image src="./file" height=10px width = 10px>'+file);
            else
            res.send('<image src="./folder" height=10px width = 10px>'+file);

            
        });
    })
  
})
 
app.listen(3000);