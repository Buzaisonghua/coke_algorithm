/**
 * 个人感觉这个稀疏数组在前端的引用场景不大
 * 感觉应用场景在数据库的存储场景会用的比较多
 *  */ 

// 创建一个10*10的棋盘，也就是原始的二维数组
function chessArr (len) {
    let arr = new Array(len)
    for (let i = 0; i < arr.length; i++) {
        let col = new Array(len)
        for (let j = 0; j < col.length; j++) {
            col[j] = 0
        }
        arr[i] = col
    }
    return arr
}
let arr = chessArr(10)
arr[2][3] = 1
arr[5][6] = 2

// 将上述的二维数组，装换为稀疏数组，前端可以在数组中添加所以不必像java一样先获取数组的长度
let newArr = [[arr.length, arr[0].length, 0]]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] !== 0) {
            newArr.push([i, j, arr[i][j]])
        }
    }
}

// 将稀疏数组还原为二维数组
arr = chessArr(10)
for (let i = 1; i < newArr.length; i++) {
    arr[newArr[i][0]][newArr[i][1]] = newArr[i][2]
}
console.log(arr)