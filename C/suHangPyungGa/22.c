#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//Ű�� �Է��ϸ� 120���� ū�� ������ ���, ������ �󸶳� Ŀ�� 120���� ���
int main22() {
	int input;
	scanf("%d", &input);

	if (input < 120) {
		printf("%d", 120 - input);
	}
	else {
		printf("ga nung");
	}

}


