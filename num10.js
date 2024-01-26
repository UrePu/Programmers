// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

function solution(n) {
    var answer = 0;
    var ans = 0;;
    for(var i = 1; i <= n; i++){
        if (n === i * i){
            answer = i + 1; 
            break;
        }
    }
    if(answer == 0){
        ans = -1
    }else {
        ans = answer * answer
    }
    return ans;
}

//1부터 전부다 비교하는것이라 수가 커지기 시작하면 속도가 많이 느려진다.
// 그래서 제곱은 /2 보다 클수가 없다는 판단하에 n/2 보다 작을때로 숫자를 줄여봤는데
//한가지가 오류가떴는데 어떤건지 모르겠다..
//테스트 결과 n이 1일때 값을 4로 출력하지않아서 오류가 생긴거같다.
//n의 예외처리 후 시간이 두배쯤 빨라졌다. 아래가 예외처리.

function solution(n) {
    var answer = 0;
    var ans = 0;
    if(n === 1){
        answer = 2;
    }else{
        for(var i = 0; i <= n; i++){
            if (n === i * i){
                answer = i + 1; 
                break;
            }
        }
    }
    
    if(answer == 0){
        ans = -1
    }else {
        ans = answer * answer
    }
    return ans;
}