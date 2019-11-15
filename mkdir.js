/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  const map = {}
  const len = nums.length
  for(let i=0;i<len;i++) {
      const targetNum = target - nums[i]
      if(targetNum in map) return [map[targetNum], i]
      map[nums[i]] = i
  }
  console.log(map)
};

twoSum([2,7,4,8], 9)
 