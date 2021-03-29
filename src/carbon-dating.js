const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.69314718056;
module.exports = function dateSample(sampleActivity) {
    if (sampleActivity > MODERN_ACTIVITY) return false;
    if (!arguments.length) return false;
    if (typeof(sampleActivity) === 'string' && validateParameter(sampleActivity)) {
        formulaCalc(sampleActivity)
    } else { return false }

    return arguments.length ? (typeof(sampleActivity) === 'string' && validateParameter(sampleActivity) ? formulaCalc(sampleActivity) : false) : false;
};

function validateParameter(param) {
    let str = param;
    const regex = '/^\d+$/'
    return str.match(regex) ? true : false;
}

function formulaCalc(sample) {
    let k = LN2 / HALF_LIFE_PERIOD;
    let t = (Math.log(MODERN_ACTIVITY / sample)) / k;
    return t;
}