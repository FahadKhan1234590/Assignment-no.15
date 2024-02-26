//Chapter 6 to 9

//Q1
var a = 10
document.write(
    `<h1><br>Result</h1>` + 
    `<h2>The value of a is: ${a}</h2><br>` +

    `<h2>The value of ++a is: ${++a}</h2>` +
    `<h2>Now the value of a is: ${a}</h2><br>`+

    `<h2>The value of a++ is: ${a++}</h2>`+
    `<h2>Now the value of a is: ${a}</h2> <br>`+
    
    `<h2>The value of --a is: ${--a}</h2>`+ 
    `<h2>Now the value of a is: ${a}</h2><br>`+
    
    `<h2>The value of a-- is: ${a--}</h2>` +
    `<h2>Now the value of a is: ${a}</h2><br><br>`
)


//Q2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(
    `<h1>If a = 2, b = 1, <br> Then find the value of <br> --a - --b + ++b + b--; </h1>`+
    `<h1>Now Lets Understand and Solve this:</h1>`+
    `<h2>a = 2 <br> b = 1</h2>`+
     `<h2>(--a = 1) - (--b = 0) + (++b = 1) + (b-- = 1 {because the value of b is now 0 <br>
      but it will change in second statement so for now it will be 1 }) </h2>` +
     `<h2>Now it will be like this</h2>`+
     `<h2>1 - 0 + 1 + 1`+
     `<h2>Answer is 3</h2>`
) 


//Q3
var name = prompt("Enter your name to be greeted")
alert(`Hello ${name}!`)

//Q5
var mulnum = +prompt("Write any number to display the table of that number in browser")
if (mulnum == 0){
   mulnum = 5
}
var resultofmultiplication = 
"<h3>" + mulnum + "*" + 1 + " = " + mulnum*1 + "</h3>" +
"<h3>" + mulnum + "*" + 2 + " = " + mulnum*2 + "</h3>" +
"<h3>" + mulnum + "*" + 3 + " = " + mulnum*3 + "</h3>" +
"<h3>" + mulnum + "*" + 4 + " = " + mulnum*4 + "</h3>" +
"<h3>" + mulnum + "*" + 5 + " = " + mulnum*5 + "</h3>" +
"<h3>" + mulnum + "*" + 6 + "= " + mulnum*6 + "</h3>" +
"<h3>" + mulnum + "*" + 7 + "= " + mulnum*7 + "</h3>" +
"<h3>" + mulnum + "*" + 8 + "= " + mulnum*8 + "</h3>" +
"<h3>" + mulnum + "*" + 9 + " = " + mulnum*9 + "</h3>" +
"<h3>" + mulnum + "*" + 10 + " = " + mulnum*10 + "</h3>" + "<br><br><br>"

document.write(resultofmultiplication)


//Q6
var subject1 = prompt('Enter First Subject Name')
var subject2 = prompt('Enter Second Subject Name')
var subject3 = prompt('Enter Third Subject Name')
var total_marks_for_each_subject = 100
var obtained_marks_in_subject1 = 54
var obtained_marks_in_subject2 = 54
var obtained_marks_in_subject3 = 48
var percentage_in_subject_1 = 54
var percentage_in_subject_2 = 54
var percentage_in_subject_3 = 48

var totalmarks = 300
var totalobtainedmarks = obtained_marks_in_subject1 + obtained_marks_in_subject2 + obtained_marks_in_subject3
var totalpercentage = totalobtainedmarks / totalmarks * 100

document.write(
    `<table cellpadding="7">
        <tr>
            <td><h2>Subject</h2></td>
            <td><h2>Total Marks</h2></td>
            <td><h2>Obtained Marks</h2></td>
            <td><h2>Percentage</h2></td>
        </tr>
        <tr>
            <td><h2>${subject1}</h2></td>
            <td><h2>100</h2></td>
            <td><h2>54</h2></td>
            <td><h2>54%</h2></td>
        </tr>
        <tr>
            <td><h2>${subject2}</h2></td>
            <td><h2>100</h2></td>
            <td><h2>54</h2></td>
            <td><h2>54%</h2></td>
        </tr>
        <tr>
            <td><h2>${subject3}</h2></td>
            <td><h2>100</h2></td>
            <td><h2>48</h2></td>
            <td><h2>48%</h2></td>
        </tr>
        <tr>
            <td></td>
            <td><h2>${totalmarks}</h2></td>
            <td><h2>${totalobtainedmarks}</h2></td>
            <td><h2>${totalpercentage}%</h2><br><br></td>
        </tr>
    </table>`
)

document.write(
    `<h1>Home Pdf Chp 6-9</h1>` + 
    `<a href="homepdfchp6-9.html" target="_blank">homepdfchp6-9</a>`
)
