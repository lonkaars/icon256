# icon256

> This package only works on Windows

![npm](https://img.shields.io/npm/v/icon256)

## What is this

This is a module that can extract 256x256 icon from a file/executable, as a base64 png.


## Requirements

- Install c# compiler from [Visual Studio Installer](https://visualstudio.microsoft.com/downloads/)

## How to use

Check if you have csc installed correctly by opening cmd and typing `csc`  
If csc is installed correctly, you should see something like:

```
Microsoft (R) Visual C# Compiler version blah blah (something)
Copyright (C) Microsoft Corporation. All rights reserved.

warning CS2008: No source files specified.
error CS1562: Outputs without source must have the /out option specified
```

Then


### With callback

```js
var icon256 = require('icon256');

icon256.extractIcon("path/to/file", (data) => {
    // do something with data
    // data is base64 png

    // This is an example to output to a file
    var fs = require('fs');
    fs.writeFileSync('./out.png', data, 'base64')
})
```


### Async 😎

```js
var icon256 = require('icon256');

// async lambda function to use async/await
(async () => {
    var data = await icon256.extractIconAsync("path/to/file");

    // do something with data
})()
```
or
```js
var icon256 = require('icon256');

icon256.extractIconAsync("path/to/file").then(data => {
    // do something with data
})
```
