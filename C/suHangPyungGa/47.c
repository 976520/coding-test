#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//���ο� ���θ� �Է¹ް� ���� �簢�� ���

int main47() {
	int h, w;
	scanf("%d %d", &h, &w);

	for (int i = 0; i < h; i++) {
		for (int j = 0; j < w; j++) {
			printf("*");
		}
		printf("\n");
	}
}


