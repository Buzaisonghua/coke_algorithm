/*
* 在js中由于数组方法有push和shift方法所以实现队列的结构比较简单
* 使用push,uhift方法实现，以及不使用该数组方法实现
*/

class JsArrayQueue {
    // 先来一个使用js中arr内置push，shift方法    
    constructor() {
        this.arr = new Array()
    }
    // 查看队列信息
    showQueue () {
        return this.arr;
    }
    // 查看队列是否为空
    isEmpty () {
        return this.arr.length === 0
    }
    // 进队
    addQueue (i) {
        this.arr.push(i)
    }
    // 出队
    getQueue () {
        return this.arr.shift()
    }
}

class ArrayQueue {
    /**
     * 这里实现一个环形队列
     * 由于JS中的数组，可以无限扩容，所以这里需要传入一个参数去给用户做限制数组的大小
     * 这里我有一个疑惑啊
     * 并且百度教程是错的，老师的也是
     * 关于制定数组长度以及
     */
    constructor (arrMaxSize) {
        this.maxSize = arrMaxSize;
        this.front = 0;
        this.rear = 0;
        this.arr = new Array(this.maxSize);
    }
    // 查看队列是否为空
    isEmpty () {
        return this.front === this.rear
    }
    // 查看队列是否已满
    isFull () {
        return (this.front + 1) % this.arr.length === this.rear
    }
    // 进队
    addQueue (n) {
        this.arr[this.rear] = n
        this.rear = (this.rear + 1) % this.maxSize
    }
    getQueue () {
        this.front = (this.front + 1) % this.maxSize
    }
    show () {
        for (let i = this.front; i != this.rear; i = (i+1) % this.arr.length) {
            console.log(this.arr[i])
        }
    }
}
let arr = new ArrayQueue(2)
arr.addQueue(1);
arr.addQueue(2);
arr.getQueue()
arr.show()
// arr.addQueue(1);
// arr.addQueue(2);
// arr.addQueue(3)
