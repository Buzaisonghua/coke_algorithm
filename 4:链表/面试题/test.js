/**
 * 求单链表中的有效节点个数
 */
let head = null; // 假设为链表的头节点
const getNodeLen = () => {
    let temp = head;
    let len = 0;
    while (temp != null) {
        temp = temp.next;
        len ++;
    }
    return len
}

/**
 * 查询单链表中的倒数第 k 个节点（新浪面试题）
 */
const getLastNode = (k) => {
    let temp = head;
    // 首先需要判断节点的有效个数，可以调用上面定义的方法
    if (k >= getLastNode || k <= 0) {
        throw new Error("下标越界异常");
    }
    getNode(getNodeLen() - 1 - k)
    
}
// 其次可以写一个方法获取指定下标的节点
const getNode = (n) => {
    let temp = head;
    for (let i = 0; i < n; i++) {
        temp = temp.next;
    }  
    return temp
}

/**
 * 链表的反转
 */
