#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//1���� 100 �� �Է��� ���� ����� ���� ���

int main42() {
	int input, count = 0;
	scanf("%d", &input);
	for (int i = 1; i <= 100; i++) {
		if (i % input == 0) {
			count++;
		}
	}
	printf("%d", count);

}


