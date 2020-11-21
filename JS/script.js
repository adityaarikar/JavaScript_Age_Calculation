function calculateAge() {
    var DOB = new Date(document.getElementById("date").value);

    var birthDay = DOB.getDate();
    var birthMonth = DOB.getMonth();
    var birthYear = DOB.getFullYear();

    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    var todayDate = new Date();

    var todayDay = todayDate.getDate();
    var todayMonth = todayDate.getMonth();
    var todayYear = todayDate.getFullYear();

    console.log(todayDay);
    console.log(todayMonth);
    console.log(todayYear);


    var calculatedAge = 0;

    if (todayMonth > birthMonth) {
        calculatedAge = (todayYear - birthYear)*365;
    }
    else if (todayMonth == birthMonth){
        if(todayDay >= birthDay) {
            calculatedAge = (todayYear -birthYear)*365;
        }
        else{
            calculatedAge = (todayYear - birthYear - 1)*365;
        }
    }
    else{
        calculatedAge = (todayYear - birthYear -1)*365;
    }
    
    var h1 = document.createElement("h1");
    var textAnswer =document.createTextNode("You are "+calculatedAge+ " days old.");
    h1.setAttribute("id", "calculatedAge");
    h1.appendChild(textAnswer);
    document.getElementById("result").appendChild(h1);
}

function reset(){
    location.reload();
}

