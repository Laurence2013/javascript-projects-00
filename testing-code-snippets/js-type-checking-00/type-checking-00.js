function arrayCheck(data_00){
  return typeof data_00 === 'object' && data_00.constructor === Array;
}
function objectCheck00(data_00){
  return typeof data_00 === 'object';
}
function objectCheck01(data_00){
  return Object.prototype.toString.call(data_00) === '[object Object]';
}

module.exports = {
  arrCheck: arrayCheck,
  objCheck00: objectCheck00,
  objCheck01: objectCheck01
}
