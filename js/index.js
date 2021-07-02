dobInput = document.getElementById('dob')
dt = new Date()

dobInput.value = "2004-04-14"

document.getElementById('body').onselectstart = function () {
    return false
}

inputField = document.getElementById('submitDOB')
resultPage = document.getElementById('result')

inputField.addEventListener('click', function (){
    userDOB = dobInput.value.split('-')
    ageYear = dt.getUTCFullYear() - Number(userDOB[0])
    ageMonth = Math.abs(dt.getUTCMonth() + 1 - Number(userDOB[1]))
    ageDay = Math.abs(dt.getUTCDate() - Number(userDOB[2]))

    resultPage.textContent = `You are ${ageYear} years, ${ageMonth} months and ${ageDay} days old`
})
