function calculate() {
    const dayf = document.getElementById("d");
    const monthf = document.getElementById("m");
    const yearf = document.getElementById('y');
    const year = yearf.value;
    const month = monthf.value;
    const day = dayf.value;

    

    console.log(dayf);
    console.log(monthf);
    console.log(yearf);

    
    const curr = new Date();
    const Y = curr.getFullYear();

    if (day > 0 && day < 32 && month > 0 && month < 13 && year <= Y) {
        const birthDate = year + "-" + month + "-" + day;
        const dob = new Date(birthDate);
        console.log(dob);
        const current = new Date();

        // make the error go away
        document.getElementById('d').classList.remove('input-error');
        document.getElementById('y').classList.remove('input-error');
        document.getElementById('m').classList.remove('input-error');
        document.getElementById('input').style.color='black';

        const difference = current - dob;

        const ageInMillis = 1000 * 60 * 60 * 24 * 365.25; // Approximate milliseconds in a year
        const ageInYears = Math.floor(difference / ageInMillis);


        const ageInMonths = Math.floor(((difference % ageInMillis) / (1000 * 60 * 60 * 24 * 30.44)) % 12); // Approximate days in a month


        const ageInDays = Math.floor(((difference % ageInMillis) / (1000 * 60 * 60 * 24)) % 30);

        const changeYear = document.getElementById('change-year');
        const changeMonth = document.getElementById('change-month');

        const changeDay = document.getElementById('change-days');

        changeYear.innerHTML = ageInYears;
        changeMonth.innerHTML = ageInMonths;
        changeDay.innerHTML = ageInDays;

    }
    else {
        const errorColor = document.getElementById('input');
        errorColor.style.color = 'red';
        document.getElementById('d').classList.add('input-error');
        document.getElementById('y').classList.add('input-error');
        document.getElementById('m').classList.add('input-error');

    }

    dayf.value = "";
    monthf.value = "";
    yearf.value = "";
   




}