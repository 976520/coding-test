#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

int hh[100000];

long long int size(int s, int e) { //0, n-1
    if (e < s) { //�������
        return -1;
    }
    if (s == e) { //'÷ = ��' �϶� �� �������� ��ȯ
        return hh[s];
    }

    int mid = (s + e) / 2; //�߰� ����� ����
    int i = mid, j = mid + 1; //�����ε��� = �߰������ �ϳ������� ����, ���ʽó� = �ذ������ �ϳ���������
    int h = hh[mid]; //���� ����
    long long int westSize = size(s, mid - 1); //���ʺ��� �߰������ �ϳ�������
    long long int eastSize = size(mid + 1, e); //�߰��� �������� �����ʳ�����
    long long int gaeJjang = hh[mid]; //���ϵɾ���

    while (s <= i || j <= e) { //�� �� �޼��ؾ� ����

        if (i < s || (j <= e && hh[i] < hh[j])) { //i�� ���� ������ ���� || (������ �ε����� �����ȿ� �ִ� && ������ ������ ���̰� �� ũ��)
            h = hh[j] < h ? hh[j] : h; //h�� �ּҳ��� �Ҵ�
            gaeJjang = gaeJjang > (long long int) h * (j - i) ? gaeJjang : (long long int) h * (j - i); //���� * ��(=����)
            j++; //���ʿ� �� �����ϱ� �����ʸ� ����
        } else { //���� ���� �ȴ�����
            h = hh[i] < h ? hh[i] : h; //h�� �ּҳ��� �Ҵ�
            gaeJjang = gaeJjang > (long long int) h * (j - i) ? gaeJjang : (long long int) h * (j - i); //����
            i--; //���ʸ� ��Ӱ�
        }
    }

    //�����
    if (gaeJjang < westSize) {
        gaeJjang = westSize;
    }
    if (gaeJjang < eastSize) {
        gaeJjang = eastSize;
    }

    return gaeJjang;
}

int main() {
    int n;
    while (1) {
        scanf("%d", &n); //���簢���� �� n�� ���� ó������ �־�����. (1 �� n �� 100,000)
        if (n == 0) { //�Է��� ������ �ٿ��� 0�� �ϳ� �־�����.
            break;
        }
        for (int i = 0; i < n; ++i) { //�� ���� n���� ���� h1, ..., hn (0 �� hi �� 1,000,000,000)�� �־�����.
            scanf("%d", &hh[i]); //�� ���ڵ��� ������׷��� �ִ� ���簢���� �����̸�, ���ʺ��� �����ʱ��� ������� �־�����.
        }
        printf("%lld\n", size(0, n - 1)); //���
    }
    return 0;
}
