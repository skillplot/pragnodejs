# Pragmatic Nodejs

This is the part of my `Pragmatic Python` book series. `Pragmatic` book series are opinionated practical mini projects, tutorials, development environment setup and project structure.

Mini projects are more the toy examples and can be thought of small tools that can be extended to fit into the production grade pipeline.


## Project Directory Structure

```bash
└── src
│   ├── app
│   │   ├── api
│   │   ├── config
│   │   ├── db
│   │   ├── dnn
│   │   │   └── gpuconfig
│   │   ├── entities
│   │   ├── routes
│   │   ├── schemas
│   │   ├── _site
│   │   │   └── images
│   │   ├── templates
│   │   │   └── src
│   │   ├── tests
│   │   └── utils
│   └── data
└──tests
    └── config
```


## Examples


**Servers**

1. Hello World
  * http://127.0.0.1:8000
  * http://127.0.0.1:8000/hello/blah
  * http://127.0.0.1:8000/hello/dummy
  * http://127.0.0.1:8000/hello/dummy/age/99
  * http://127.0.0.1:8000/files//some/path/type/string
  * http://127.0.0.1:8000/dnnarch
  * http://127.0.0.1:8000/dnnarch?skip=3&limit=3&debug=true
    * debug = True/true/on/yes/1 or False/false/off/no/0
  ```bash
  bash start-hello.sh
  ```
4. Streaming - video, images, files, webcam
  * http://127.0.0.1:8000
  * http://127.0.0.1:8000/video
  * http://127.0.0.1:8000/cam
  ```bash
  bash start-stream.sh
  ```


## References

* https://www.npmjs.com/package/opencv4nodejs#how-to-install
* https://github.com/narenltk/opencv4nodejs_webcam/blob/main/server.js
* https://medium.com/swlh/video-streaming-using-opencv4nodejs-with-node-js-express-and-socket-io-3806abb049a
* https://stackoverflow.com/questions/35604730/nodejs-express-error-failed-to-lookup-view-error-in-views-directory
