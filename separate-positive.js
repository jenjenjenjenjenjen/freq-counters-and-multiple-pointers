// add whatever parameters you deem necessary
function separatePositive(nums) {
    let o = nums.reduce(function(r, e) {
        e < 0 ? r.n.push(e) : r.p.push(e), r
    }, {p: [], n: []});
    return [...o.n, ...o.p]
}
