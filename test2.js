const a = [1, "콜라", true];
a[1] = "포카리";
console.log(a);
//a참조 타입
console.log(`콜라가 좋아 ${a[1]}`);
//재할당의 페해

//얕은 복사
const b = a;
console.log(b);
