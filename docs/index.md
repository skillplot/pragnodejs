# Pragmatic nodejs Dev

Codebase for Pragmatic nodejs book from pragmatic python book series. An opinionated nodejs practical tutorials.


Credits: [CREDITS.md](CREDITS.md)


## Project Directory Structure

```bash
└── pragmatic-nodejs-dev
    ├── app
    │   ├── api
    │   ├── config
    │   ├── db
    │   ├── dnn
    │   │   └── gpuconfig
    │   ├── entities
    │   ├── routes
    │   ├── schemas
    │   ├── _site
    │   │   └── images
    │   ├── templates
    │   │   └── src
    │   ├── tests
    │   └── utils
    ├── data
    └── tests
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