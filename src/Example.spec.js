/* global after, before, describe, it, require */

const expect = require('chai').expect;

// Tested Module
const ExampleModule = require('./Example.module');

describe('Example Module', () => {
  it('exists', () => {
    expect(ExampleModule).to.be.a('object');
  });
});
