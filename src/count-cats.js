const CustomError = require("../extensions/custom-error");



module.exports = function countCats(arr) {
    let catsCount = 0
    arr.forEach(el => {
        el.forEach(item => {
            if (item === '^^') {
                catsCount++
            }
        })
    })
    return catsCount
};