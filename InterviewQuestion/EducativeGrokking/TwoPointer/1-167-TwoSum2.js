const nums = [1, 3, 4, 5, 7, 11];
const target = 9;
function TwoSumTwo(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left != right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      return [left, right];
    }
  }
}

const result = TwoSumTwo(nums, target);
console.log(result);
