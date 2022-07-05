var addTwoNumbers = function (l1, l2) {
    let l1Length = l1.length
    let l2Length = l2.length
    let minTarget = Math.min(l1Length, l2Length)
    let maxTarget = Math.max(l1Length, l2Length)
    let target = l1Length >= l2Length ? l1 : l2
    let remainder = 0
    let integer = 0
    let result = []
    for (let i = 0; i < maxTarget; i++) {
        if (i <= minTarget) {
            if (l1[i] + l2[i] + integer >= 10) {
                remainder = (l1[i] + l2[i] + integer) % 10
                integer = parseInt((l1[i] + l2[i]) / 10)
                result.push(remainder)
            } else {
                result.push(l1[i] + l2[i] + integer)
            }
        } else {
            if (target[i] + integer >= 10) {
                remainder = (target[i] + integer) % 10
                integer = parseInt((target[i]) / 10)
                result.push(remainder)
            } else {
                result.push(target[i] + integer)
            }
        }
    }
    console.log(result)
    return result
};
addTwoNumbers([1,5,2], [4,5,6])