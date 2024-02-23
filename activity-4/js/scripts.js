//welcome
var user = 'Mike';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Check out this review.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//prices
var price = 15,
    studentDiscount = .10,
    studentPrice = price - (price*studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
