//2024-08-08
function solution(s) {
  let regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}







//2023-03-20
// // function solution(s) {
// //     var answer = true;
// //     if(Number(s)){
// //         if(s.length==4||s.length==6){
// //           answer=true  
// //         }
// //         else{
// //             answer=false
// //         }
// //     }else if(isNaN(s)){
// //         answer=false
        
// //     }
// //     return answer;
// // }
// // 이렇게하면 테스트 11번 케이스가 안댐

// function solution(s) {
//   // 길이가 4 혹은 6이 아니면 false 반환
//   if (s.length !== 4 && s.length !== 6) return false;
//   // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
//   for (let i = 0; i < s.length; i++) {
//     if (isNaN(Number(s[i]))) return false;
//   }
//   // 위의 모든 조건에 포함되지 않으면
//   // (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
//   return true;
// }