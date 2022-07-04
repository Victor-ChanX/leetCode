var sums = function (num1, otherNums) {
    let result = []
    for (x in otherNums) {
        let sum = num1 + otherNums[x]
        result.push(sum)
    }
    return result
}

var twoSum = function (nums, target) {
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 <= nums.length) {
            let result = sums(nums[i], nums.slice(i + 1))
            console.log(i, result.indexOf(target) + i + 1, 'tesdt')
            if (result.includes(target)) {
                answer.push(i, result.indexOf(target) + i + 1)
                return answer
            }
        }
    }
}

twoSum([2, 7, 11, 15], 9)