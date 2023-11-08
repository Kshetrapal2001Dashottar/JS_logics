function calculate() {

    let num1 = prompt("Enter num1");

    if (isNaN(num1) || num1.trim() === '') {
        alert("Please re-enter Num1");
        return;
    }

    let num2 = prompt("Enter num2");
    if (isNaN(num2) || num2.trim() === '') {
        alert("Please re-enter Num2");
        return;
    }

    let operator = prompt("Enter operator");
    result = '';

    //Method 1
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            alert("invalid operator")
    }

    // // if (operator == '+') {
    // //     result = num1 + num2
    // // }
    // // else if (operator == '-') {
    // //     result = num1 - num2
    // // }
    // // else if (operator == '*') {
    // //     result = num1 * num2
    // // }
    // // else if (operator == '/') {
    // //     result = num1 / num2
    // // }
    // // else {
    // //     alert("invalid operator");
    // // }
    // // console.log(result);

    document.querySelector(".resultA").innerHTML = result;

}
// function calculate() {
//     let num1 = Number(prompt("Enter n1"));
//     let num2 = Number(prompt("Enter n2"));
//     let operator = prompt("Enter operator");
//     let result = '';

//     const operators = {
//         '+': (num1, num2) => num1 + num2,
//         '-': (num1, num2) => num1 - num2,
//         '*': (num1, num2) => num1 * num2,
//         '/': (num1, num2) => num1 / num2
//     };

//     if (operator in operators) {
//         result = operators[operator](num1, num2);
//     } else {
//         alert("Invalid operator");
//     }


// }


function tempConvert() {
    let num1 = prompt("enter temperature");
    if (isNaN(num1) || num1.trim() === ('')) {
        alert("Please re-enter temperature");
        return;
    }
    let tempUnit = prompt("enter unit");
    let result1 = '';

    if (tempUnit == 'f' || tempUnit == 'F') {
        result1 = ((parseFloat(num1) - 32) * 5) / 9;

        document.querySelector(".resultB").innerHTML = `${result1}C`;


    }
    else if (tempUnit == 'c' || tempUnit == 'C') {
        result1 = ((9 * parseFloat(num1)) / 5) + 32;

        document.querySelector(".resultB").innerHTML = `${result1}F`;

    }
    else {
        alert("Invalid unit")
    }
}


// Area calculator

function AreaCalculator() {
    let drop = document.getElementById("area").value;
    let result = 0;
    // console.log(drop)
    if (drop == 'circle') {
        let r = Number(prompt("Enter radius"));
        if (isNaN(r) || r <= 0) {
            alert("Please enter valid radius");
            return;
        }

        else {
            result = (22 / 7) * r * r;

        }

    }
    else if (drop == 'rectangle') {
        let l = prompt("Enter length1");
        if (isNaN(l) || l <= 0) {
            alert("Please enter valid length1");
            return;
        }
        let b = prompt("Enter length2");
        if (isNaN(b) || b <= 0) {
            alert("Please enter valid length2");
            return;
        }
        else {
            result = l * b;
        }


    }
    else if (drop == 'triangle') {
        let h = Number(prompt("Enter height"));
        if (isNaN(h) || h <= 0) {
            alert("Please enter valid height");
            return;
        }
        let b = Number(prompt("Enter base"));
        if (isNaN(b) || b <= 0) {
            alert("Please enter valid base");
            return;
        }
        else {
            result = 0.5 * b * h;
        }

    }
    document.getElementById("resultC").innerHTML = result.toFixed(2);
}

// String Case Manupalation

function StringCase() {
    let str = prompt("Enter string");
    let drop = document.getElementById("case").value;
    let result = '';
    if (drop == 'uppercase') {
        // Method 1
        result = str.toUpperCase();


        // Method 2

        // for (let i = 0; i < str.length; i++) {
        //     if (str[i] >= 97 && str[i] <= 113) {
        //         str[i] -= 32;
        //     }
        // }
        // console.log(str);

    }

    else if (drop == 'lowercase') {
        result = str.toLowerCase();
    }

    else if (drop == 'capitalize') {
        let arr = str.split(" ");

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
            }

        }
        result = arr.join(" ");
        console.log(result);
        // console.log(arr);
    }
    document.getElementById("resultD").innerHTML = result;

}

// Palindrome Check

function checkPalindrome() {

    let str = prompt("Enter String").trim();

    console.log(str.length);

    let result = "";
    // Method1
    // let revStr = [...str].reverse().join('');
    // if (revStr == str) {
    //     result += "Palindrome";
    // }
    // else {
    //     result += "Not Palindrome";
    // }

    //Method2
    let valid = true;
    for (let i = 0; i < str.length / 2; i++) {

        if (str[i] != str[str.length - i - 1]) {
            valid = false;
            break;
        }


    }
    if (valid) {
        result += "Palindrome";
    }
    else {
        result += "Not Palindrome";
    }

    document.getElementById("resultE").innerHTML = `${result}`;

}

// Count Word
function countWords() {
    let str = prompt("Enter Sentence");
    let arr = str.split(" ");
    console.log(arr);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            newArr.push(arr[i]);
        }
    }
    // console.log(q);
    document.getElementById("resultF").innerHTML = newArr.length;

}

//Count Vowles
function countVowels() {
    let str = prompt("Enter String");
    let count = 0;
    //Method 1
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
    //         count++;
    //     }
    // }

    //Method 2
    count += [...str].filter(c => 'aeiouAEIOU'.includes(c)).length;
    document.getElementById('resultG').innerHTML = count;


}



//Sum array

function sumArray() {
    let arr = prompt("Enter , separated input of arrays");
    let newArr = arr.split(',');
    // console.log(newArr);
    let sum = 0;
    //Method 1
    // for (let i = 0; i < newArr.length; i++) {
    // let temp = newArr[i]
    // if (isNaN(temp) || temp.trim() === ('')) {
    //     alert("Please enter valid input");
    //     return;
    // }
    // else{
    //     sum += Number(temp);
    // } 
    //     
    // }

    //Method 2
    let r = [];
    for (let i = 0; i < newArr.length; i++) {
        let temp = newArr[i]
        if (isNaN(temp) || temp.trim() === ('')) {
            alert("Please Enter valid input");
            return;
        }
        else {
            r.push(parseFloat(temp));
        }

    }
    sum += r.reduce((total, item) => total + item)
    document.getElementById("resultH").innerHTML = sum;
}


// List Filtering
function filterEvens() {
    let arr = prompt("Enter , separated number of arrays");
    let newArr = arr.split(',');

    let ans = [];
    for (let i = 0; i < newArr.length; i++) {
        let temp = newArr[i];
        if (isNaN(temp) || temp.trim() === '') {
            alert("Please Enter valid input");
            return;
        }
        else if (temp % 2 == 0) {
            ans.push(temp);
        }
    }

    document.getElementById("resultI").innerHTML = ans;
}

// Min Max
function findMinMax() {
    let arr = prompt("Enter , separated arrays");
    let newArr = arr.split(',');
    let newArr2 = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] != '' && newArr[i].includes(" ") == 0) {
            newArr2.push(newArr[i]);
        }
    }
    let mini = Number(newArr[0]);
    let maxi = Number(newArr[0]);
    //Method 1
    for (let i = 0; i < newArr.length; i++) {

        if (isNaN(newArr2[i])) {
            alert("Please enter valid input");
            return;
        }
        else {
            if (Number(newArr2[i]) > maxi) {
                maxi = Number(newArr[i]);
            }
            if (Number(newArr2[i]) < mini) {
                mini = Number(newArr[i]);
            }
        }
    }

    //Method 2
    //  let ans = [];
    // for (let i = 0; i < newArr.length; i++) {

    //     if (isNaN(newArr[i])) {
    //         alert("Please enter valid input");
    //         return;
    //     }
    //     else {
    //         ans.push(Number(newArr[i]));
    //     }
    // }
    // mini = Math.min(...ans);
    // maxi = Math.max(...ans);

    document.getElementById("resultJ").innerHTML = `Minimum ${mini} and Maximum ${maxi}`;
}

function findMax() {
    let num = prompt("enter numbers").trim()

    let arr = num.split(',');
    let ans = [];
    for (i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (isNaN(temp) || temp.trim() === '') {
            alert("Please enter valid input");
            return
        }
        else if (temp != '') {
            ans.push(temp);
        }

    }
    let newArr = [];
    for (let i of ans) {
        newArr.push(parseFloat(i))
    }
    let max = Math.max(...newArr)

    document.getElementById('resultZ').innerHTML = max
}

function findMin() {
    let num = prompt("enter numbers");
    let arr = num.split(",");
    let ans = [];
    for (i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (isNaN(temp) || temp.trim() === '') {
            alert("Please enter valid input");
            return
        }
        else {
            ans.push(temp);
        }

    }
    let newarr = [];
    for (let i of ans) {
        newarr.push(Number(i));

    }
    let min = Math.min(...newarr)




    document.getElementById('resultY').innerHTML = min

}

// List Reverse
function reverseList() {
    let arr = prompt("Enter , separated arrays");
    let newArr = arr.split(',');
    let ans = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        if (newArr[i] != '') {
            ans.push(newArr[i]);
        }
    }
    console.log(ans);

    document.getElementById("resultK").innerHTML = ans;
}

//String Splitter
function stringToList() {
    let str = prompt("Enter String");
    let arr = str.split(' ');
    let ans = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] != '') {
    //         ans.push(arr[i]);
    //     }
    // }

    ans = arr.filter((val) => val != '');

    document.getElementById('resultL').innerHTML = ans;
}


//Occurence Counter

function countOccurences() {

    // a character occurence
    let str = prompt("Enter String");
    let chr = prompt("Enter character");
    let count = 0;
    //Mthod 1 a character occurence
    // for (let i = 0; i < str.length; i++) {
    //     if (chr == str[i]) {
    //         count++;
    //     }
    // }

    // Method 2 word in sentence

    let temp = str.split(" ");
    for (let i = 0; i < temp.length; i++) {
        if (chr != '' && chr == temp[i]) {
            count++;
        }
    }

    // Method 3 Search a substring in a string

    // let s1 = 'thisistheteprorystringforstringsearch';
    // let s2 = 'string';
    // count = s1.match(/string/g).length;
    document.getElementById("resultM").innerHTML = count;
}


//Remove Duplicate
function removeDuplicate() {
    let str = prompt("Enter String separated by ,");
    let arr = str.split(',');
    const mySet = new Set();
    for (let i = 0; i < arr.length; i++) {
        mySet.add(arr[i]);
    }
    let ans = Array.from(mySet);
    document.getElementById("resultN").innerHTML = ans;
}


// List Sorter

function sortList() {
    let str = prompt("Enter Numbers");
    let arr = str.split(',');
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (isNaN(temp) || temp.trim() === '') {
            alert("Please enter valid input");
            return;
        }

        else if (temp != '') {
            ans.push(parseFloat(arr[i]));
        }
    }
    // Bubble sort
    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans.length - 1; j++) {
            if (ans[j] > ans[j + 1]) {
                // let t = ans[j];
                // ans[j] = ans[j + 1];
                // ans[j + 1] = t;
                [ans[j], ans[j + 1]] = [ans[j + 1], ans[j]];
            }
        }
    }

    //Insertion sort
    // for (let i = 1; i < ans.length; i++) {
    //     let currentValue = ans[i]
    //     let j
    //     for (j = i - 1; j >= 0 && ans[j] > currentValue; j--) {
    //         ans[j + 1] = ans[j]
    //     }
    //     ans[j + 1] = currentValue
    // }

    document.getElementById("resultO").innerHTML = ans;
}


//Grade assigner

function assignGrade() {
    let str = prompt("Enter score between 0 to 100");
    let arr = str.split(',');
    let ans = [];
    let grades = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (isNaN(temp) || temp.trim() === '') {
            alert("Please enter valid score");
            return;
        }
        else if (temp != '') {
            ans.push(parseFloat(temp));
        }
    }
    for (let i = 0; i < ans.length; i++) {

        let score = ans[i];
        if (score < 0 || score > 100) {
            alert("Please enter valid score")
        }
        else if (score > 90) {
            temp = 'A';
        } else if (score > 80) {
            temp = 'B';
        } else if (score > 70) {
            temp = 'C';
        } else if (score > 65) {
            temp = 'D';
        } else if (score < 65) {
            temp = 'F';
        }

        grades.push(temp);
    }



    document.getElementById("resultP").innerHTML = grades;
}
