#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//1차원 배열의 값 더하기

int main49() {
	int array[5] = { 123, 59, 390, 129, 69 }, sum=0;
	for (int i = 0; i < 5; i++) {
		sum = sum + array[i];
	}
	printf("%d", sum);
}


