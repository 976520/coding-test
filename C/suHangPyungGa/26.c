#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//������ ���� ���ǰ��� �Է¹ް� �ܵ�(1��, 10��, 100��)�� ����Ͽ� ���
int main26() {
	int money, price, change;
	scanf("%d %d", &money, &price);
	change = money - price;
	printf("%d\n", change);

	int coin100 = change / 100;
	change = change % 100;

	int coin10 = change / 10;
	change = change % 10;

	printf("%d %d %d", coin100, coin10, change);
}


