#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//�ҹ��� �Է� �빮�� ���

int main40() {
	int input = 'a';

	while (input != 'q') {
		input = getchar();
		getchar();
		printf("%c %c\n", input, input - 32);
	}


}


