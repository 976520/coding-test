#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//���ڿ��� �Է¹޾� ���ڿ��� ���Ե� �� ������ ���� Ƚ��

int main() {
	char input[1000];
	int alphabet[26] = {0}, i=0;
	scanf("%s", input);

	while (input[i] != '\0') {
		alphabet[input[i] - 97]++;
		i++;
	}

	for (int k = 0; k < 26; k++) {
		if (alphabet[k] != 0) {
			printf("%c: %d\n", k+97, alphabet[k]);
		}
	}
}


