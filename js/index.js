function fnCalculateAge(userDateinput){
    // convert user input value into date object
    let birthDate = new Date(userDateinput);

    // get difference from current date;
    let difference = Date.now() - birthDate.getTime();

    let ageDate = new Date(difference);
    let calculatedAge = {
        'inYears': Math.abs(ageDate.getUTCFullYear() - 1970),
        'inMonths': ageDate.getMonth()
    }

    // Calculating the days
    userDob = (userDateinput.split('-')).map(Number)
    console.log(userDob);
    calcDate = userDateinput.split('-')
    calcDate[0] = new Date().getUTCFullYear()
    if (new Date(calcDate.join('-')).getTime() - new Date(userDateinput).getTime() < Date.now() - new Date(userDateinput).getTime()){
        userDob[0] = new Date().getUTCFullYear()
    } else {
        userDob[0] = new Date().getUTCFullYear()
    }
    console.log(userDob);
    userDob[1] += calculatedAge.inMonths
    if (userDob[1] > 12){
        userDob[1] -= 12
    }
    userDob[1] = String(userDob[1])
    if (userDob[1].length < 2){
        userDob[1] = userDob[1].replace(userDob[1], '0' + userDob[1])
    }
    let timeForDay = ((Date.now() - new Date(userDob.join('-')).getTime()))
    calculatedAge.inDays = Math.round(timeForDay / 1000 / 60 / 60 / 24)

    let returnStat = `You are ${calculatedAge.inYears} years, ${calculatedAge.inMonths} months and ${calculatedAge.inDays} days.`
    return returnStat
}

function showResult(){
    userDOB = document.getElementById('dob').value
    document.getElementById('result').textContent = fnCalculateAge(userDOB)
}
