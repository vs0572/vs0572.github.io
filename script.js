const upvote1 = document.getElementById("upvote1");
const downvote1 = document.getElementById("downvote1");
const count1text = document.getElementById("count1");

let count1 = 32;
let click1 = false;

upvote1.addEventListener("click", function () {
    if(!click1){
	    count1++;
	    count1text.textContent = count1;
	    click1 = true;
    }
});

downvote1.addEventListener("click", function () {
    if(!click1){
	    count1 = count1-1;
	    count1text.textContent = count1;
	    click1 = true;
    }
});

const upvote2 = document.getElementById("upvote2");
const downvote2 = document.getElementById("downvote2");
const count2text = document.getElementById("count2");

let count2 = 42;
let click2 = false;

upvote2.addEventListener("click", function () {
    if(!click2){
	    count2++;
	    count2text.textContent = count2;
	    click2 = true;
    }
});

downvote2.addEventListener("click", function () {
    if(!click2){
	    count2 = count2-1;
	    count2text.textContent = count2;
	    click2 = true;
    }
});

const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const questionPopup = document.getElementById("questionPopup");

openPopupButton.addEventListener("click", function () {
    questionPopup.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
    questionPopup.style.display = "none";
});

const questionForm = document.getElementById("questionForm");

questionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    questionPopup.style.display = "none";
});

const openAnswerPopupButtons = document.querySelectorAll(".answer");
const closeAnswerPopupButton = document.getElementById("closeAnswerPopup");
const answerPopup = document.getElementById("answerPopup");

openAnswerPopupButtons.forEach((openButton) => {
    openButton.addEventListener("click", function () {
        answerPopup.style.display = "block";
    });
});

closeAnswerPopupButton.addEventListener("click", function () {
    answerPopup.style.display = "none";
});

const answerForm = document.getElementById("answerForm");

answerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    answerPopup.style.display = "none";
});

const upvote3 = document.getElementById("upvote3");
const downvote3 = document.getElementById("downvote3");
const count3text = document.getElementById("count3");

let count3 = 50;
let click3 = false;

upvote3.addEventListener("click", function () {
    if(!click3){
	    count3++;
	    count3text.textContent = count3;
	    click3 = true;
    }
});

downvote3.addEventListener("click", function () {
    if(!click3){
	    count3 = count3-1;
	    count3text.textContent = count3;
	    click3 = true;
    }
});



