// Purpose: Summarize the schema for Dynamic Content

import * as schema from '../schema.json';

const w1 = (n, parent, cb) => {
  if (typeof n !== 'object') {
    return cb(n, parent);
  } else {
    for (let k in n) {
      w1(n[k], k, cb);
    }
  }
};

const w2 = (n, cb) => {
  if (!typeof n === 'object') {
    cb(n);
  } else {
    Object
      .keys(n)
      .map((e, i, c) => {
        cb();
        walk(n[e], cb);
      });
  }
};

// Most popular types used in the Dynamic Content Schema
let types = w1(
  schema,
  {},
  function(val, parent) {
    if (parent === 'type') {
      console.log(val);
    }
  });
