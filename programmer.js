//1번

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"


// function solution(num) {
//     var answer = '';
//     if ((num % 2) == 0){
//         answer = 'Even'
//     }else {
//         answer = 'Odd'
//     }
//     return answer;
// }


// num % 2 는 num을 2로 나눈 나머지를 뜻함.


//2번

// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.


// console.log(solution('-1234'));

// function solution(s) {
//     var answer = 0;
//         answer = parseFloat(s)
//     return answer;
// }


//parseFloat 는 맨 앞자리가 숫자 or 기호 or 소숫점일 경우 숫자로 변환해서 반환 해준다.
//사실 애초에 JS는 자동형변환을 지원해서 그냥 return +s 이런식으로 써도 가능하다.


//3번

// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5


// console.log(solution([1,2,3,4,5]))
// function solution(arr) {
//     console.log(arr)
//     var sum = 0;
//     var a = 0;
//     for(var i = 0; i <  arr.length ; i++){
//         sum += arr[i]
//         a++
//     }
    
//     return sum / a;
// }


// 간단히 i 를 0에서 arr의 길이만큼 진행시키고 a에 횟수 sum에 arr[i] 에 해당하는 값을 모두 더해 나누기.


//4번

// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

// function solution(n) {
//     var sum = 0;
//     for(var i = 0; i <= n; i++){
//         if(n % i === 0){
//             sum += i
//         }else {}
//     }
//     return sum;
// }

//간단하게 약수란 나눠 떨어지는것임으로 0~n 까지를 전부 나눠보고 나눠떨어지는것을 sum 에 기록.


//5번

// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.


// function solution(n) {
//     var answer = 0;
//     for (var i = 1; i <= n;i++){
//         if(n % i == 1){
//             answer = i
//             break;
//         }
//     }
//     return answer;
// }


//간단히 %로 나머지를 도출하고 값이 나올시에 break로 for 문 끝내기.


//6번

// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]


// console.log(solution(2, 5));
// function solution(x, n) {
//     var answer = [];
//     for(var i=1;i<=n;i++){
//         answer[i-1]= x * i
//     }
//     return answer;
// }


//answer[i-1] 에다가 직접넣기... 이거보단 fill이나 push 가 나을거같다.


//7번

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.


// function solution(n)
// {
//     var answer = 0;
//     var str = n.toString();
//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')
//     for(var i = 0; i < str.length ; i++){
//         answer += Number(str.charAt(i))
//     }
//     return answer;
// }


//정답이긴 하지만 퍼포먼스가 엄청떨어지는거 같다.
//아래의 코드가 훨씬더 좋게 나오는데 charAt 함수가 별로 좋지않은거 같다.


// function solution(n)
// {
//     var a = (n + '').split('');
//     var b = 0;
//     for(var i = 0; i < a.length; ++i) {
//         b += parseInt(a[i]);
//     }
//     return b;
//     //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
// }


//열심히 찾아봤는데 오히려 charAt 사용이 split 보다 좋은듯 하다.
//퍼포먼스가 떨어졌던 이유는 함수내에 기본으로 들어있던 console.log() 한줄 때문이였다.


//8번

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]


// function solution(n) {
//     var answer = [];
//     var str = n + ''
//     for (var i = 1; i <= str.length ; i++){
//         answer.push(parseInt(str[str.length - i]))
//     }
//     return answer;
// }


//i를 1부터 str의 길이까지 진행시키고 answer 에 거꾸로 넣기.


//9번

// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.


// console.log(solution("pPyY"))
// console.log(solution("pyY"))

// function solution(s){
//     var answer = true;
//     var sum1 = 0;
//     var sum2 = 0;    
//     s.split("").map(v => {
//         // console.log(v);
//         if ( v == "p" || v == "P"){
//             sum1++
//         }else if(v == "y" || v == "Y"){
//             sum2++
//             }
//         }
//     )
//     // console.log(sum1 +" " + sum2 );
//     if (sum1 == sum2){ answer = true;}
//     else {answer = false;}
//     return answer;
// }


//or 함수를 사용하는게 아닌 .toUpperCase() 혹은 .toLowerCase() 를 통해 하나로 통일 해버리면 || 연산자를 안써도 된다.
//비교할때도 굳이 이렇게 더하는게 아니라 sum 한개로 하는방법도 있다.


//10번

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

// function solution(n) {
//     var answer = 0;
//     var ans = 0;;
//     for(var i = 1; i <= n; i++){
//         if (n === i * i){
//             answer = i + 1; 
//             break;
//         }
//     }
//     if(answer == 0){
//         ans = -1
//     }else {
//         ans = answer * answer
//     }
//     return ans;
// }

//1부터 전부다 비교하는것이라 수가 커지기 시작하면 속도가 많이 느려진다.
// 그래서 제곱은 /2 보다 클수가 없다는 판단하에 n/2 보다 작을때로 숫자를 줄여봤는데
//한가지가 오류가떴는데 어떤건지 모르겠다..
//테스트 결과 n이 1일때 값을 4로 출력하지않아서 오류가 생긴거같다.
//n의 예외처리 후 시간이 두배쯤 빨라졌다. 아래가 예외처리.

// function solution(n) {
//     var answer = 0;
//     var ans = 0;
//     if(n === 1){
//         answer = 2;
//     }else{
//         for(var i = 0; i <= n; i++){
//             if (n === i * i){
//                 answer = i + 1; 
//                 break;
//             }
//         }
//     }
    
//     if(answer == 0){
//         ans = -1
//     }else {
//         ans = answer * answer
//     }
//     return ans;
// }


//11번

// 제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211


// function solution(n) {
//     var answer = "";
//     (n + "").split("").sort().reverse().map(v => {answer += v})
//     return Number(answer);
// }


//join ("") 이게 훨씬 빠른거같다.


//13번

// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// x	return
// 10	true
// 12	true
// 11	false
// 13	false
// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
// 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

// 입출력 예 #4
// 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.


// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x%10;
//         x = Math.floor(x/10);
//     } while (x>0);

//     return !(num%sum);
// }


//!num%sum 나머지가 있냐 없냐로 판별가능.

//14번

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
// 입출력 예 설명
// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.


// console.log(solution([1,2,3], [false,true,true]));
// console.log(0 + true)

// function solution(absolutes, signs) {
//     var answer = 0;
//     for(var i = 0; i< signs.length; i++){
//         if(signs[i]){
//             answer += absolutes[i]
//         }else{
//             answer += -1 * absolutes[i]
//         }
//     }
//     return answer;
// }

//for 안에 if문을 넣어서 한건데 음... 
// function solution(absolutes, signs) {

//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }

//이런것도 있는데 봐도 뭔지 모르겠다.

//15번

