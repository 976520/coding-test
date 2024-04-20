#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//17433 �ź�ο� ��

int f(long long int a, long long int b) { //�� ���� �ִ����� ���ϱ�
    long long int temp;
    while (1) {
        if (b == 0) {
            break;
        } else if (a % b == 0) { //����������
            break;
        }
        temp = a;
        a = b;
        b = temp % b; //���� �ݺ��� ����
    }
    return b;
}

int main1() {
    int N;
    scanf("%d", &N);
    for (int s = 0; s < N; s++) {
        int t, k, x = 0;
        long long int jungsu[2000] = { 0 }, cha[2000] = { 0 }, sexyJungsu[2000] = { 0 };

        scanf("%d", &t); //ù° �ٿ� �׽�Ʈ ���̽��� ���� T�� �־�����.

        for (int i = 0; i < t; i++) { //�� �׽�Ʈ ���̽��� �� �ٷ� �̷���� �ְ�, ù° �ٿ� N, ��° �ٿ� N���� ������ �־�����.
            scanf("%lld", &jungsu[i]);
        }

        for (int j = 0; j < t - 1; j++) { //cha�� �̿��� �� ��� ���� ���� ������ ����
            //�ڹ̸� ������ �̿��� ���̰� �����. ��-1
            cha[j] = llabs(jungsu[j] - jungsu[j + 1]);
        }

        if (t == 2) { //�׽�Ʈ ���̽��� ���̰� 2�� ��

            if (cha[0] == 0) {
                printf("INFINITY\n");
                continue;
            }

            printf("%lld\n", cha[0]);

        } else { //�׽�Ʈ ���̚� ���̰� 2���� Ŭ ��

            sexyJungsu[0] = f(cha[0], cha[1]); //cha�� �����Ӹ��ִ������� ����Ͽ� ù ��° ���� sexyJungsu�� ����

            for (k = 1; k < t - 2; k++) { //sexyJungsu ������ ���� ���
                sexyJungsu[k] = f(sexyJungsu[k - 1], cha[k + 1]);
            }


            if (sexyJungsu[k - 1] == 0) { //�������� 0�̸� �̻����ݾ�
                printf("INFINITY\n");
                continue;
            }

            printf("%lld\n", sexyJungsu[k - 1]); //���̻��ϸ� �������� ����Ұ�
        }
    }
}