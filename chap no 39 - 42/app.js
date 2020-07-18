/*************** FUNCTIONS | SWITCH | WHILE | DO-WHILE ******************/

// Task: 1

// function power(a, b) {
//     var ans = 1
//     for (var i = 0; i < b; i++) {
//         ans *= a
//     }
//     return ans
// }

// console.log(power(2, 5))



// Task: 2

// function isLeapYear(year) {

//     if (year % 4 === 0) {
//         return `${year} Leap year`
//     }

//     return `${year} is not Leap year`
// }

// var year = +prompt("Enter a year (i.e. 2010, 2012 ....)")
// console.log(isLeapYear(year))



// Task: 3

// function calcS(a, b, c) {
//     return (a + b + c) / 2
// }

// function area(a, b, c) {
//     var S = calcS(a, b, c)
//     return S * (S - a) * (S - b) * (S - c)
// }

// console.log(calcS(5, 3, 2))



// Task: 4

// function average(sub1, sub2, sub3) {
//     return (sub1 + sub2 + sub3) / 3
// }
// function percent(avg) {
//     return (avg / 150) * 100
// }
// function mainFunc(sub1, sub2, sub3) {
//     var avg = average(sub1, sub2, sub3)
//     return percent(avg).toFixed(2)
// }

// console.log(mainFunc(30, 45, 38))



// Task: 5

// function findIndex(string, char) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(findIndex('Alo', 'o'))



// Task: 6

// var sentence = 'The quick brown fox jump over the lazy dog'

// function toDeleteVowel(senten) {
//     var arr = ['a', 'e', 'i', 'o', 'u']
//     var sentence = senten.split('')
//     for (let i = 0; i < sentence.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === sentence[i]) {
//                 sentence[i] = ''
//                 console.log(sentence[i])
//                 break
//             }
//         }
//     }
//     return sentence.join('')
// }

// console.log(toDeleteVowel(sentence))




// Task: 7

// function twoVowel() {
//     var string = "Pleases read this application and give me gratuity"
//     var found =  string.match(/[aeiou]{2}/g)
//     console.log(found)
// }

// twoVowel()


// Task: 8

// function meters(km) {
//     return `${km * 1000} meters`
// }
// function inches(km) {
//     return `${km * 39370.1}  inhces`
// }
// function feet(km) {
//     return `${km * 3280.84}  feet`
// }
// function centimeters(km) {
//     return `${km * 10000}  centimeters`
// }

// var km = +prompt('Enter distance in km.')
// console.log(meters(km))
// console.log(inches(km))
// console.log(feet(km))
// console.log(centimeters(km))


// Task: 9

// function overtimePay() {
//     var paid = 12
//     var overtimePay = 0
//     var hours = 40
//     var total = (hours * paid) + (overtimePay * paid)
//     return total
// }
// console.log(overtimePay())



// Task: 10
// function noteSelection(mainAmount) {
//     var noteGive = []
//     var amountRem = 0; amount = mainAmount

//     amountRem = amount % 100
//     noteGive.push(`${(amount - amountRem) / 100} hundreds notes`)

//     amount = amountRem
//     amountRem = amount % 50
//     noteGive.push(`${(amount - amountRem) / 50} fifty notes`)

//     amount = amountRem
//     amountRem = amount % 10
//     noteGive.push(`${(amount - amountRem) / 10} ten notes`)

//     // console.log(noteGive)
//     return `You will have ${noteGive[0]} ${noteGive[1]} ${noteGive[2]}`
// }

// var amount = +prompt("Enter a amount to be widthdraw")
// console.log(noteSelection(amount))









