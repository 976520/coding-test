#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//�Է°��� �Ҽ����� �Ǻ�

int main43() {
	int input;
	scanf("%d", &input);

	for (int i = 2; i < input; i++) {
		if (input % i == 0) {
			printf("false");
			break;
		}
		else {
			printf("true");
		}
	}
}


