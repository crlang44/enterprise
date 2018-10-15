#!/usr/bin/env node
/*
 * Detects established custom build test manifests, and provides the list of
 * required tests to another script.
 */

const fs = require('fs');
const path = require('path');

const types = ['functional', 'e2e'];
const EMPTY = [];

const DEFAULT_E2E_SPECS = [
  'behaviors/**/*.e2e-spec.js',
  'components/**/*.e2e-spec.js',
  'kitchen-sink.e2e-spec.js'
];

const DEFAULT_FUNC_SPECS = [
  'behaviors/**/*.func-spec.js',
  'components/**/*.func-spec.js'
];

function getCustomSpecs(type) {
  let fileName = 'tests-functional.txt';
  if (type === 'e2e') {
    fileName = 'tests-e2e.txt';
  }

  const filePath = path.resolve(__dirname, '..', '..', 'dist', 'tests', fileName);

  // If there is no custom specs file,
  const specs = fs.readFileSync(filePath, 'utf8');
  if (!specs || !specs.length) {
    if (type === 'e2e') {
      return DEFAULT_E2E_SPECS;
    }
    return DEFAULT_FUNC_SPECS;
  }

  return specs.split('\n').filter(el => el !== null && el !== '');
}

module.exports = function (testType, envSpecs) {
  if (envSpecs) {
    return envSpecs.split(',');
  }

  if (!testType || types.indexOf(testType) === -1) {
    return EMPTY;
  }

  debugger;

  return getCustomSpecs(testType);
};
