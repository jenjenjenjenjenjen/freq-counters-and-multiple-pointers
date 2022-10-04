// add whatever parameters you deem necessary
function makeFreqCounter(str) {
    const freqCounter = {};
    for(let char of str){
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }
    return freqCounter;
}
function constructNote(msg, letters) {
    let msgFreq = makeFreqCounter(msg);
    let letterFreq = makeFreqCounter(letters);
    for(let el in msgFreq) {
        if(msgFreq[el] !== letterFreq[el]) return false;
    }
    return true;
}
