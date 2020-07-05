const Node = require('./Node.js')
/**
 * JS实现循环链表的增删改查
 */

module.exports = class NodeMain{
    constructor (options) {
        this.node = new Node({...options})
        this.node.next = this.node;
        this.node.prev = this.node;
        this.head = this.node;
        this.last = this.node;
        this.size = 1;
    }
    /**
     * 查看链表的全部元素
     * 方便调试
     */
    show () {
        let temp = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(`${temp.no} _____ ${temp.name}`)
            temp = temp.next;
        }
    }
    /**
     * 获取链表的对应节点
     * @param {获取元素的节点} index 
     */
    getNode (index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error("下标越界异常")
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    /**
     * 链表新增元素
     * @param {添加Node节点的no值} no 
     * @param {添加Node节点的name值} name 
     * @param {插入链表的位置} index 
     */
    insert(no, name, index) {
        if (index < 0 || index > this.size) {
            throw new Error("下标越界异常");
        }
        const insertNode = new Node({no, name})
        if (this.size === 0) {
            // 链表为空
            insertNode.next = insertNode;
            insertNode.prev = insertNode;
            this.head = insertNode;
            this.last = insertNode;
        } else if (index === 0) {
            // 链表头部插入
            insertNode.next = this.head;
            insertNode.prev = this.last;
            this.last.next = insertNode;
            this.head.prev = insertNode;
            this.head = insertNode;
        } else if (index === this.size - 1) {
            // 链表尾部插入
            insertNode.next = this.head;
            insertNode.prev = this.last;
            this.last.next = insertNode;
            this.head.prev = insertNode;
            this.last = insertNode;
        } else {
            // 中间插入
            let prevNode = this.getNode(index - 1);
            let nextNode = prevNode.next;
            insertNode.next = nextNode;
            insertNode.prev = prevNode;
            prevNode.next = insertNode;
            nextNode.prev = insertNode;
        }
        this.size ++;
    }

    /**
     * 删除链表元素
     * @param {指定删除链表元素的下标} index 
     */
    remove (index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error("下标越界异常");
        }
        let removeNode = null;
        if (index === 0) {
            // 删除头部节点
            removeNode = this.head
            this.head = this.head.next;
            this.head.prev = this.last;
            this.last.next = this.head
        } else if (index === this.size - 1) {
            // 删除尾节点
            removeNode = this.last;
            let prevNode = this.getNode(index - 1);
            prevNode.next = this.head;
            this.head.prev = prevNode;
        } else {
            // 删除中间节点
            let prevNode = this.getNode(index - 1);
            let nextNode = prevNode.next.next;
            removeNode = prevNode;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.size --;
        return removeNode;
    }
    /**
     * 修改指定的下标节点
     * @param {修改后的no}} no 
     * @param {修改后的name} name 
     * @param {修改节点的位置} index 
     */
    update (no, name, index) {
        let updateNode = this.getNode(index);
        updateNode.no = no;
        updateNode.name = name;
    }
}