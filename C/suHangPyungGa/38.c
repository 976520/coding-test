#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//4�ڸ� ���� �Է¹޾� �Ųٷ� ����ϱ�

int main38() {
	int input;
	scanf("%d", &input);

	while (input > 0) {
		printf("%d", input % 10);
		input = input / 10;
	}
}


