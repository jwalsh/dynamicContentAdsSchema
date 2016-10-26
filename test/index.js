// This is the base schema provide that should be converted back into
// record types for use on the repl

import * as schema from '../schema.json';
// console.log(schema);

import {validate} from 'jsonschema';
// console.log(validate);

// Minimum ad to test the validation of required fields
var ads = [
  {
    ad: { // TODO: Verify why a wrapper namespace of 'ad' is needed
      id: '00000000000000',
      name: 'defrecord product 1',
      advertiser: 'defrecord',
      adUnits: [
        {
          id: 'adu1',
          name: 'defrecord adunit 1'
        }
      ],
      creativeComponents: [
        {
          id: 1,
          name: 'defrecord creativecomponent',
          assetType: 'html',
          adUnit: ['adu1'],
          componentType: 'displayURL', // TODO: spec doesn't note as required
          assets: [
            {
              id: 'asset1',
              name: 'defrecord asset',
              source: 'https://wal.sh/index.html',
              sourceType: 'URI',
              fallback: '1' // TODO: Confirm not boolean
            }
          ]

        }
      ]
    }
  }
];

console.log(validate(ads[0], schema));
