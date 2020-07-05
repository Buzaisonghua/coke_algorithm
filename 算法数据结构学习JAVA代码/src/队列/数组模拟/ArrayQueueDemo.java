package 队列.数组模拟;

import java.util.Scanner;

public class ArrayQueueDemo {
    public static void main(String[] args) {
        ArrayQueue arrayQueue = new ArrayQueue(3);
        char key = ' '; // 接受用户的字符串输入
        Scanner sc = new Scanner(System.in);
        boolean loop = true;
        while (loop) {
            System.out.println("s(show):显示队列");
            System.out.println("e(exit):退出程序");
            System.out.println("a(add):添加数据到队列");
            System.out.println("g(get):从队列中获取数据");
            System.out.println("h(head):查看队列头的数据");
            key = sc.next().charAt(0); // 接受一个字符
            switch (key) {
                case 's':
                    arrayQueue.showQueue();
                    break;
                case 'a':
                    System.out.println("请输入一个数字");
                    int value = sc.nextInt();
                    arrayQueue.addQueue(value);
                    break;
                case 'g':
                    try{
                        arrayQueue.getQueue();
                    }catch (Exception e) {
                        System.out.println(e);
                    }
                    break;
                case 'h':
                    try {
                        System.out.println(arrayQueue.headQueue());
                    }catch (Exception e) {
                        System.out.println(e);
                    }
                    break;
                case 'e':
                    sc.close();
                    loop = false;
                    break;
                default:
                    break;
            }
        }
        System.out.println("程序退出");
    }
}



class ArrayQueue {
    private int maxSize;
    private int front;
    private int rear;
    private int[] arr;

    // 创造队列的构造器
    public ArrayQueue (int arrMaxSize) {
        maxSize = arrMaxSize;
        front = 0;
        rear = 0;
        arr = new int[maxSize];
    }
    // 队列是否满
    public boolean isFull() {
        return (rear + 1)% maxSize == front;
    }

    // 判断队列是否为空
    public boolean isEmpty() {
        return front == rear;
    }

    // 添加数据到队列
    public void addQueue (int n) {
        // 判断队列是否满
        if (isFull()) {
            System.out.println("队列已满");
            return;
        }
        arr[rear] = n;
        rear = (rear + 1) % maxSize;
    }

    // 出队列
    public int getQueue() {
        if (isEmpty()) {
            throw new RuntimeException("队列为空");
        }
        int res =  arr[front];
        front = (front + 1) % maxSize;
        return res;
    }

    // 显示队列数据
    public void showQueue () {
        if (isEmpty()) {
            System.out.println("队列为空");
            return;
        }
        System.out.println((rear + maxSize - front) % maxSize);
    }

    // 显示队列的头数据
    public int headQueue() {
        if (isEmpty()) {
            throw new RuntimeException("队列为空");
        }
        return arr[front];
    }
}
