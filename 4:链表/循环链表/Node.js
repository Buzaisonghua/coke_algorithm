/**
 * 循环链表中的Node节点
 */
module.exports = class Node {
    constructor (options) {
        this.no = options.no;
        this.name = options.name;
        this.next = null;
        this.prev = null;
        
    }
}