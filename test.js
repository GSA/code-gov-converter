'use strict';
let { expect } = require('chai');
let { readFileSync } = require('fs');
let { toCodeDotGov } = require("./index.js");

describe('Conversion', function() {

  describe('Parsing publiccode.yml', function() {
    it('should parse minimal example', function(done) {
      this.timeout(3000)
      const text = readFileSync('./examples/publiccode.minimal.yml', 'utf-8');
      const repo = toCodeDotGov(text);
      expect(repo.name).to.equal('Medusa');
      expect(repo.permissions.licenses[0].name).to.equal('AGPL-3.0-or-later');
    })
  })
})