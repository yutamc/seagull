class Teachers {
    constructor (name, subject,src) {
        this.name = name;
        this.subject = subject;
        this.src = src;
    }
}
//Teacher's Profile
let t01 = new Teachers('Amanda', 'Maths',"new_teacher.jpg");
let t02 = new Teachers ("Jack", "Literature","featured-teacher-burnout.jpg");
let t03 = new Teachers ('Catherine', 'English',"black-teacher.jpg");

//Get Elements
let teacherContainer = document.getElementById('teacherContainer');
let image = document.getElementById('profileImage');
//UI Logics

//Array Management
let savedTeachers = [];
let teacherArray = [t01,t02,t03];
let i = 0;

//Dynamic Elements
let teacherName = document.getElementById("teacherName");

let teacherSubject = document.getElementById("teacherSub");

teacherName.innerText = teacherArray[i].name;
teacherSubject.innerText=teacherArray[i].subject;

let iValue = document.getElementById('idNumber');
iValue.innerText = `#${i}`;


//Listeners
    iValue.innerText = i;
    teacherName.innerText = teacherArray[i].name;
    teacherSubject.innerText=teacherArray[i].subject;

function next () {
    if (i===2){
        nextButton.disabled = true;
    }else{
        i++;
        backButton.disabled = false;
        iValue.innerText = i;
        teacherName.innerText = teacherArray[i].name;
        teacherSubject.innerText=teacherArray[i].subject;
        image.src = teacherArray[i].src;
    }
}
function back () {
    if(i===0){
        backButton.disabled = true;
    }else{
        i--;
        nextButton.disabled = false;
        iValue.innerText = i;
        teacherName.innerText = teacherArray[i].name;
        teacherSubject.innerText=teacherArray[i].subject;
        image.src = teacherArray[i].src;
    }
}
