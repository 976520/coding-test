#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//n������ 1�� Ŀ���� �����

int main44() {
	int n;
	scanf("%d", &n);

	for (int j = 0; j < n; j++) {
		for (int i = j; i > 0; i--) {
			printf("*");
		}
		printf("\n");
	}
}


