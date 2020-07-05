package 链表.单链表;

public class SingleLinkedList {
    public static void main(String[] args) {
        newNode node = new newNode();
        try {
            node.insert(0, 0);
            node.insert(1,1);
            node.insert(2,2);
            node.insert(3,3);
            node.insert(4,4);
            node.remove(0);
            node.remove(3);
            node.remove(1);
            node.show();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class newNode {
    // 链表头节点指针
    private Node head;
    // 链表尾节点指针
    private Node last;
    // 链表的实际长度
    private int size = 0;

    /**
     * 获取指定节点元素
     * @param index 获取节点的下标
     */
    public Node get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("下标越界");
        }
        Node temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    /**
     * 插入元素
     * @param data 插入元素的data
     * @param index 插入的位置
     * @throws Exception
     */
    public void insert(int data, int index) throws Exception{
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("下标越界");
        }
        Node insertNode = new Node(data);
        if (size == 0) {
            head = insertNode;
            last = insertNode;
        } else if (index == size) {
            last.next = insertNode;
            last = insertNode;
        } else if (index == 0) {
            insertNode.next = head;
            head = insertNode;
        } else {
            Node prevNode = get(index - 1);
            insertNode.next = prevNode.next;
            prevNode.next = prevNode;
        }
        size ++;
    }

    /**
     * 删除元素
     * @param index 删除元素的位置
     */
    public Node remove (int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("下标越界");
        }
        Node removeNode = null;
        if (index == 0) {
            removeNode = head;
            head = head.next;
        } else if (index == size -1) {
            removeNode = last;
            Node prevNode = get(index - 1);
            prevNode.next = null;
        } else {
            Node prevNode = get(index - 1);
            Node nextNode = prevNode.next.next;
            removeNode = prevNode.next;
            prevNode.next = nextNode;
        }
        size --;
        return removeNode;
    }

    public void show () {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }
}

class Node  {
    int data;
    Node next;
    Node (int i) {
        this.data = i;
    }
}