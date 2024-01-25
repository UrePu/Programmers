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

function solution(n)
{
    var answer = 0;
    var str = n.toString();
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    for(var i = 0; i < str.length ; i++){
        answer += Number(str.charAt(i))
    }
    return answer;
}

//정답이긴 하지만 퍼포먼스가 엄청떨어지는거 같다.
//아래의 코드가 훨씬더 좋게 나오는데 charAt 함수가 별로 좋지않은거 같다.


function solution(n)
{
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
    //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}

//열심히 찾아봤는데 오히려 charAt 사용이 split 보다 좋은듯 하다.
//퍼포먼스가 떨어졌던 이유는 함수내에 기본으로 들어있던 console.log() 한줄 때문이였다.
