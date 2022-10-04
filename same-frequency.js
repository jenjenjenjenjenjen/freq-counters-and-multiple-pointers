// add whatever parameters you deem necessary
function makeFreqCounter(num) {
    let freqCounter = {};
    for(let n of String(num)) {
        freqCounter[n] = (freqCounter[n] + 1) || 1;
    }
    return freqCounter;
}
function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false;
    let num1Freq = makeFreqCounter(num1);
    let num2Freq = makeFreqCounter(num2);
    for(let el in num1Freq) {
        if(num1Freq[el] !== num2Freq[el]) return false;
    }
    return true;
}
