// Program to develop a student grade system.

const element = document.getElementById("myBtn");

const calculate = () => {
    // e.preventDefault();

    // Getting the all subjects marks from user through input. 
    const physics = parseInt(document.getElementById("phyMarks").value);
    const maths = parseInt(document.getElementById("mathMarks").value);
    const chemistry = parseInt(document.getElementById("chemMarks").value);
    const english = parseInt(document.getElementById("engMarks").value);
    let grades = "";
    let showData = document.querySelector("#showData");

    if (physics <= 100 && physics >= 0 && maths <= 100 && maths >= 0 && chemistry <= 100 && chemistry >= 0 && english <= 100 && english >= 0) {
        console.log(`Physics marks is ${physics} out of 100.`);
        console.log(`Maths marks is ${maths} out of 100.`);
        console.log(`Chemistry marks is ${chemistry} out of 100.`);
        console.log(`English marks is ${english} out of 100.`);

        // Summation of all subjects marks
        const scoreTotal = physics + maths + chemistry + english;

        console.log(`Total Score is ${scoreTotal} out of 400.`)

        // Checking the condition for the providing the  
        // grade to student based on percentage 
        let percentage = (scoreTotal / 400) * 100;
        percentage = Math.floor(percentage);

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


        // Checking the condition for the fail and pass 
        if (percentage >= 33) {
            showData.innerHTML = `Out of 400 your total is ${scoreTotal} and percentage is ${percentage}%.<br> Your grade is ${grades}. You are Pass.`;
        } else {
            showData.innerHTML = `Out of 400 your total is  ${scoreTotal} and percentage is ${percentage}%.<br> Your grade is ${grades}. You are Fail.`;
        }
    }

    else {
        showData.innerHTML = `Enter proper marks or submit all the field.`;
        console.log(`Enter proper marks or submit all the field.`)
    }

}

element.addEventListener("click", calculate);
