#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//a�� b�� n�� �ݺ��ؼ� ���ϱ�

int main32() {
	int a = 4, b = 5, n = 9;
	for (int i = 0; i < n; i++) {
		a = a + b;
	}
	printf("%d", a);
}


