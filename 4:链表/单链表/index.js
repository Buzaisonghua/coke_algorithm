/**
 * 用JS实现一个单链表的增删改查
 */

 const Node = require('./NodeMain.js')

 const node = new Node(0);
 node.insert(1, 1);
 node.insert(2, 2);
 node.insert(3, 3);
 node.insert(4, 4);

//  console.log(node.getNodeLen())
//  node.remove(0);
//  node.remove(3);
//  node.remove(1)
//  node.remove(0);
//  node.remove(0)
//  node.insert(0, 0);
//  node.insert(0, 1)
//  node.insert(1, 1)
 node.show()
 
 console.log("________");
// node.getResove()
node.push(5);
node.pop();
node.show();
//  console.log(node.getLastNode(4));

//  let temp = node;
// while(temp.next !== null) {
//     console.log(temp);
//     temp = temp.next;
// }
// console.log(node.node.next);
