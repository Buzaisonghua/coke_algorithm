const Node = require('./NodeMain.js')

const node = new Node({no: 0, name: '吴彦祖'});
node.insert(1, "哈哈哈", 1);
node.insert(2, "啦啦啦啦", 2)
node.insert(3, "巴拉巴拉", 3);
node.remove(0);
node.remove(2)
node.insert(3, "你个猪", 2);
node.remove(1);
node.update(0, "想哭哎", 0);
node.show();
// console.log(node.getNode(0));
