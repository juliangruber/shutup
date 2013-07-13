module.exports = shutup;

function shutup (ee) {
  ee.setMaxListeners(Infinity);
  return ee;
}
