//Chapter no.5 (MATH EXPRESSIONS)

//Q1
//Addition
var addnum1 = +prompt("Enter first number for addition");
var addnum2 = +prompt("Enter second number for addition");
var addresult = addnum1 + addnum2
document.write("<h1>"+"Sum of " + addnum1 + " and " + addnum2 + " is " + addresult + "</h1>")

//Q2
//Subtraction
var subnum1 = +prompt("Enter first number for subtraction");
var subnum2 = +prompt("Enter second number for subtraction");
var subresult = subnum1 - subnum2
document.write("<h1>"+"Difference of " + subnum1 + " and " + subnum2 + " is " + subresult + "</h1>")

//Multiplication
var mulnum1 = +prompt("Enter first number for multiplication");
var mulnum2 = +prompt("Enter second number for multiplication");
var mulresult = mulnum1 * mulnum2
document.write("<h1>"+"Multiplication of " + mulnum1 + " and " + mulnum2 + " is " + mulresult + "</h1>")

//Division
var divnum1 = +prompt("Enter first number for division");
var divnum2 = +prompt("Enter second number for division");
var divresult = divnum1 / divnum2
document.write("<h1>"+"Quotient of " + divnum1 + " and " + divnum2 + " is " + divresult + "</h1>")

//Modulus
var modnum1 = +prompt("Enter first number for remainder");
var modnum2 = +prompt("Enter second number for remainder");
var modresult = modnum1 % modnum2
document.write("<h1>"+"Remainder of " + modnum1 + " and " + modnum2 + " is " + modresult + "</h1>")


//Q3
var declared;
document.write("<h1>" + "Value after variable declaration is:" + declared + "</h2>")
declared = 5;
document.write("<h1>" + "Initial value: " + declared + "</h2>")
declared++
document.write("<h1>" + "Value after increment is: " + declared + "</h2>")
var declared = declared + 7
document.write("<h1>" + "Value after addition is: " + declared + "</h2>")
declared--
document.write("<h1>" + "Value after decrement is: " + declared + "</h2>")
var declared = declared % 3
document.write("<h1>" + "The remainder is: " + declared + "</h2>")


//Q4
var movieticketcost = 600
var quantityofmovieticket = 5
var movieticketscost = movieticketcost * quantityofmovieticket
document.write("<h1>" + "Total cost to buy " + quantityofmovieticket +
 " tickets to a movie is " + movieticketscost + "PKR" + "</h2>")

//Q5
var mulnum = +prompt("Write any number to display the table of that number in browser")
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
"<h3>" + mulnum + "*" + 10 + " = " + mulnum*10 + "</h3>" + "<br><br>"

document.write(resultofmultiplication)

//Q6
//Temperature Converter
//Conversion of celsius to fahrenheit
var celsiustemperature = prompt("write a number to convert from Celsius to Fahrenheit ")
var conversion_of_celsius_to_fahrenheit = (celsiustemperature * 9/5) + 32
document.write("<h2>" + "From Celsius to Fahrenheit: <br>" + 
`<h2> ${celsiustemperature}<sup>0</sup>C is ${conversion_of_celsius_to_fahrenheit}<sup>0</sup>F </h2>` +
"</h2>")

//Conversion of fahrenheit to celsius
var fahrenheittemperature = prompt("write a number to convert from Fahrenheit to Celsius")
var conversion_of_fahrenheit_to_celsius = (fahrenheittemperature - 32) * 5/9
document.write("<h2>" + "From Fahrenheit to Celsius: <br>" + 
`<h2> ${fahrenheittemperature}<sup>0</sup>F is ${conversion_of_fahrenheit_to_celsius}<sup>0</sup>C </h2>` +
"</h2><br><br>")


//Q7
var item1price = 650
var item2price = 100
var item1quantity = 3
var item2quantity = 7
var shippingcharges = 100
var total_cost_of_order = item1price * item1quantity + item2price * item2quantity + shippingcharges
document.write(
      `<h1>Shopping Cart</h1><br><br>` + 
      `<h2>Price of item 1 is ${item1price}</h2> <br>` +
      `<h2>Quantity of item 1 is ${item1quantity}</h2> <br>` + 
      `<h2>Price of item 2 is ${item2price} </h2> <br>` + 
      `<h2>Quantity of item 2 is ${item2quantity} </h2> <br>` + 
      `<h2>Shipping Charges ${shippingcharges} </h2> <br><br>` + 
      `<h2>Total cost of your order is ${total_cost_of_order} </h2><br><br>`  
)


//Q8
//Marks Sheet
var totalmarks = 980
var marksobtained = 804
var percentage = marksobtained / totalmarks * 100 + "%"
document.write(
     `<h1>Marks Sheet</h1><br>` + 
    `<h3>Total Marks: ${totalmarks}</h3>` + 
    `<h3>Marks Obtained: ${marksobtained}</h3>` + 
    `<h3>Percentage: ${percentage}</h3> <br><br>` 

)

//Q9
//Currency in PKR
var usdollar = 10
var saudiriyals = 25
var usdollar_topkr = usdollar * 279.65
var usdollar_tosaudiriyals = saudiriyals * 74.56
var totalpkr = usdollar_topkr + usdollar_tosaudiriyals
console.log(totalpkr)

document.write(
    `<h1>Currency in PKR</h1><br>` +
    `<h3>Total Currency in PKR: ${totalpkr}</h3><br<br>` 
)


//Q10
var num = 10
var result = num + 5 * 10 / 2
console.log(result)


//Q11
//Age Calculator
var birthyear = parseInt(prompt("Enter your birth year to calculate your age"))
var currentyear = parseInt(prompt("Enter the current year"))
var age = currentyear - birthyear
document.write(
    `<h1>Age Calculator</h1><br>` +
    `<h3>Current Year : ${currentyear}</h3>` + 
    `<h3>Birth Year: ${birthyear}</h3>` + 
    `<h3>Your Age: ${age-1} or ${age}</h3> <br><br>`
)


//Q12
//The Geometrizer
var radius = 20
var Circumference_of_a_circle = 2 * 3.142 * radius
var area =  Circumference_of_a_circle.toFixed(2)
document.write(
    `<h1>The Geometrizer</h1><br>`+
    `<h3>Radius of a circle: ${radius}</h3>`+
    `<h3>The circumference is: ${Circumference_of_a_circle}</h3>`+
    `<h3>The area is: ${area}</h3>`
)


//Q13
//The Lifetime Supply Calculator
var snack = +prompt("Lifetime Supply Calculator \n \n Enter your favorite snack name")
var currentage = parseInt(prompt("Lifetime Supply Calculator \n \n Enter your current age"))
var maximumage = parseInt(prompt("Lifetime Supply Calculator \n \n Enter your maxium age you think you can eat your favorite snack"))
var amount_of_snack_per_day = +prompt("Lifetime Supply Calculator \n \n Enter the amount of your favoite snack you think you can eat per day")
var total_amount_of_snack_in_life = (maximumage - currentage) * (amount_of_snack_per_day * 365)
document.write(
    `<h1>The Lifetime Supply Calculator</h1><br>`+ 
    `<h2>Favourite Snack: ${snack}</h2>` +
    `<h2>Current Age: ${currentage}</h2>` +
    `<h2>Estimated Maximum Age: ${maximumage}</h2>` +
    `<h2>Amount Of Snacks Per Day: ${amount_of_snack_per_day}</h2>` +
    `<h2>You will need ${total_amount_of_snack_in_life} ${snack} to last you until the ripe old age of ${maximumage}</h2>` 
)

document.write(`<br><br><br><h1>Chapter 6 to 9</h1><br>`)
document.write(`<a href="chapter6to9.html" target="_blank">Chapter 6 to 9 link</a>`)


