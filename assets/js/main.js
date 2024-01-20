// Program to develop a student grade system.

const myBtn = document.getElementById("myBtn");


const calculate = (e) => {
    e.preventDefault();

    // Getting the all subjects marks from user through input. 
    const physics = Number(document.getElementById("phyMarks").value);
    const maths = Number(document.getElementById("mathMarks").value);
    const chemistry = Number(document.getElementById("chemMarks").value);
    const english = Number(document.getElementById("engMarks").value);

    let showData = document.querySelector("#showData");
    let grades = "";
    let output = '';


    if (physics <= 100 && physics >= 0 && maths <= 100 && maths >= 0 && chemistry <= 100 && chemistry >= 0 && english <= 100 && english >= 0) {
        console.log(`Physics marks is ${physics} out of 100.`);
        console.log(`Maths marks is ${maths} out of 100.`);
        console.log(`Chemistry marks is ${chemistry} out of 100.`);
        console.log(`English marks is ${english} out of 100.`);

        // Summation of all subjects marks
        const scoreTotal = physics + maths + chemistry + english;

        console.log(`Total Score is ${scoreTotal} out of 400.`)

        // Checking the condition for the providing the grade to student based on percentage

        const percentage = Math.floor((scoreTotal / 400) * 100);

        console.log(`Student Percentage is ${percentage}%`);

        if (percentage >= 91 && percentage <= 100) {
            grades = "A1";
        } else if (percentage >= 81 && percentage <= 90) {
            grades = "A2";
        } else if (percentage >= 71 && percentage <= 80) {
            grades = "B1";
        } else if (percentage >= 61 && percentage <= 70) {
            grades = "B2";
        } else if (percentage >= 51 && percentage <= 60) {
            grades = "C1";
        } else if (percentage >= 41 && percentage <= 50) {
            grades = "C2";
        } else if (percentage >= 33 && percentage <= 40) {
            grades = "D";
        } else {
            grades = "F";
        }


        // Check the student is fail in particular subject or more than one subjects.

        let phyFail = "";
        let mathFail = "";
        let cheFail = "";
        let engFail = "";

        if (physics < 33) {
            phyFail = true;
        }

        if (maths < 33) {
            mathFail = true;
        }

        if (chemistry < 33) {
            cheFail = true;
        }

        if (english < 33) {
            engFail = true;
        }


        output = `${phyFail ? ', Physics' : ''} ${mathFail ? ', Maths' : ''} ${cheFail ? ', Chemistry' : ''} ${engFail ? ', English' : ''} failed in this subject.`


        // Checking the condition for the fail and pass 
        if (physics < 33 || maths < 33 || chemistry < 33 || english < 33) {

            if (physics < 33) {
                showData.innerHTML = `Out of 400 your total is  ${scoreTotal} and percentage is ${percentage}%, Your grade is ${grades} ${output}`;
            }

            else if (maths < 33) {
                showData.innerHTML = `Out of 400 your total is  ${scoreTotal} and percentage is ${percentage}%, Your grade is ${grades} ${output}`;
            }

            else if (chemistry < 33) {
                showData.innerHTML = `Out of 400 your total is  ${scoreTotal} and percentage is ${percentage}%, Your grade is ${grades} ${output}`;
            }

            else if (english < 33) {
                showData.innerHTML = `Out of 400 your total is  ${scoreTotal} and percentage is ${percentage}%, Your grade is ${grades} ${output}`;
            }

        }

        else {
            showData.innerHTML = `Out of 400 your total is ${scoreTotal} and percentage is ${percentage}%, Your grade is ${grades}. You are pass in all subjects.`;
        }
    }

    else {
        showData.innerHTML = `Please enter proper marks or submit all the field.`;
        console.log(`Please enter proper marks or submit all the field.`)
    }

}

myBtn.addEventListener("click", calculate);
