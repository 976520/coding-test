#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//n������ 1�� Ŀ���� �����

int main45() {
	int n;
	scanf("%d", &n);

	while (n--) {
		for (int i = n; i > 0; i--) {
			printf("*");
		}
		printf("\n");
	}
}


