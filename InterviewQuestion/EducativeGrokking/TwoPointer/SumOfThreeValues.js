const target = 10;
const nums = [3, 7, 1, 2, 8, 4, 5];

function SumOfThreeValue(nums, target) {
  nums = nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let triple = nums[i] + nums[low] + nums[high];

      if (triple == target) {
        return true;
      } else if (triple < target) low++;
      else high--;
    }
  }

  return false;
}

const result = SumOfThreeValue(nums, target);
console.log(result);

//we pick element and apply two sum and repeat this process
//because its sorted array we can apply two sum two algo there
