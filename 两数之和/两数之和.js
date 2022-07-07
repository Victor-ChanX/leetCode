//先声明了一个方法作为处理所有相加的结果
var sums = function (num1, otherNums) {
	let result = []
	for (x in otherNums) {
		let sum = num1 + otherNums[x]
		result.push(sum)
	}
	return result
}

var twoSum = function (nums, target) {
	//声明一个待返回结果的空数组
	let answer = []
	//根据给定的测试数组进行循环
	for (let i = 0; i < nums.length; i++) {
		//判断是否i到达边界
		if (i + 1 <= nums.length) {
			//调用方法获得一个请求结果的数组
			let result = sums(nums[i], nums.slice(i + 1))
			//利用数组方法判断结果里面是否有符合target一样的值，如果有则将下标取出返回
			if (result.includes(target)) {
				answer.push(i, result.indexOf(target) + i + 1)
				return answer
			}
		}
	}
}

twoSum([2, 7, 11, 15], 9)