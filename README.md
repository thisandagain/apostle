## apostle
#### Node.js API client for Apostle.io

[![Build Status](https://travis-ci.org/thisandagain/apostle.png)](https://travis-ci.org/thisandagain/apostle)

### Installation
```bash
npm install apostle
```

### Basic Use
```js
var apostle = require('apostle')('DOMAIN_KEY');

apostle({
    email: 'andrewsliwinski@acm.org',
    template: 'test-template',
    values: {
        name: 'Andrew',
        hello: 'world'
    }
}, function (err, response) {
    if (err) return;        // Something really bad happened
    console.dir(response); 
});
```

### Testing
```bash
npm test
```