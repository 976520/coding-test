#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//a�� b ���� �� �� 1�� �ڸ��� 3�� ������ ���� 33

int main33() {
	int a, b, count = 0;
	scanf("%d %d", &a, &b);
	for (int i = a; i < b; i++) {
		if (i % 10 == 3) {
			count++;
		}
	}
	printf("%d", count);
}


