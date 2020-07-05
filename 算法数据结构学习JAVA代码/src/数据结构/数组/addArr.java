package 数据结构.数组;

import java.util.Arrays;

public class addArr {
    public static void main(String[] args) {
        AddArray arr = new AddArray();

        arr.addArr(1, 0);
        arr.addArr(2, 1);
        arr.addArr(3, 1);
        arr.addArr(4, 0);
        System.out.println(arr.toString());
        arr.deleteArr(0);
        System.out.println(arr.toString());
        arr.deleteArr(2);
        arr.newDeleteArr(1);
        System.out.println(arr.toString());
    }
}
class AddArray {
    int[] arr;

    public AddArray() {
        arr = new int[0];
    }

    // 插入元素
    public void addArr (int element, int index) {
        // element插入的元素
        // index插入的位置
        int size = arr.length;
        if (index < 0 || index > size) {
            //  下标越界异常
            throw new RuntimeException("下标越界异常");
        }
        // 插入元素
        int[] newArr = new int[size + 1];

        for(int i = 0; i < size + 1; i++) {
            if (i < index) {
                newArr[i] = arr[i];
            } else if (i == index) {
                newArr[i] = element;
            } else {
                newArr[i] = arr[i - 1];
            }
        }
        arr = newArr;
    }
    public int deleteArr (int index) {
        // 删除元素
        // index指下标
        int size = arr.length;
        if (index < 0 || index >= size) {
            throw new RuntimeException("下标越界异常");
        }
        int[] newArr = new int[size - 1];
        for (int i = 0; i < newArr.length; i++) {
            if (i < index) {
                newArr[i] = arr[i];
            } else if (i > index) {
                newArr[i] = arr[i+1];
            }
        }
        int res = arr[index];
        arr = newArr;
        return res;
    }
    public int newDeleteArr (int index) {
        // 删除数组元素，时间复杂度为o(1)
        if (index < 0 || index > arr.length) {
            throw new RuntimeException("下标越界异常");
        }
        int res = arr[index];
        arr[index] = arr[arr.length - 1];
        arr[arr.length - 1] = 0;
        return arr[index];
    }
//    public void showArr () {
//        System.out.println(arr.toString());
//    }
    @Override
    public String toString() {
        return "AddArray{" +
                "arr=" + Arrays.toString(arr) +
                '}';
    }
}
