const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(memb) {

    if (Array.isArray(memb)) {
        let arr = memb.filter(elem => typeof(elem) === 'string')
        arr = arr.map(el => el.trim().charAt(0).toUpperCase());
        return arr.sort().join('')
    } else {
        return false;
    }
};