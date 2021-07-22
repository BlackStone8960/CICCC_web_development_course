const date = new Date();

module.exports.year = date.getFullYear();
module.exports.month = date.getMonth() + 1;
module.exports.day = date.getDate();