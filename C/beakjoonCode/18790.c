#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//18790 n�� ���
char sexyArray[1000][501][500];

void sexyFunction(int result[], int input[], char sexyArray[][501][500], int position, int selected, int remain, int N) {
    //position = ���� ��ġ �ε���, selected = ���õ� ���� ����, remain= �����ȼ����� % n
    if (position == 0) {
        for (int i = 1; i <= N; ++i) {  //��ġ�� 0�̸�
            printf("%d ", result[i]); //��� ���
        }
        return;
    }
    //���þ�̷� ����ġ���� ������ �ܿ츦 Ȯ���Ͽ� ��̱�
    if (sexyArray[position][selected][remain] && sexyArray[position - 1][selected - 1][(remain - input[position] + N) % N]) {
        result[selected] = input[position];
        sexyFunction(result, input, sexyArray, position - 1, selected - 1, (remain - input[position] + N) % N, N);
    } else { //�p ��ġ���� �Ұ����� ��츦 ĳġ�ϱ����� ���
        sexyFunction(result, input, sexyArray, position - 1, selected, remain, N);
    }
}

int main(void) {
    int N; //�迭��ũ��, �����¼��ڰ�
    int input[1000]; //�־����ɷ� ���ϴ� ���� ������մ����� üũ
    int result[501];
    //
    scanf("%d", &N);
    sexyArray[0][0][0] = 1; //sexyArray[a][b][c] �� a��°������ ���� b���� ����ؼ� ���� c�� ����� �մ��� ����

    for (int i = 1; i <= 2 * N - 1; ++i) { //���ڸ� �Է¹����鼭 dp�迭 ������Ʈ
        scanf("%d", input + i);
        for (int j = 0; j < N; ++j) {
            for (int k = 0; k < N; ++k) {
                //���� ���� -> ���� ����
                sexyArray[i][j][k] |= sexyArray[i - 1][j][k]; //|= or���� �� �Ҵ��ϴ� ������
                sexyArray[i][j + 1][(k + input[i]) % N] |= sexyArray[i - 1][j][k];
            }
        }
    }

    sexyFunction(result, input, sexyArray, 2 * N - 1, N, 0, N);

    return 0;
}
