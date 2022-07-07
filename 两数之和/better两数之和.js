var twoSum = function (nums, target) {
	//构筑了一个map
	const map = new Map()
	//根据给定的测试数组进行遍历
	for (let i = 0, len = nums.length; i < len; i++) {
		//为了减少遍历次数增加效率，如果此时map中已经有了target减去当前队列的num[i]所匹配的结果，直接返回
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i]
		}
		//如果没有则继续将二维数组组装到map里面
		map.set(nums[i], i)
	}
	return []
}