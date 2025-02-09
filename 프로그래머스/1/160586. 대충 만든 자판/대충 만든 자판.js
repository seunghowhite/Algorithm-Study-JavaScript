//2024-11-06
function solution(keymap, targets) {
    const answer = [];
    const keySetUp = {}
    for (const items of keymap) {
        items.split('').forEach((char, index) => keySetUp[char] = (keySetUp[char] < index+1 ? keySetUp[char] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += keySetUp[item], 0) || -1)
    }
    return answer;
}









//2023-03-20
// function solution(keymap, targets) {
//   let answer = [];

//   targets.forEach((string) => {
//     let count = 0;

//     for (let i = 0; i < string.length; i++) {
//       let currentIndex = -1;

//       for (let j = 0; j < keymap.length; j++) {
//         if (
//           keymap[j].indexOf(string[i]) > -1 &&
//           (currentIndex === -1 ||
//             keymap[j].indexOf(string[i]) < currentIndex)
//         ) {
//           currentIndex = keymap[j].indexOf(string[i]);
//         }
//       }

//       if (currentIndex !== -1) {
//         count += currentIndex + 1;
//       } else {
//         count = -1;
//         break;
//       }
//     }

//     answer.push(count);
//   });

//   return answer;
// }
