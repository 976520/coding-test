#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//59 ������� �Է¹ް� ���� ���

int myf(int a) {
	a = a / 10000;
	return 2024 - a + 1;
}
int main59() {
	int a;
	scanf("%d", &a);
	printf("%d", myf(a));
}


