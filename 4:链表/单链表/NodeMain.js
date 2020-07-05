const Node = require('./Node.js')
/**
 * node 初始化函数创建的node节点
 * size 指定链表的长度
 * head 指定链表的头部
 * last 指定链表的尾部
 */
module.exports = class NodeMain {
    constructor (options) {
        this.node = new Node(options);
        this.size = 1;
        this.head = this.node;
        this.last = this.node;
    }
    /**
     * 方便调试
     * 查看全部的data
    */
    show () {
        let temp = this.head;
         while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        } 
    }
    /**
     * 查看链表元素
     * index 查看链表元素的下标
     */
    get (index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error("下标越界异常");
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp
    }
    /**
     * 添加元素
     * data 添加的链表的data的值
     * index 添加的为位置
     */
    insert (data, index) {
        if (index < 0 || index > this.size) {
            throw new Error("下标越界异常");
        }
        const insertNode = new Node(data);
        if (this.size === 0) {
            // 链表为空时
            this.head = insertNode;
            this.last = insertNode;
        } else if (index === 0) {
            // 链表头部插入元素
            insertNode.next = this.head;
            this.head = insertNode;
        } else if (index === this.size) {
            this.last.next = insertNode;
            this.last = insertNode;
        } else {
            // 中间插入
            const prevNode = this.get(index - 1);
            insertNode.next = prevNode.next;
            prevNode.next = insertNode;
        }
        this.size ++;
    }
    /**
     * 删除元素
     * index 删除元素的下标
     */
    remove (index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error("下标越界");
        }
        let removeNode = null;
        if (index === 0) {
            this.head = this.head.next;
        } else if (index === this.size - 1) {
            let prevNode = this.get(index - 1);
            removeNode = prevNode.next;
            prevNode.next = null;
            this.last = prevNode;
        } else {
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next.next;
            removeNode = prevNode.next;
            prevNode.next = nextNode;
        }
        this.size --;
        return removeNode
    }
    /**
     * 修改链表节点
     * data 修改后的node的data
     * index 修改的位置
     */
    update (data, index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error("下标越界");
        }
        // const updateNode = new Node(data);
        let updateNode = this.get(index)
        updateNode.data = data;
    }
    // 查看节点的有效个数
    getNodeLen () {
        let temp = this.head;
        let len = 0;
        while (temp != null) {
            temp = temp.next;
            len ++;
        }
        return len
    }
    // 获取指定的倒数第几个节点
    getLastNode (k) {
        // 首先需要判断节点的有效个数，可以调用上面定义的方法
        if (k >= this.getNodeLen()) {
            throw new Error("链表没有这么多节点");
        }
        return this.get(this.getNodeLen() - 1 - k)
    }
    // 链表的翻转
    getResove () {
        let temp = this.head;
        
        if (temp === null) {
            return null;
        } else if (temp.next == null) {
            return temp;
        } else {
            let list = null;
            while (temp !== null) {
                let newList = JSON.parse(JSON.stringify(temp));
                newList.next = list;
                list = newList;
                temp = temp.next;
            }
            this.head = list
        }
    }
    /**
     * 从尾到头打印链表（百度）
     */
    // 1： 反向遍历
    getFor () {
        this.getResove()
        let temp = this.head;
        while (temp !== null) {
            console.log(temp)
            temp = temp.next;
        }
    }
    // 2：压栈
    push (data) {
        this.insert(data, this.size)
    }
    pop () {
        this.remove(this.size - 1);
    }
}