// array of correct ans for each ques
const correctAns = ['B', 'A', 'B', 'A', 'C', 'C', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const rightAnsLbl = document.querySelectorAll('.rightAns');



form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    //array of received ans
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value];

    //check user answer
    userAns.forEach((ans, index) => {

        if (ans === correctAns[index])
            score++;

    });

    let res = Math.trunc((score / 7) * 100);


    // show result
    //scrollTo(x cordinate, y cordinate;) using window object - after submission the page will auto scroll to the top section
    scrollTo(0, 0); //0,0 indicates the very top location of the page;

    result.classList.remove('d-none');

    //using setiInterval to display final result gradually-like timer animation
    let output = 0;
    const timer = setInterval(() => {

        result.querySelector('span').textContent = `${output}%`;

        //incrementing output until it becomes equals to the res.
        if (output === res)
            clearInterval(timer);
        else
            output++;
    }, 10);  //10 = 10ms, fires the call back func every 10ms;



});

const checkAns = document.querySelector('button');
checkAns.addEventListener('click', () => {

    rightAnsLbl.forEach(label => {
        label.classList.add('bg-success');
    });

});

