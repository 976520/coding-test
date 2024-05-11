#가장 큰 수

def solution(numbers):
    if all(num == 0 for num in numbers):  # 만약 배열의 모든 원소가 0이라면
        return '0'  # 0을 return한다.

    return ''.join(sorted(map(str, numbers), key=lambda x: x * 5, reverse=True))

    '''
    1. map()를 사용해서 numbers 리스트의 모든 원소를 string으로 바꾼다.
    2. sorted를 통해 이 리스트를 정렬한다. 이때 정렬의 기준은 key를 사용해 정의했다.
    3. key에 할당된 lambda 문법을 사용해 문자열을 5번 이어붙여 대소를 비교한다. 
        3-1. 예를 들어 6과 10을 비교할 때, 66666과 1010101010을 비교한다. 이 문제는 숫자끼리 이어붙여 가장 큰 수를 만드는 것이기 때문에, 비교의 목적을 달리              해야 한다. 6과 10을 붙여서 가장 큰 수를 만든다고 할 때, 무작정 더 큰 수인 10을 앞에 놓는다면, 결과는 106이 될 것이다.
        3-2. 하지만 66666과 1010101010을 비교하면 66666이 더 크다고 판단한다. 문자열을 비교할 때, 각 문자의 아스키 코드 값을 비교하며 왼쪽부터 순차적으로 비              교하면서 더 큰 값이 있는 문자열이 큰 수로 간주하기 때문이다. 
        3-3. 결과적으로 6이 10보다 앞에 배치되어야 한다고 판단되므로 결과가 610이 될 수 있다.
    4. 이때, 함수가 오름차순으로 정렬되어 있으니 reverse=True를 이용해 내림차순으로 바꿔준다. 
    5. ''.join()을 이용해 정렬된 배열을 이어붙여서 하나의 문자열로 만들어 return한다.
    '''