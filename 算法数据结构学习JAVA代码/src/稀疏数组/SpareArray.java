package 稀疏数组;

public class SpareArray {

    public static void main(String[] args) {
        // 创建一个原始的10 * 10 的二维数组
        // 0表示没有棋子， 1表示白旗，2表示黑棋
        int chessArr[][] = new int[10][10];
        chessArr[1][2] = 2;
        chessArr[5][6] = 1;
        System.out.println("输出原始的二维数组");
        for (int[] row : chessArr) {
            for (int data : row) {
                System.out.printf("%d\t", data);
            }
            System.out.println("");
        }


        // 将二维数组装换为稀疏数组
        int num = 0;
        for (int[] row : chessArr) {
            for (int data: row) {
                if (data != 0) {
                    ++num;
                }
            }
        }
        System.out.println(num);
        int arr[][] = new int[num+1][3];
        arr[0][0] = chessArr.length;
        arr[0][1] = chessArr[0].length;
        arr[0][2] = num;
        int count = 1;
        for (int i = 0; i < chessArr.length; i++) {
            for (int j = 0; j < chessArr[i].length; j++) {
                if (chessArr[i][j] != 0) {
                    arr[count][0] = i;
                    arr[count][1] = j;
                    arr[count][2] = chessArr[i][j];
                    count++;
                }
            }
        }
        for (int[] col : arr) {
            for (int data: col) {
                System.out.printf("%d\t", data);
            }
            System.out.println("");
        }

        // 将稀疏数组转换为二维数组
        int arrs[][] = new int[arr[0][0]][arr[0][1]];
        for (int i = 1; i < arr.length; i++) {
            arrs[arr[i][0]][arr[i][1]] = arr[i][2];
        }

        for (int[] col: arrs) {
            for (int data: col) {
                System.out.printf("%d\t", data);
            }
            System.out.println("");
        }
    }



}
