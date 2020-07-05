package 链表.双向链表;

public class NodeList {
    public static void main(String[] args) {
        NodeMain node = new NodeMain(0, "王博");
        node.insert(1, "王心猪", 0);
        node.insert(2, "哈哈哈", 2);
        node.insert(3, "lalla", 1);
        node.remove(0);
        node.remove(2);
        node.insert(5, "嘻嘻嘻", 1);
        node.remove(1);
        node.remove(0);
        node.remove(0);
//        node.remove(0);
        node.insert(1, "gagagag", 0);
        node.show();
    }
}

/**
 * 循环链表的实现
 * head 头节点
 * last 尾节点
 */
class NodeMain {
    private Node head;
    private Node last;
    private int size = 0;
    NodeMain (int no, String name) {
        Node node = new Node(no, name);
        head = node;
        head.next = node;
        head.prev = node;
        last = node;
        last.next = node;
        last.prev = node;
        this.size++;
    }
    public Node getNext() {
        return head.next;
    }
    /**
     * 查看节点，方便调试
     */
    public void show () {
        Node temp = head;
        for (int i = 0; i < size; i++) {
            System.out.println(temp.no + " ____  " +temp.name);
            temp = temp.next;
        }
    }
    /**
     * 查询链表指定节点
     * @param index 查询节点的下标
     * @return
     */
    public Node get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("下标越界异常");
        }
        Node temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    /**
     * 循环链表中插入节点
     * @param no Node节点的no
     * @param name Node节点的name
     * @param index Node节点插入的位置
     */
    public void insert(int no, String name, int index) {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("下标越界异常");
        }
        Node insertNode = new Node(no, name);
        if (size == 0) {
            // 链表为空插入
            head = insertNode;
            last = insertNode;
            head.next = insertNode;
            head.prev = insertNode;
            last.next = insertNode;
            last.prev = insertNode;
        } else if (index == 0) {
            // 链表头部插入
            insertNode.next = head;
            insertNode.prev = last;
            head.prev = insertNode;
            last.next = insertNode;
            head = insertNode;
        } else if (index == size) {
            // 链表尾部插入
            insertNode.next = head;
            insertNode.prev = last;
            last.next = insertNode;
            head.prev = insertNode;
            last = insertNode;
        } else {
            // 中间插入
            Node prevNode = get(index - 1);
            Node nextNode = prevNode.next;
            insertNode.prev = prevNode;
            insertNode.next = nextNode;
            prevNode.next = insertNode;
            nextNode.prev = insertNode;
        }
        size++;
    }

    /**
     * 删除链表节点
     * @param index 删除节点的下标
     * @return 返回被删除的元素
     */
    public Node remove(int index) {
        if (index < 0 || index > size - 1 ) {
            throw new IndexOutOfBoundsException("下标越界异常");
        }
        Node removeNode = null;
        if (index == 0) {
            // 删除头部节点
            removeNode = head;
            Node nextNode = head.next;
            last.prev = nextNode;
            nextNode.prev = last;
            head = nextNode;
        } else if (index == size) {
            // 删除尾部节点
            removeNode = last;
            Node prevNode = last.prev;
            prevNode.next = head;
            head.prev = prevNode;
            last = prevNode;
        } else {
            // 删除中间元素
            Node prevNode = get(index - 1);
            Node nextNode = prevNode.next.next;
            removeNode = prevNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        size --;
        return removeNode;
    }
}

/**
 * 根节点的创建
 * next 下一个节点
 * prev 上一个节点
 */
class Node {
    int no;
    String name;
    Node next;
    Node prev;
    Node (int no, String name) {
        this.no = no;
        this.name = name;
    }
}