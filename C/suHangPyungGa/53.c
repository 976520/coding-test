#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//n�� �Է¹ް� n^2 2���� �迭 ��� (���� 0�����, 1���� �������� ���)

int main53() {
	int n, t=1, array[100][100];
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			array[i][j] = t++;

		}
	}
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			printf("%d ", array[i][j]);
		}
		printf("\n");
	}
}


