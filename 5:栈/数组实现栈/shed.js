/**
 * JS数组实现栈
 * 栈是一个逻辑数据结构
 * 栈是是线性数据结构
 * 栈有先进后出的特点
 * 栈的操作有入栈(push)和出栈(pop)
 * 最先入栈的元素的位置被称为栈底
 * 最后进入栈的元素位置称为栈顶
 * 栈有栈内存泄漏的概念
 */
module.exports = class Shed {
    /**
     * 初始化一个栈
     * @param {指定栈的空间} options 
     */
    constructor (options) {
        this.arr = new Array();
        this.size = options;
    }
    /**
     * 进栈
     * @param {进栈的元素} data 
     */
    push (data) {
        if (this.arr.length === this.size) {
            throw new Error("栈内存泄漏");
        } else {
            this.arr.push(data)
        }
    }
    /**
     * 出栈操作
     */
    pop () {
        if (this.arr.length === 0) {
            throw new Error("栈为空")
        } else {
            this.arr.pop()
        }
    }
}