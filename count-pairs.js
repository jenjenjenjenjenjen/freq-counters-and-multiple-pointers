// add whatever parameters you deem necessary
function countPairs(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let matches = 0;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            matches++;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return matches;
}
