//1번.

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return3
// 3	"Odd"
// 4	"Even"

//
// function solution(num) {
//     var answer = '';
//     if ((num % 2) == 0){
//         answer = 'Even'
//     }else {
//         answer = 'Odd'
//     }
//     return answer;
// }
//

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
// console.log(solution(6))
// function solution(num) {
//     var answer = 0;
//     if(num === 1){
//     }else{
//         do{
//             (num%2 === 0) ? num = num / 2 : num = (num * 3) + 1
//             answer++
//         }while(num > 1 && answer < 500)
//     }
//     if(answer === 500) answer = -1
//     return answer;
// }

//좀 깔끔하게 된거같다

//16 번

// 문제 설명

// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
// 제한 사항

//     seoul은 길이 1 이상, 1000 이하인 배열입니다.
//     seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
//     "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// 입출력 예
// seoul 	return
// ["Jane", "Kim"] 	"김서방은 1에 있다"

// function solution(seoul) {
//     var answer = "";
//     for(var i = 0; i < seoul.length;i++){
//         if(seoul[i] == "Kim")
//             answer = "김서방은 " + i + "에 있다";
//             break;
//     }
//     return answer;
// }

//seoul 배열의 모든 인덱스를

//17번

//문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

// function solution(arr, divisor) {
//     var answer = [];
//     arr = arr.sort(function(a,b){
//         return a - b;
//     });
//     for(var i = 0 ; i < arr.length; i++){
//         if(arr[i] % divisor == 0){
//             answer.push(arr[i])
//         }
//     }
//     if(!answer[0]) answer = [-1];
//     return answer;

//sort 를 쓰려면 비교하는게 있어야한다는걸 배웠다.

//18번

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
// // }

// console.log(solution([1,2,3,4,6,7,8,0]))
// function solution(numbers) {
//     var answer = 0;
//     numbers.forEach(element => {
//         answer += element
//     });
//     return 45-answer;
// }

//reduce 공부하기.

//19번

// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

// function solution(phone_number) {
//     var answer = '';
//     var ary = phone_number.slice("")
//     for(var i =0; i < ary.length; i++){
//         if(i < ary.length - 4){
//             answer += "*"
//         }else{
//             answer += ary[i]
//         }
//     }
//     return answer;
// }

//간단하게 삼항연산자로 표시가능...

//20번
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

// console.log(solution([4,3,2,1]));

// function solution(arr) {
//     var answer = [];
//     if(arr.length == 1){
//         answer = [-1];
//     }else{
//         for(var i = 0; i < arr.length; i++) {
//             if(arr[i] === Math.min(...arr))  {
//               arr.splice(i, 1);
//               answer = arr
//               break;
//             }
//           }
//     }
//     return answer;
// }

//21번

// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2
// 입출력 예 설명
// 입출력 예 #1

// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2

// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

// function solution(a, b) {
//     var answer = 0;
//     for(var i = 0; i < a.length; i++){
//         answer += a[i]*b[i]
//     }
//     return answer;
// }

//reduce 쓰면 더 좋아보임.

//22번

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// function solution(s) {
//     var answer = '';
//     var ary = s.split("")
//     if(ary.length % 2 === 0){
//         var a = ary.length/2
//         answer = ary[a-1] + ary[a]
//     }else{
//         var b = Math.floor(ary.length/2)
//         answer = ary[b]
//     }
//     return answer;
// }

//짧게도 가능한데 배우지 않음.

//23번

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// function solution(n) {
//     var answer = '';
//     if((n % 2) == 0) {
//         for(var i = 0 ; i < n / 2 ; i ++) {
//             answer += '수박'
//         }
//     }else {
//         answer += '수'
//         for(var i = 1 ; i < n / 2 ; i ++) {
//             answer += '박수'
//         }
//     }
//     return answer;
// }

//24번

// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52
// 입출력 예 설명
// 입출력 예 #1

// 다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 13	1, 13	2
// 14	1, 2, 7, 14	4
// 15	1, 3, 5, 15	4
// 16	1, 2, 4, 8, 16	5
// 17	1, 17	2
// 따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
// 입출력 예 #2

// 다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 24	1, 2, 3, 4, 6, 8, 12, 24	8
// 25	1, 5, 25	3
// 26	1, 2, 13, 26	4
// 27	1, 3, 9, 27	4
// 따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.

// // console.log(measure(11));
// function measure(i){
//     var ary = []
//     for(var j = 1; j < i; j++){
//         if(i % j == 0){
//             ary.push(j)
//         }
//     }
//     if(ary.length % 2){
//         return +1
//     }else return -1
// }
// // console.log(solution(13,17));
// function solution(left, right) {
//     var answer = 0;
//     var ary = []
//     var i = right - left + 1
//     for(var j = 0; j < i ; j ++){
//         ary.push(left + j);
//     }
//     ary.forEach(x => answer += measure(x) * x)

//     return answer;
// }

//제곱수가 정수면 .. 약수가 짝수다.

//24번

// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

// console.log(solution("Zbcdefg"));

// function solution(s) {
//     var ary = s.split("")
//     ary.sort().reverse();
//     var answer = '';
//     var answer__back = '';
//     for(var i = 0; i < ary.length; i++){
//         if (ary[i].toLowerCase() === ary[i]){
//             answer += ary[i];
//         }else{
//             answer__back += ary[i];
//         }
//     }
//     return answer + answer__back;
// }

//어차피 .sort()가 대문자를 앞에 정렬하는거같다.
//s.split("").sort.reverse.join("") 으로 가능.

//25번

// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
// 입출력 예
// price	money	count	result
// 3	20	4	10
// 입출력 예 설명
// 입출력 예 #1
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

// 참고 사항
// 미션 언어는 Java, JavaScript, Python3, C++ 만 해당 됩니다.
// 같은 코드를 제출한 사람이 여럿이라면 코드를 가장 먼저 제출한 분께 상품을 드립니다.
// 좋아요 수가 동일할 경우 코드를 가장 먼저 제출한 분께 상품을 드립니다.

// function solution(price, money, count) {
//     var answer = -1;
//     var sum = 0;
//     for(var i = 1; i <= count; i++){
//         sum += price * i
//     }
//     if(money < sum){
//         answer = sum - money
//     }else answer = 0;
//     return answer;
// }

//26번

// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true
// 문제가 잘 안풀린다면😢
// 힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → 클릭

// 공지 - 2022년 7월 22일 테스트케이스가 추가되었습니다.
// 공지 - 2022년 7월 22일 제한 사항이 추가되었습니다.

// console.log(solution('1234'));
// console.log(solution('3e10'));

// console.log(solution('a2334'));
// console.log(solution("16844"));

// function solution(s) {
//     console.log(Number(s));
//     var answer = true;
//     var ary = s.split("")
//     if(ary.length === 4 || ary.length === 6){
//         ary.forEach(x => {
//             if(x == Number(x)){

//             }else{
//                 answer = false;
//             }
//         });
//     }else {
//         answer = false;
//     }
//     return answer;
// }

//27번

// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]
// console.table(solution([[1,2] , [2,3]] , [[3,4],[5,6]]))
// console.table(solution([[1,2]] , [[3,4]]))
// // console.log([[1,2] , [2,3]] , [[3,4],[5,6]])
// function solution(arr1, arr2) {
//     var answer = [[]];

//     for(var i = 0; i < arr1.length; i++){
//         var sum = [];

//         for(var j = 0 ; j < arr2[0].length; j++){
//             sum[j] = arr1[i][j] + arr2[i][j]
//             // console.log(sum);
//         }
//         answer[i] = sum
//     }
//     return answer;
// }

//num 28

// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.
// 예시
// 입력

// 5 3
// 출력

// *****
// *****
// *****

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     for(var i = 0; i < b; i ++){
//         var sum = ""
//         for(var j = 0; j < a; j++){
//             sum += "*"
//         }
//         console.log(sum)
//     }
// });

//NUM 29

// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]
// 입출력 예 설명
// 입출력 예 #1
// 위의 설명과 같습니다.

// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

// console.log(solution(2,10));

// function measure(a) {
//     var ary = [];
//         for(var i = 1 ; i <= a; i++){
//             if(a % i == 0){
//                 ary.push(i)
//             }
//         }
//     return ary
// }

// function measMax(a, b) {
//     var max = 0;
//     for(var i =0; i < a.length; i++){
//         for(var j=0; j < b.length; j++){
//             if(a[i] == b[j]){
//                 if(max < b[j]){
//                     max = b[j];
//                 }
//             }
//         }
//     }
//     return max;
// }

// function measMin(a, b,c,d) {

//     var max = 0;
//     for(var i =0; i < a.length; i++){
//         for(var j=0; j < b.length; j++){
//             if(a[i] == b[j]){
//                 if(max < b[j]){
//                     max = b[j];
//                 }
//             }
//         }
//     }
//     console.log(max)
//     return c*d/max;
// }

// function solution(n, m) {
//     var answer = [];
//     var measn = measure(n);
//     var measm = measure(m);
//     answer = [measMax(measn, measm) , measMin(measn, measm,n,m)];
//     return answer;
// }

//num 30

// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// 입출력 예
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]
// 입출력 예 설명
// 입출력 예 #1,2
// 문제의 예시와 같습니다.
// console.log(solution([1, 1, 3, 3, 0, 1, 1]));
// function solution(arr)
// {
//     var answer = [];
//     for(var i = 0 ; i<arr.length; i++){
//         if(arr[i] == arr[i+1]){

//         }else{
//             answer.push(arr[i])
//         }
//     }

//     return answer;
// }

// function solution(arr)
// {
//     var answer =[];
//     for(var i = 0 ; i<arr.length; i++){
//         if(arr[i] !== arr[i+1]){
//             answer.push(arr[i])
//         }
//     }
//     return answer;
// }

//31번

// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229
// 입출력 예 설명
// 입출력 예 #1

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7
// 따라서 7을 return 해야 합니다.
// 입출력 예 #2

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 125	11122	22111	229
// 따라서 229를 return 해야 합니다.

//32번

// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229
// 입출력 예 설명
// 입출력 예 #1

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7
// 따라서 7을 return 해야 합니다.
// 입출력 예 #2

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 125	11122	22111	229
// 따라서 229를 return 해야 한다.

//33번

// 문제 설명
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// 제한사항
// 1 ≤ p의 길이 ≤ 18
// p의 길이 ≤ t의 길이 ≤ 10,000
// t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.
// 입출력 예
// t	p	result
// "3141592"	"271"	2
// "500220839878"	"7"	8
// "10203"	"15"	3
// 입출력 예 설명
// 입출력 예 #1
// 본문과 같습니다.

// 입출력 예 #2
// p의 길이가 1이므로 t의 부분문자열은 "5", "0", 0", "2", "2", "0", "8", "3", "9", "8", "7", "8"이며 이중 7보다 작거나 같은 숫자는 "5", "0", "0", "2", "2", "0", "3", "7" 이렇게 8개가 있습니다.

// 입출력 예 #3
// p의 길이가 2이므로 t의 부분문자열은 "10", "02", "20", "03"이며, 이중 15보다 작거나 같은 숫자는 "10", "02", "03" 이렇게 3개입니다. "02"와 "03"은 각각 2, 3에 해당한다는 점에 주의하세요

// solution(500220839878, 7)
// function solution(t, p) {
//     var answer = 0;
//     var arrP = (p + "").split("");
//     var arrT = (t + "").split("");
//     var arrX = []

//     for(let i = 0 ; i <= arrT.length - arrP.length ; i ++){
//         var a = [];
//         for(let j = 0 ; j < arrP.length; j++){
//             a.push(arrT[i + j])
//         }
//         var b = a.join("")*1
//         arrX.push(b)

//     }
//     // console.log(arrX);

//     arrX.forEach(x => {
//         // console.log(x)
//         if(x <= p){
//             answer += 1;
//         }
//     });

//     // console.log(answer);

//     return answer;
// }

// 개쩌는 풀이

// function solution(t, p) {
//     let count = 0;
//     for(let i=0; i<=t.length-p.length; i++) {
//         let value = t.slice(i, i+p.length);
//         if(+p >= +value) count++;
//     }
//     return count;
// }

//문제 34

// 문제 설명

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

// solution("try hello world")
// function solution(s) {
//     return s
//         .split(" ")
//         .map(word =>
//             word
//                 .split("")
//                 .map((char, index) =>
//                     index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
//                 )
//                 .join("")
//         )
//         .join(" ");
// }

// 문제 35

// 문제 설명
// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

// solution([2, 2, 3, 3], 10);
// function solution(d, budget) {
//     d.sort((a, b) => a - b); // 작은 금액부터 정렬
//     var sum = 0;
//     var answer = 0;

//     for (let i = 0; i < d.length; i++) {
//         sum += d[i];
//         if (sum > budget) {
//             break;
//         }
//         answer++;
//     }
//     return answer;
// }

//문제의 예외나 테스트 케이스를 잘 생각해보기.

// //문제 36

// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

//내풀이
// solution(45)
// function solution(n) {
//     var answer = 0;
//     var arrN = []
//     while(true){
//         arrN.push(n % 3)
//         if(n/3 < 1) break
//         n = Math.floor(n / 3)
//     }
//     // console.log(arrN);

//     for(let i = 0; i < arrN.length ; i ++){
//         answer += arrN[i] * 3**(arrN.length -1 - i)
//         console.log(3**(arrN.length - i));

//     }
//     // console.log(answer);

//     return answer;
// }

//다른사람풀이

// const solution = (n) => {
//     return parseInt([...n.toString(3)].reverse().join(""), 3);
// }

//문제 37

// 문제 설명
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// 3 ≤ number의 길이 ≤ 13
// -1,000 ≤ number의 각 원소 ≤ 1,000
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.

// solution([-2, 3, 0, 2, -5])
// function solution(number) {
//     var answer = 0;

//     for(let i = 0 ; i < number.length-2 ; i++){
//         for(let j = i + 1; j < number.length -1; j++){
//                 for(let x = j + 1; x < number.length; x ++){
//                     if(number[i] + number[j] + number[x] == 0){
//                         answer++
//                     }
//                 }
//             }
//         }
//     // console.log(answer);

//     return answer;
// }

//문제 38

// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// sizes의 길이는 1 이상 10,000 이하입니다.
// sizes의 원소는 [w, h] 형식입니다.
// w는 명함의 가로 길이를 나타냅니다.
// h는 명함의 세로 길이를 나타냅니다.
// w와 h는 1 이상 1,000 이하인 자연수입니다.
// solution([[60, 50], [30, 70], [60, 30], [80, 40]])
// function solution(sizes) {
//     var answer = 0;
//     for(var i = 0; i < sizes.length; i++){
//         if(sizes[i][0] < sizes[i][1]){
//             var d = sizes[i][0];
//             sizes[i][0] = sizes[i][1]
//             sizes[i][1] = d
//         }
//     }
//     var h = 0;
//     var w = 0;
//     for(var i = 0; i < sizes.length; i++){
//         if(w < sizes[i][0]) w = sizes[i][0]
//         if(h < sizes[i][1]) h = sizes[i][1]

//     }
//     answer = h * w

//     return answer;
// }

//문제 38
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
//  예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// solution("a B z ",25)
// String.fromCharCode(65);// A
// // String.fromCharCode(90);// Z
// const a = "a";
// console.log(a.charCodeAt(0)); // 97
// const b = 'z'
// // console.log(b.charCodeAt(0)); // 122
// const c = " ";
// console.log(c.charCodeAt(0)); // 32

// function solution(s, n) {
//     var arrS = s.split('')
//     var i = 0;
//     for(let a of arrS){
//         if(a.charCodeAt(0) == 32){
//             // console.log("a");
//         }else{
//             var word = a.charCodeAt(0) + n;
//                 if(word >= 90 && word < 97){
//                     word = word- 26
//                     arrS[i] = String.fromCharCode(word);
//                 }else if(word > 122){
//                     word = word- 26
//                     arrS[i] = String.fromCharCode(word);
//                 }else {arrS[i] = String.fromCharCode(word);
//             }
//         }
//        i++
//     }
//     var answer = arrS.join("");
//     console.log(answer);

//     return answer;
// }

// function solution(s, n) {
//     var arrS = s.split('');
//     for (let i = 0; i < arrS.length; i++) {
//         let charCode = arrS[i].charCodeAt(0);

//         if (charCode >= 65 && charCode <= 90) {
//             charCode = ((charCode - 65 + n) % 26) + 65;
//             arrS[i] = String.fromCharCode(charCode);
//         }
//         else if (charCode >= 97 && charCode <= 122) {
//             charCode = ((charCode - 97 + n) % 26) + 97;
//             arrS[i] = String.fromCharCode(charCode);
//         }
//     }

//     return arrS.join('');
// }

// 좀더 깔끔한 범위 구분이 필요할것으로 보임.

//문제 39

// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// solution([2,1,3,4,1])
// function solution(numbers) {
//     numbers = numbers.sort((a, b) => a - b)
//     var answer = [];
//     for(let i = 0; i < numbers.length - 1 ; i++){
//         for(let j = 0; j < numbers.length; j++){
//             if(i !== j)answer.push(numbers[i] + numbers[j])
//         }
//     }
//     for(let i = 0; i < answer.length ; i++){
//         for(let j = 0; j < answer.length; j++){
//             if(answer[i] == answer[j] && i !== j){

//                 answer.splice(j,1)
//             }
//         }
//     }
//     answer = answer.sort((a, b) => a - b)
//     return answer;

// }

// function solution(numbers) {
//     const sums = new Set();

//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             sums.add(numbers[i] + numbers[j]);
//         }
//     }

//     // Set을 Array로 변환하고 정렬
//     return Array.from(sums).sort((a, b) => a - b);
// }

//Set 함수는 중복을 자동 제거 해준다.

//문제 40
// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요
// solution("foobar")
// function solution(s) {
//     var arrS = s.split("")
//     var answer = []
//     for(let i = 0; i < arrS.length; i++){
//             answer[i] = -1
//         for(let j = i-1 ; j >= 0 ; j--){
//             if(arrS[j] == arrS[i]){
//                 answer[i] = i - j
//                 break;
//             }
//         }
//     }
//     // console.log(answer);

//     return answer;
// }

//문제 41

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// solution("1zerotwozero3")
// function solution(s) {
//     var arrS = s.split("")
//     var arrW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//     var word = ''
//     var answer = '';
//     for(let i = 0; i < arrS.length; i++){
//         if(arrS[i] * 1 >= 0){
//             answer += arrS[i]
//             // console.log(i);

//         }else {
//             word += arrS[i]
//             if(word.length > 2){
//                 console.log(word);
//                 for(let j = 0; j < arrW.length; j++){
//                     if(word == arrW[j]){
//                         answer += j
//                         word = ''
//                         break;
//                     }
//                 }
//             }

//         }
//     }

//     answer = Number(answer)
//     // console.log(answer);

//     return answer;
// }

// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }

//문제 42

// 문제 설명
// 수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. 이 대회에서 선수들은 1대 1로 대결하며,
//매 대결마다 음식의 종류와 양이 바뀝니다. 대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로,
// 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.

// 이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다.
//또한, 이번 대회부터는 칼로리가 낮은 음식을 먼저 먹을 수 있게 배치하여 선수들이 음식을 더 잘 먹을 수 있게 하려고 합니다.
// 이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.

// 예를 들어, 3가지의 음식이 준비되어 있으며, 칼로리가 적은 순서대로 1번 음식을 3개, 2번 음식을 4개, 3번 음식을 6개 준비했으며,
//물을 편의상 0번 음식이라고 칭한다면, 두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 "1223330333221"이 됩니다.
// 따라서 1번 음식 1개는 대회에 사용하지 못합니다.

// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때,
// 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ food의 길이 ≤ 9
// 1 ≤ food의 각 원소 ≤ 1,000
// food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
// food[i]는 i번 음식의 수입니다.
// food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
// 정답의 길이가 3 이상인 경우만 입력으로 주어집니다.
// solution([1, 3, 4, 6])
// function solution(food) {
//     let arrF = []
//     var answer = '';
//     for(let i = 1; i < food.length; i++){
//         arrF.push(Math.floor(food[i]/2))
//     }

//     for(let i = 0; i < arrF.length; i++){
//         for(let j = 0; j < arrF[i]; j++){
//             answer += i + 1;
//         }
//     }
//     answer += 0
//     for(let i = arrF.length; i > 0; i--){
//         for(let j = 0; j < arrF[i - 1]; j++){
//             // console.log(i);

//             answer += i
//         }
//     }
//         //   console.log(answer);

//     return answer;
// }

//
// 문제 43

// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// solution(	["abce", "abcd", "cdx"], 2)

// function solution(strings, n) {
//     var answer = [];
//     var arrW = [[]];
//     for(let i = 0; i < strings.length; i++){
//         arrW[i]= ([strings[i].split("")[n], strings[i]]);
//     }
//     arrW = arrW.sort()
//     for(let i = 0; i < strings.length; i++){
//         answer.push(arrW[i][1])
//     }
//     console.log(answer);

//     return answer;
// }

// 문제 44

// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의
// 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
// function solution(array, commands) {
//     var answer = [];
//     for(let i = 0; i < commands.length; i++){
//         var arrN = []
//         for(let j = commands[i][0] - 1 ; j < commands[i][1]  ; j++){
//             arrN.push(array[j])
//         }
//         arrN = arrN.sort((a,b) => a - b);
//         answer.push(arrN[commands[i][2] - 1])
//     }
//     // console.log(answer);

//     return answer;
// }

// 문제 45

// 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다.

// 기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 상빈이는 열심히 고심했지만,
//  일반화된 콜라 문제의 답을 찾을 수 없었습니다. 상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요.

// 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다.
//  상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.
// 제한사항
// 1 ≤ b < a ≤ n ≤ 1,000,000
// 정답은 항상 int 범위를 넘지 않게 주어집니다.
// solution(3, 1, 20)
// function solution(a, b, n) {
//     var answer = 0;
//     while(true){
//         if(n % a === 0){
//             n = n / a * b
//             answer += n
//         }else if(n < a){
//             break;
//         }else{
//             answer += Math.floor(n / a) * b
//             n = Math.floor(n / a) * b + n % a
//         }
//     }
//     console.log(answer);

//     return answer;
// }

// 문제 46

// 문제 설명
// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
//  다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
// 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
// secret map

// 네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

// 입력 형식
// 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

// 1 ≦ n ≦ 16
// arr1, arr2는 길이 n인 정수 배열로 주어진다.
// 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// function solution(n, arr1, arr2) {
//   var answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = arr1[i].toString(2);
//     arr2[i] = arr2[i].toString(2);
//   }

//   for (let i = 0; i < n; i++) {
//     let a = arr1[i].split("");
//     if (arr1[i].length < n) {
//       for (let j = 0; j < n - arr1[i].length; j++) {
//         a.unshift("0");
//       }
//     }
//     arr1[i] = a;

//     let b = arr2[i].split("");
//     if (arr2[i].length < n) {
//       for (let j = 0; j < n - arr2[i].length; j++) {
//         b.unshift("0");
//       }
//     }
//     arr2[i] = b;
//   }

//   // console.log(arr1, arr2);

//   for (let i = 0; i < n; i++) {
//     let sharp = "";
//     for (let j = 0; j < n; j++) {
//       if (arr1[i][j] + arr2[i][j] > 0) {
//         sharp += "#";
//       } else {
//         sharp += " ";
//       }
//     }
//     answer.push(sharp);
//   }
//   // console.log(answer);

//   return answer;
// }

//문제 47

// 문제 설명
// "명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다.
// 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다.
// 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면,
//  출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

// 이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면,
//  명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.

// 그림1.png

// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ k ≤ 100
// 7 ≤ score의 길이 ≤ 1,000
// 0 ≤ score[i] ≤ 2,000

// solution(3, [10, 100, 20, 150, 1, 100, 200]);
// function solution(k, score) {
//   var answer = [];
//   var auth = [];
//   for (let i = 0; i < score.length; i++) {
//     if (auth.length < k) {
//       auth.push(score[i]);
//       auth.sort((a, b) => a - b);
//       answer.push(auth[0]);
//     } else {
//       for (let j = 0; j < auth.length; j++) {
//         if (auth[j] < score[i]) {
//           auth[j] = score[i];
//           break;
//         }
//       }
//       auth.sort((a, b) => a - b);
//       answer.push(auth[0]);
//     }
//   }
// //   console.log(answer);

//   return answer;
// }

//문제 48

// 문제 설명
// 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다.
// 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다.
// 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때,
// 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

// 그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때,
// 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ name의 길이 = yearning의 길이≤ 100
// 3 ≤ name의 원소의 길이 ≤ 7
// name의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// name에는 중복된 값이 들어가지 않습니다.
// 1 ≤ yearning[i] ≤ 100
// yearning[i]는 i번째 사람의 그리움 점수입니다.
// 3 ≤ photo의 길이 ≤ 100
// 1 ≤ photo[i]의 길이 ≤ 100
// 3 ≤ photo[i]의 원소(문자열)의 길이 ≤ 7
// photo[i]의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// photo[i]의 원소들은 중복된 값이 들어가지 않습니다.

// solution(
//   ["kali", "mari", "don"],
//   [11, 1, 55],
//   [
//     ["kali", "mari", "don"],
//     ["pony", "tom", "teddy"],
//     ["con", "mona", "don"],
//   ]
// );

// function solution(name, yearning, photo) {
//   var answer = [];
//   for (let i = 0; i < photo.length; i++) {
//     //photo 전체길이
//     let sum = 0;
//     for (let j = 0; j < name.length; j++) {
//       //name 길이
//       for (let k = 0; k < photo[i].length; k++) {
//         //photo[i] 길이
//         if (name[j] === photo[i][k]) {
//           sum += yearning[j];
//           break;
//         }
//       }
//     }
//     answer.push(sum);
//   }
//   //   console.log(answer);

//   return answer;
// }

// function solution(name, yearning, photo) {
//   return photo.map((v) =>
//     v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
//   );
// }

//문제 49

// 문제 설명
// 코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
// 예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"]
// 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고
//  첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

// 문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를,
//  만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ cards1의 길이, cards2의 길이 ≤ 10
// 1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10
// cards1과 cards2에는 서로 다른 단어만 존재합니다.
// 2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이
// 1 ≤ goal[i]의 길이 ≤ 10
// goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.
// cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.'

// solution(["a", "b"], ["c"], ["b"]);

// function solution(cards1, cards2, goal) {
//     var answer = "Yes";
//     let i = 0, j = 0;

//     for (let k = 0; k < goal.length; k++) {
//       if (i < cards1.length && goal[k] === cards1[i]) {
//         i++; // cards1에서 해당 카드 사용
//       } else if (j < cards2.length && goal[k] === cards2[j]) {
//         j++; // cards2에서 해당 카드 사용
//       } else {
//         answer = "No"; // goal의 카드가 cards1 또는 cards2에 없으면 No
//         break;
//       }
//     }

//     return answer;
//   }

//문제 50

// 문제 설명
// 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
//  예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다.
//   이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

// 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
// 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
// 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
// 두 번째(1번), 세 번째(2번) 폰켓몬을 선택
// 두 번째(1번), 네 번째(3번) 폰켓몬을 선택
// 세 번째(2번), 네 번째(3번) 폰켓몬을 선택
// 이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다.
//  따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때,
//  N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
// 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.
// solution([3, 3, 3, 2, 2, 4]);
// function solution(nums) {
//   let i = nums.length / 2;
//   let arr = [...new Set(nums)];
//   answer = arr.length > i ? i : arr.length;
//   //   console.log(answer);

//   return answer;
// }

//문제 51

// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수,
//  solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다.
//  (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다
// solution(5, 24);
// function solution(a, b) {
//   let answer;
//   const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const date = new Date(2016, a - 1, b);
//   const targetWeekday = date.getDay();
//   answer = day[targetWeekday];

//   return answer;
// }

//문제 52

// 문제 설명
// 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다.
//  기사들은 무기점에서 무기를 구매하려고 합니다.

// 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다.
// 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

// 예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다.
// 만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다.
//  무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

// 기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때,
//  무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

// 제한사항
// 1 ≤ number ≤ 100,000
// 2 ≤ limit ≤ 100
// 1 ≤ power ≤ limit

// solution(10, 3, 2);
// function solution(number, limit, power) {
//   var answer = 0;
//   let arr = [];
//   arr.push(1);
//   for (let i = 2; i <= number; i++) {
//     let num = Math.sqrt(i);
//     if (num % 1 == 0) {
//       let a = 0;
//       for (let j = 2; j < num; j++) {
//         if (i % j == 0) {
//           // console.log(" " + j);

//           a++;
//         }
//       }
//       arr.push(a * 2 + 1 + 2);
//     } else {
//       let a = 0;
//       for (let j = 2; j < num; j++) {
//         if (i % j == 0) {
//           a++;
//         }
//       }
//       arr.push(a * 2 + 2);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > limit) {
//       arr[i] = power;
//     }
//   }
//   //   console.log(arr);
//   arr.map((x) => {
//     answer += x;
//   });
//   //   console.log(answer);
//   return answer;
// }

//문제 53

// 모의고사
// 제출 내역
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아
//  return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

// solution([1, 1, 1]);
// function solution(answers) {
//   const patterns = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];

//   const scores = [0, 0, 0];
//   answers.forEach((answer, idx) => {
//     patterns.forEach((pattern, pIdx) => {
//       if (answer === pattern[idx % pattern.length]) {
//         scores[pIdx]++;
//       }
//     });
//   });
//   const maxScore = Math.max(...scores);
//   return scores
//     .map((score, idx) => (score === maxScore ? idx + 1 : null))
//     .filter((person) => person !== null);
// }

//문제 54

// 문제 설명
// 과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며,
//  k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

// 한 상자에 사과를 m개씩 담아 포장합니다.
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

// 예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ k ≤ 9
// 3 ≤ m ≤ 10
// 7 ≤ score의 길이 ≤ 1,000,000
// 1 ≤ score[i] ≤ k
// 이익이 발생하지 않는 경우에는 0을 return 해주세요.
// solution(3, 4, [1, 2, 3, 1, 2, 3]);
// function solution(k, m, score) {
//   var answer = 0;
//   let arr1 = [];
//   let sortScore = score.sort((a, b) => a - b);

//   for (let i = 0; i < Math.floor(score.length / m); i++) {
//     let arr2 = [];
//     for (
//       let j = score.length - 1 - m * i;
//       j > score.length - 1 - m * 1 - m * i;
//       j--
//     ) {
//       arr2.push(sortScore[j]);
//     }
//     arr1[i] = arr2;
//   }
//   arr1.map((x) => {
//     let Min = Math.min(...x);
//     if (isNaN(Min)) {
//       answer += x[0] * m;
//     } else {
//       answer += Min * m;
//     }
//   });
//   //   console.log(answer);

//   return answer;
// }

//문제 55

// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// solution(10);
// function solution(n) {
//   let answer = 0;
//   for (let i = 2; i <= n; i++) {
//     if (i <= 3) {
//       answer++;
//     } else {
//       let a = Math.floor(Math.sqrt(i));
//       for (let j = 2; j <= a; j++) {
//         if (i % j == 0) {
//           break;
//         } else if (j >= a) {
//           answer++;
//         }
//       }
//     }
//   }
//     console.log(answer);

//   return answer;
// }

// function solution(n) {
//     if (n < 2) return 0; // 2 미만이면 소수는 없음

//     let isPrime = Array(n + 1).fill(true); // 모든 숫자를 소수로 가정
//     isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

//     for (let i = 2; i * i <= n; i++) {
//       if (isPrime[i]) {
//         for (let j = i * i; j <= n; j += i) {
//           isPrime[j] = false; // i의 배수는 소수가 아님
//         }
//       }
//     }

//     return isPrime.filter(Boolean).length; // true 값의 개수를 반환
//   }

//문제 56

// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

// solution([1, 2, 3, 4]);
// function solution(nums) {
//   var answer = 0;
//   let arr1 = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         arr1.push(nums[i] + nums[j] + nums[k]);
//       }
//     }
//   }
//   arr1.map((x) => {
//     let a = true;
//     for (let j = 2; j * j <= x; j++) {
//       if (x % j == 0) {
//         a = false;
//         break;
//       }
//     }
//     if (a) {
//       answer++;
//     }
//   });
//   console.log(answer);

//   return answer;
// }

//gpt해결
// function solution(nums) {
//     let answer = 0;

//     // Helper function to check if a number is a prime
//     function isPrime(num) {
//       if (num < 2) return false;
//       for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;
//       }
//       return true;
//     }

//     // Iterate through all combinations of 3 numbers
//     for (let i = 0; i < nums.length - 2; i++) {
//       for (let j = i + 1; j < nums.length - 1; j++) {
//         for (let k = j + 1; k < nums.length; k++) {
//           const sum = nums[i] + nums[j] + nums[k];
//           if (isPrime(sum)) answer++;
//         }
//       }
//     }

//     return answer;
//   }

//문제 55

// 문제 설명
// 어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다. 벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다.
// 페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다.

// 넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다. 이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다.
// 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다.

// 벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.

// 롤러가 벽에서 벗어나면 안 됩니다.
// 구역의 일부분만 포함되도록 칠하면 안 됩니다.
// 즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다. 현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다.

// 한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다.
//  예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다.

// 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ m ≤ n ≤ 100,000
// 1 ≤ section의 길이 ≤ n
// 1 ≤ section의 원소 ≤ n
// section의 원소는 페인트를 다시 칠해야 하는 구역의 번호입니다.
// section에서 같은 원소가 두 번 이상 나타나지 않습니다.
// section의 원소는 오름차순으로 정렬되어 있습니다.

// solution(5, 4, [1, 3]);
// function solution(n, m, section) {
//   let answer = 0;
//   let i = 0;

//   while (i < section.length) {
//     let start = section[i];
//     answer++;

//     while (i < section.length && section[i] < start + m) {
//       i++;
//     }
//   }

//   // console.log(answer);
//   return answer;
// }

//문제 56

// 문제 설명
// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
//  조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다.
//   문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 30
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

// solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
// function solution(babbling) {
//   var answer = 0;
//   let can = ["aya", "ye", "woo", "ma"];
//   babbling.forEach((word) => {
//     let isValid = true;
//     let pWord = "";
//     while (word.length > 0 && isValid) {
//       let found = false;
//       for (let vWord of can) {
//         if (word.startsWith(vWord)) {
//           if (pWord === vWord) {
//             isValid = false;
//             break;
//           }
//           word = word.slice(vWord.length);
//           pWord = vWord;
//           found = true;
//           break;
//         }
//       }

//       if (!found) {
//         isValid = false;
//       }
//       if (word.length == 0 && isValid) {
//         answer++;
//       }
//     }
//   });
//   console.log(answer);

//   return answer;
// }

//문제 57

// 문제 설명

// 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만,
//  요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
//  역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
//  실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// //1 ~ N 까지의 수를 filter로 검사하여 stages 안에 값이 1~n 보다 크면 갯수 확인

// function solution(N, stages) {
//   const stageFailureRates = [];
//   let totalPlayers = stages.length;

//   for (let i = 1; i <= N; i++) {
//     const currentStagePlayers = stages.filter((stage) => stage === i).length; // 현재 스테이지에서 멈춘 플레이어 수
//     const failureRate = currentStagePlayers / totalPlayers || 0; // 실패율 계산 (0으로 나누는 경우 방지)
//     stageFailureRates.push({ stage: i, failureRate });
//     totalPlayers -= currentStagePlayers; // 다음 스테이지로 넘어간 플레이어 수
//   }

//   // 실패율 내림차순, 스테이지 번호 오름차순 정렬
//   stageFailureRates.sort((a, b) => {
//     if (b.failureRate === a.failureRate) {
//       return a.stage - b.stage;
//     }
//     return b.failureRate - a.failureRate;
//   });
//   console.log(stageFailureRates);

//   // 스테이지 번호만 반환
//   return stageFailureRates.map((item) => item.stage);
// }

//문제 58
// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// 입력 형식
// "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
// 예) 1S2D*3T

// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.
// 출력 형식
// 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
// 예) 37

// 숫자를 기준으로 숫자 앞을 잘라서 여러개로 나눈담에 숫자는 무시하고 뒤에 애들만 계산 하면될?듯
// 숫자와 그 뒤의 문자 패턴 매칭
// console.log(solution("1D#2S*3S"));
// //5?

// function solution(dartResult) {
//   var answer = 0;
//   const input = dartResult;
//   const result = input.match(/\d+[A-Z*#]+/g);
//   console.log(result);

//   let previousNum = 0;
//   result.forEach((element) => {
//     const number = element.match(/\d+/)[0]; // 숫자 추출
//     const letters = element.match(/[A-Z*#]/g); // 문자와 기호 각각 추출
//     let arr = [number, ...letters];
//     console.log(arr);

//     let cal = calC(arr);
//     switch (arr.length) {
//       case 2:
//         answer += cal;
//         previousNum = cal;
//         break;
//       case 3:
//         if (arr[2] === "*") {
//           if (!answer) {
//             answer += cal * 2;
//             previousNum = cal * 2;
//             break;
//           } else {
//             answer += previousNum + cal * 2;
//             previousNum = cal * 2;
//             break;
//           }
//         } else if (arr[2] == 0) {
//           answer += cal;
//           previousNum = cal;
//           break;
//         } else {
//           answer += cal * -1;
//           console.log(cal * -1);

//           previousNum = cal * -1;
//           break;
//         }
//     }
//     console.log(answer);
//   });

//   return answer;
// }

// function calC(ary) {
//   switch (ary[1]) {
//     case "S":
//       return Number(ary[0]);
//     case "D":
//       return Number(ary[0] ** 2);
//     case "T":
//       return Number(ary[0] ** 3);
//   }
// }

//59 문제

// 문제 설명
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
//  학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어,
//   4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
//  체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
//  남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// solution(5, [2, 4], [1, 3, 5]);
//reserve 기준으로 왼쪽부터 판별.
// function solution(n, lost, reserve) {
//   var answer = 0;

//   const realReserve = reserve.filter((x) => !lost.includes(x));
//   const realLost = lost.filter((x) => !reserve.includes(x));
//   realReserve.sort((a, b) => a - b);
//   realReserve.forEach((x) => {
//     let valuesToRemove = [x - 1, x, x + 1];
//     for (const value of valuesToRemove) {
//       if (realLost.includes(value)) {
//         const index = realLost.indexOf(value);
//         realLost.splice(index, 1); // 첫 번째 값 삭제
//         // console.log(`${value} 삭제 후 lost:`, lost);
//         break; // 첫 번째 삭제만 수행
//       }
//     }
//   });
//   answer = n - realLost.length;
//   //   console.log(answer);

//   return answer;
// }

//60번문제.

// 문제 설명
// 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. 1

// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외
// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
//  당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면,
//  당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

// 당첨 번호	31	10	45	1	6	19	결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등
// 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
// 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다.
// 3등을 만드는 다른 방법들도 존재합니다. 하지만, 2등 이상으로 만드는 것은 불가능합니다.
// 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다.
// 5등을 만드는 다른 방법들도 존재합니다. 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때,
//  당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

// 제한사항.
// lottos는 길이 6인 정수 배열입니다.
// lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
// 0은 알아볼 수 없는 숫자를 의미합니다.
// 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
// lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
// win_nums은 길이 6인 정수 배열입니다.
// win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
// win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.
// win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.
// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
// function solution(lottos, win_nums) {
//   let erase = 0; // 지워진 숫자(0)의 개수
//   let same = 0; // 당첨 번호와 일치하는 숫자의 개수

//   // 로또 번호를 순회하며 지워진 숫자와 당첨 숫자 확인
//   lottos.forEach((num) => {
//     if (num === 0) {
//       erase++;
//     } else if (win_nums.includes(num)) {
//       same++;
//     }
//   });

//   // 최고 순위와 최저 순위 계산
//   const maxRank = Math.min(7 - (same + erase), 6); //  7등은 존재하지 않으므로 최대 6등
//   const minRank = Math.min(7 - same, 6); // 최소 순위 계산

//   return [maxRank, minRank];
// }

//문제 61

// 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

// 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
//  처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
// s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
// 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 10,000
// s는 영어 소문자로만 이루어져 있습니다.
// solution();

// function solution(s) {
//   let preW = "";
//   let countA = 0;
//   let countB = 0;
//   let arrW = s.split("");
//   var answer = 0;
//   arrW.forEach((e, i) => {
//     if (!preW) {
//       preW = e;
//       countA++;
//     } else if (e === preW) {
//       countA++;
//     } else if (e !== preW) {
//       countB++;
//     }
//     if (i === arrW.length - 1) {
//       answer++;
//     } else if (countA === countB && countA >= 1) {
//       preW = "";
//       countA = 0;
//       countB = 0;
//       answer++;
//     }
//   });
//   console.log(answer);

//   return answer;
// }

// function solution(s) {
//   let countA = 0, countB = 0, answer = 0;

//   for (const char of s) {
//     char === s[0] ? countA++ : countB++;

//     if (countA === countB) {
//       answer++;
//       countA = 0;
//       countB = 0;
//     }
//   }

//   return countA > 0 || countB > 0 ? answer + 1 : answer;
// }

//문제 62
// 문제 설명
// 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
// skip에 있는 알파벳은 제외하고 건너뜁니다.
// 예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만
// [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다.
//  나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

// 두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ s의 길이 ≤ 50
// 1 ≤ skip의 길이 ≤ 10
// s와 skip은 알파벳 소문자로만 이루어져 있습니다.
// skip에 포함되는 알파벳은 s에 포함되지 않습니다.
// 1 ≤ index ≤ 20
// solution("aasdf", "wbqd", 5);
// function solution(s, skip, index) {
//   var answer = "";
//   let wordArr1 = s.split("").map((e) => e.charCodeAt());
//   let wordArr2 = skip.split("").map((e) => e.charCodeAt());

//   let wordArr3 = wordArr1.map((e) => {
//     return wordArr2.filter((d) => d > e && d < e + index).length + e + index;
//   });

//   answer = wordArr3
//     .map((e) => {
//       if (e > 122) {
//         e -= 26;
//       }
//       return String.fromCharCode(e);
//     })
//     .join("");

//   // console.log(answer);
//   return answer;
// }

//

//문제 설명
// 휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다. 키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.

// 예를 들어, 1번 키에 "A", "B", "C" 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 "A", 두 번 누르면 "B", 세 번 누르면 "C"가 되는 식입니다.

// 같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다. 이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다. 또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다. 심지어 아예 할당되지 않은 경우도 있습니다. 따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.

// 이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.

// 1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때, 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.

// 단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.

// 제한사항
// 1 ≤ keymap의 길이 ≤ 100
// 1 ≤ keymap의 원소의 길이 ≤ 100
// keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
// 예를 들어 keymap[0] = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
// keymap의 원소의 길이는 서로 다를 수 있습니다.
// keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.
// 1 ≤ targets의 길이 ≤ 100
// 1 ≤ targets의 원소의 길이 ≤ 100 .
// targets의 원소는 알파벳 대문자로만 이루어져 있습니다..
