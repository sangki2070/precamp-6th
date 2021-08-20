if(1+1 === 2){
    console.log("정답입니다.")
}
// VM349:2 정답입니다.


if(1+1 === 3){
    console.log("정답입니다.")
} else {

    console.log("틀렸습니다.")
}
// VM446:5 틀렸습니다.

let age = 13

age
// 13
if (age >= 20) {
    console.log("성인입니다.")

} else if (age >=8) {
    console.log("학생입니다.")
} else {
    consol.log("어린이입니다.")
}
// VM787:5 학생입니다.

if (age >= 20) {
    console.log("성인입니다.")

} else if (age >=8) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
// VM859:7 어린이입니다.

const profile = {
    name: "철수",
    age: 17,
    school: "다람쥐고등학교"
}

profile.name
// "철수"
profile.age
// 17

// 조건문 연습문제


const profile = {
    name: "철수",
    age: 12,
    school:"다람쥐초등학교"
}

if (profile.age >= 20){
    console.log("성인입니다.")
} else if (profile.age>=8) {
    console.log("학생입니다.")

} else {
    console.log("어린이입니다.")
}

// 학생입니다.