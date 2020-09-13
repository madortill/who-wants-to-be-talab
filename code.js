const termList = [
    {
        quess: 'מהי אחריות המפקדה הממונה (חיל) במסגרת יחסי הגומלין שלה עם הבה"ד בתחום התל"ב?',
        ans0: "לכתוב תפיסות בתחום ההדרכה וההכשרה",
        ans1: "להוביל תהליכי פיתוח של הכשרות חדשות",
        ans2: "לקבוע את רף ההסמכה הנדרש בהכשרות",
        ans3: "להנחות מקצועיות בנוגע לאופן כתיבת תיקי יסוד",
        img: "#"
    },
    {
        quess: 'מה תפקידו של מפקד הבה"ד בתחום התל"ב?',
        ans0: 'לקבוע את מדיניות האיכות להדרכה בבה"ד',
        ans1: 'ליזום כתיבה של נהלי תל"ב חדשים',
        ans2: 'לבקר עמידת המסגרות בדרישות התל"ב',
        ans3: 'להוביל סקר מכין במסגרות התל"ב',
        img: "#"
    },
    {
        quess: 'כל כמה זמן נדרש לתקף תיק יסוד של הכשרה?',
        ans0: "אחת ל-5 שנים לפחות",
        ans1: "בכל פעם שמבצעים שינויים בהכשרה",
        ans2: "אחת ל-3 שנים לפחות",
        ans3: 'בכל פעם שצריך לעדכן לקחים מההכשרה',
        img: "#"
    },
    {
        quess: "מהם שני הפרמטרים שצריך לבדוק עבור כל פריט במבחן ידע?",
        ans0: 'מהימנות, תוקף',
        ans1: 'פרקטיות, תוקף',
        ans2: 'בלבדיות, מהימנות',
        ans3: 'מיצוי, פרקטיות',
        img: "#"
    },
    {
        quess: "מהי המטרה המרכזית של הכנת סגל",
        ans0: 'לרענן את הידע והמיומניות של הסגל ע"פ מטרות ההכשרה',
        ans1: "לגבש את הסגל לקראת פתיחת מחזור הכשרה",
        ans2: "לתקף את מערכי השיעור של הסגל בהתאם ללקחי מחזור קודם",
        ans3: "להתאים את שיטות ההדרכה של הסגל למאפייני החניכים",
        img: "#"
    },

    {
        quess: "מהו המדד שנהוג לציין במסגרת תהליך ההערכה של ההכשרה?",
        ans0: 'היחס בין הזמן המוקדש ללימוד תיאורטי לבין אימון מעשי',
        ans1: "היחס בין ציון מבחן ממוצע במחזור נוכחי אל מול  מחזורים קודמים",
        ans2: "היחס בין מספר החניכים לבין כמות אמצעי התרגול הקיימים",
        ans3: 'היחס בין מספר אנשי הסגל לבין מספר החניכים בהכשרה',
        img: "#"
    },
    {
        quess: "מה מבין החומרים הבאים מוגדר כמידע הדרכתי?",
        ans0: "כלי הערכה (מבחנים, דפי תצפית)",
        ans1: "תיק אישי של החניך",
        ans2: "נתונים על ההכשרה",
        ans3: "תוכנית חניכה של הסגל",
        img: "#"
    },
    {
        quess: 'מאגר המידע ההדרכתי של הבה"ד מנוהל בחלוקה לשלוש רמות. מהי הרמה השניה?',
        ans0: "קורס אב עקרוני",
        ans1: "מחזור קורס פרטני",
        ans2: 'בה"ד',
        ans3: "מסגרת (ענף/מגמה)",
        img: "#"
     }

    /* an example for question template 
    {
    //     quess: "שאלה",
    //     ans0: "תשובה נכונה",
    //     ans1: "תשובה 1",
    //     ans2: "תשובה 2",
    //     ans3: "תשובה 3",
    //     img: "URL של התמונה"
    //      if there are no url put "#"" insted
     }*/

];

//value of the questions
const quesValue = ["0", "500", "1,000", "10,000", "50,000", "100,000", "500,000", "800,000", "1,000,000", "1,000,000"];



var quessOrder = [];
var ansArr = [0, 1, 2, 3];
var currQues = 0;
var life = 0;
var timer;

if('serviceWorker' in navigator && location.hostname !== 'localhost'){
    let location = "../"
}

window.onload = () => {
    startGame();

};

function startGame() {
    quessOrder = [];
    ansArr = [0, 1, 2, 3];
    currQues = 0;
    life = 0;
    //not on use make another order of the questions
    //createQuessOrder();

    if (document.querySelectorAll(".help.disable")[0]) {
        document.querySelector(".help.disable").style.visibility = "visible";
        document.querySelector(".help.disable").classList.remove("disable");
    }
    if (document.querySelectorAll(".help.disable")[1]) {
        document.querySelector(".help.disable").style.visibility = "visible";
        document.querySelector(".help.disable").classList.remove("disable");
    }

    document.querySelectorAll(".help")[0].addEventListener("click", onClickHelp);
    document.querySelectorAll(".help")[1].addEventListener("click", onClickHelp);

    enterText();

}

//the function enter the informaition the the specific place
function enterText() {

    //chaeck if there is an image to replace the background of the question
    if (termList[currQues].img != "#") {
        document.getElementById("quess-card").style.backgroundImage = `url("${termList[currQues].img}")`;
    }


    //enter the value of the money and the
    document.getElementById("quess-value").innerHTML = quesValue[currQues + 1];
    document.getElementById("money-bank").innerHTML = quesValue[currQues];


    //change the question text
    document.getElementById("quess-card").innerHTML = termList[currQues].quess;

    //shffel the answers array to make the answers random
    ansArr = shuffle(ansArr);

    //enter to the answers card the text and adds listeners
    var allNotes = document.querySelectorAll(".ans");
    for (var i = 0; i < ansArr.length; i++) {
        allNotes[i].innerHTML = termList[currQues][`ans${ansArr[i]}`];
        allNotes[i].addEventListener("click", cheack);
    }
    //enter the quess number
    document.getElementById("quess-count").innerHTML = `${currQues + 1}/${termList.length}`;
}


// the function checks if the user clicked on the right answer or not
function cheack(e) {
    currQues++;

    if (currQues == termList.length) {
        if (e.currentTarget.textContent == termList[currQues - 1].ans0) {

            //change cards color- green color
            e.currentTarget.classList.add("correct");
        }
        else {
            //remove life counter and img
            document.querySelectorAll(".heart")[life].style.visibility = "hidden";
            life++;

            //change cards color
            //red color
            e.currentTarget.classList.add("worng");

            //green color- show the right answer
            var allNotes = document.querySelectorAll(".ans");
            for (var i = 0; i < ansArr.length; i++) {
                if (allNotes[i].textContent == termList[currQues - 1].ans0) {
                    allNotes[i].classList.add("correct");
                }
            }
        }
        timer = setTimeout(winMessege, 2500, e.currentTarget, document.querySelector(".correct"));
    }
    else {

        //cheack if the text in the card that has click is the same as the correct answer
        if (e.currentTarget.textContent == termList[currQues - 1].ans0) {

            //change cards color- green color
            e.currentTarget.classList.add("correct");

            timer = setTimeout(nextQuestionRight, 2500, e.currentTarget);
        }
        else {
            //remove life counter and img
            document.querySelectorAll(".heart")[life].style.visibility = "hidden";
            life++;

            //change cards color
            //red color
            e.currentTarget.classList.add("worng");

            //green color- show the right answer
            var allNotes = document.querySelectorAll(".ans");
            for (var i = 0; i < ansArr.length; i++) {
                if (allNotes[i].textContent == termList[currQues - 1].ans0) {
                    allNotes[i].classList.add("correct");
                    timer = setTimeout(nextQuestionWorng, 2500, e.currentTarget, allNotes[i]);
                }
            }
            //if the user lose the game
            if (life == 3) {
                timer = setTimeout(loseMessege, 2500, e.currentTarget, document.querySelector(".correct"));
                //clearInterval(timer);
            }
        }


    }

    //make the buttens un tocheable
    document.querySelector(".answer-place").classList.add("disable");

}

//the function make the question change and the cards came back to the original color- if the user was right
function nextQuestionRight(userAnswer) {
    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("correct");


    enterText();

    if (document.querySelector(".ans.disable")) {
        showHiddenAnswer();
    }
}

//the function make the question change and the cards came back to the original color- if the user was worng
function nextQuestionWorng(userAnswer, correctAnswer) {
    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("worng");
    correctAnswer.classList.remove("correct");

    enterText();

    if (document.querySelector(".ans.disable")) {
        showHiddenAnswer();
    }
}

//the function opens the losing page and closing the game page
function loseMessege(userAnswer, correctAnswer) {
    //remove the game page
    document.querySelector(".game").classList.add("inactive");

    //add losing page
    document.querySelector(".lose-page").classList.remove("inactive");


    //returns the cards to the right color
    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("worng");
    correctAnswer.classList.remove("correct");

    document.querySelector(".try-again").addEventListener("click", backToGame);
    currQues = 0;
}

//the function opens the wining page and closing the game page
function winMessege(userAnswer, correctAnswer) {
    document.querySelector(".game").classList.add("inactive");

    document.getElementById("money-bank").innerHTML = quesValue[currQues + 1];

    //remove inactive class from wining page
    document.querySelector(".win-page").classList.remove("inactive");

    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("worng");
    correctAnswer.classList.remove("correct");
    currQues = 0;
}

//the function make 2 answer and the button disapper.it keep that the correct answer will stay
function onClickHelp(e) {
    var allNotes = document.querySelectorAll(".ans");

    for (var i = 0; i < 2; i++) {
        //if the answer we wnat to disapper is the right one
        if (allNotes[i].textContent == termList[currQues].ans0) {
            //the next 2 answer wiil disapper
            allNotes[i + 2].style.visibility = "hidden";
            allNotes[i + 2].classList.add("disable");
        }
        else {
            //disapper this answer
            allNotes[i].style.visibility = "hidden";
            allNotes[i].classList.add("disable");
        }
    }

    //disapper the button
    e.currentTarget.classList.add("disable");
    e.currentTarget.style.visibility = "hidden";
}

//make a random array of the qustion didnwt use it in this program, an option for update
function createQuessOrder() {
    for (var i = 0; i < termList.length; i++) {
        quessOrder.push(i);
    }
    quessOrder = shuffle(quessOrder);
}

//init the game
function backToGame() {
    document.querySelector(".game").classList.remove("inactive");

    //remove inactive class from wining page
    document.querySelector(".lose-page").classList.add("inactive");


    for (var i = 0; i < document.querySelectorAll(".heart").length; i++) {
        document.querySelectorAll(".heart")[i].style.visibility = "visible";
    }

    startGame();
}

//show hidden buttons of help
function showHiddenAnswer() {
    document.querySelector(".ans.disable").style.visibility = "visible";
    document.querySelector(".ans.disable").classList.remove("disable");
    document.querySelector(".ans.disable").style.visibility = "visible";
    document.querySelector(".ans.disable").classList.remove("disable");
}

/**
 * take orgnaiz array and shffel it
 * @param {Array} arr 
 */
function shuffle(arr) {
    var tmp = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        var index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}
