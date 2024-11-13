//1번

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