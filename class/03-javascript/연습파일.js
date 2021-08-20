// 실무 1번 문제


let email = "coDecAmp@gmail.com"

email.includes("@")
true
email.split("@")
// (2) ["coDecAmp", "gmail.com"]
let front = email.split("@")[0]

let back = email.split("@")[1]

front = email.split("@")[0]
// "coDecAmp"
back = email.split("@")[1]
// "gmail.com"
fronts=front.toLowerCase()
// "codecamp"
const result = fronts + "@" + back

console.log(result)
// codecamp@gmail.com


// 실무 2번 문제

let email = "codecamp@gmail.com"

email.split("@")
// (2) ["codecamp", "gmail.com"]
front = email.split("@")[0]
// "codecamp"
back = email.split("@")[1]
// "gmail.com"
let result = []

result.push(front[0])
// 1
result.push(front[1])
// 2
result.push(front[2])
// 3
result.push(front[3])
// 4
result.push(front[4])
// 5
result.push(front[5])
// 6
result.push("*")
// 7
result.push("*")
// 8
result.push("@")
// 9

result.push(back)
// 10
result.join("")
// "codeca**@gmail.com"