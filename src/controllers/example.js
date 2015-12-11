'use strict';

module.exports = () => {
  return ['get', [{ path: '/', version: '1.0.0' }, (req, res) => {
    res.send();
  }]];
};
