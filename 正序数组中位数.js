/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2); //基准的下标
    var pivot = arr.splice(pivotIndex, 1)[0]; // 把基准从数组分离出来
    var left = []; // 基准左边子集存放变量
    var right = []; // 基准右边子集存放变量
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
var findMedianSortedArrays = function (nums1, nums2) {
    let newList = [...nums1, ...nums2]
    let newListLength = newList.length
    let result = new quickSort(newList)
    let pivotIndex = Math.floor(result.length / 2)
    if (newListLength % 2 != 0) {
        return result[pivotIndex]
    } else {
        return (result[pivotIndex] + result[pivotIndex - 1]) / 2
    }
};