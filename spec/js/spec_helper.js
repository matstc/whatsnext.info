requirejs = require('requirejs');
requirejs.config({ baseUrl: 'public', paths: {'jquery': 'dommed-jquery-2.1.0'}, nodeRequire: require });
assert = requirejs('assert-plus');
