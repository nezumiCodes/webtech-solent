let q1 = document.getElementById('q1');
let q1_b1 = document.getElementById('q1-b1');
let q1_b2 = document.getElementById('q1-b2');

let q2 = document.getElementById('q2');
let q2_b1 = document.getElementById('q2-b1');
let q2_b2 = document.getElementById('q2-b2');

let q3 = document.getElementById('q3');
let q3_b1 = document.getElementById('q3-b1');
let q3_b2 = document.getElementById('q3-b2');

let result = document.getElementById('result');

q1_b1.addEventListener('click', () => {
    result.innerHTML = "Congratulations, you're a Gryffindor!";
    result.style.display = "block";
    q1.style.display = "none";
});

q1_b2.addEventListener('click', () => {
    q1.style.display = "none";
    q2.style.display = "block";
});

q2_b1.addEventListener('click', () => {
    result.innerHTML = "Congratulations, you're a Slytherin!";
    result.style.display = "block";
    q2.style.display = "none";
});

q2_b2.addEventListener('click', () => {
    q2.style.display = "none";
    q3.style.display = "block";
});

q3_b1.addEventListener('click', () => {
    result.innerHTML = "Congratulations, you're a Ravenclaw!";
    result.style.display = "block";
    q3.style.display = "none";
});

q3_b2.addEventListener('click', () => {
    result.innerHTML = "Congratulations, you're a Hufflepuff!";
    result.style.display = "block";
    q3.style.display = "none";
});