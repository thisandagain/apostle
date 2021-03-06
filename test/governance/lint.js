require('hint-hint')(__dirname + '/../../lib/*.js', {
    "bitwise": true,
    "devel": true,
    "eqeqeq": true,
    "immed": true,
    "latedef": true,
    "maxdepth": 2,
    "maxparams": 4,
    "newcap": true,
    "noarg": true,
    "node": true,
    "proto": true,
    "quotmark": "single",
    "undef": true,
    "unused": true,
    "maxlen": 80
});