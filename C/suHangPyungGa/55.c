#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//���� �� �迭 �����

int main() {
	int array[3][5] = { {1, 2, 3, 4, 5}, {5, 4, 3 ,2 ,1}, {5, 1, 2, 3, 4} };
	int sum = 0;

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 5; j++) {
			sum = sum + array[i][j];
			array[i][j] = sum;
			printf("%d ", array[i][j]);
		}
		printf("\n");
	}
}


