var addTwoNumbers = function (l1, l2) {
    //l1和l2都是单链表的结构，需要进行重造单链表，声明新链表初始化的值以及空值储存每一步递归的结果
    //新链表
    let result = null
    //中转储存
    let transfer = null
    //余数
    let remainder = 0
    //当l1或者l2不是null时，因为不断的顺着链表下查最后会到null,如果都是null的时候说明查询完毕
    while (l1 || l2) {
        //当l1或者l2查询到底的时候默认补0
        let newL1 = l1 ? l1.val : 0
        let newL2 = l2 ? l2.val : 0
        //链表同位置相加，加上余数
        let answer = newL1 + newL2 + remainder
        if (!result) {
            //初始值
            result = transfer = new ListNode(answer % 10)
        } else {
            //除开初始值后进行计算
            transfer.next = new ListNode(answer % 10)
            transfer = transfer.next
        }
        remainder = parseInt(answer / 10)
        console.log(remainder)
        //然后进行下一步的链表查找
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
        console.log(result)
    }
    //如果最后一步后还是有余数没有归零
    if (remainder > 0){
        transfer.next = new ListNode(remainder)
    }
    return result
};