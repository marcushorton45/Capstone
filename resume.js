var signUpForm = document.querySelector(".email-sign-up");
var input = document.querySelector("input");
var signUpBtn = document.querySelector("#sign-up");
var footer = document.querySelector("footer");

function emailSubmitHandler(){
    var confirmationMsg = document.createElement("p");
    confirmationMsg.textContent = "Thank you for signing up! Notifications will be sent to " + input.value;
    signUpForm.remove();
    footer.appendChild(confirmationMsg);
}

signUpBtn.addEventListener("click", emailSubmitHandler);




var checkBox1 = document.getElementById("toggle1");
var checkBox2 = document.getElementById("toggle2");
var checkBox3 = document.getElementById("toggle3");
var checkBox4 = document.getElementById("toggle4");

var secondJob = document.querySelector(".secondJob")
var thirdJob = document.querySelector(".thirdJob")
var fourthJob = document.querySelector(".fourthJob")
var fifthJob = document.querySelector(".fifthJob")

var toggleTag2 = document.querySelector("#toggleTag2")
var toggleTag3 = document.querySelector("#toggleTag3")
var toggleTag4 = document.querySelector("#toggleTag4")


function addSecondJob(){
    if (checkBox1.checked == true){
        secondJob.style.display = "flex";
        checkBox2.style.display = "flex";
        toggleTag2.style.display = "flex";
    } else {
        secondJob.style.display = "none";
        checkBox2.style.display = "none";
        toggleTag2.style.display = "none";
    }
}

function addThirdJob(){
    if (checkBox2.checked == true){
        thirdJob.style.display = "flex";
        checkBox3.style.display = "flex";
        toggleTag3.style.display = "flex";
    } else {
        thirdJob.style.display = "none";
        checkBox3.style.display = "none";
        toggleTag3.style.display = "none";
    }
}

function addFourthJob(){
    if (checkBox3.checked == true){
        fourthJob.style.display = "flex";
        checkBox4.style.display = "flex";
        toggleTag4.style.display = "flex";
    } else {
        fourthJob.style.display = "none";
        checkBox4.style.display = "none";
        toggleTag4.style.display = "none";
    }
}

function addFifthJob(){
    if (checkBox4.checked == true){
        fifthJob.style.display = "flex";
    } else {
        fifthJob.style.display = "none";
    }
}

checkBox1.addEventListener("change", addSecondJob);
checkBox2.addEventListener("change", addThirdJob);
checkBox3.addEventListener("change", addFourthJob);
checkBox4.addEventListener("change", addFifthJob);





const form = document.querySelector('form')
const summaryContainer = document.querySelector('#summaryContainer')

const baseURL = `http://localhost:7788/api/applications`

const errCallback = err => console.log(err)
const createSummary = body => axios.post(baseURL, body).then(summaryCallback).catch(errCallback)


function createApplication(obj) {
    const summaryCard = document.querySelector("div")
    form.style.display = "none"

    summaryCard.innerHTML = `
    <div id="resumeMain">
    <h3 class="summaryTitle">Personal Information</h3>
    <section id="summaryPersonalInfo">
     <div id="fullName" class="name title">
      <h3>Name:</h3>
      <p>${obj.fname}</p>
      <p>${obj.lname}</p>
     </div>
     <div id="fullLocation" class="name title">
      <h3>Location:</h3>
      <p>${obj.city},</p>
      <p>${obj.state}</p>
     </div>
     <div id="bday" class="other title">
      <h3>Birthdate:</h3>
      <p>${obj.bday}</p>
     </div>
     <div id="phoneNumber" class="other title">
      <h3>Phone Number:</h3>
      <p>${obj.phoneNumber}</p>
     </div>
     <div id="email" class="other title">
      <h3>Email:</h3>
      <p>${obj.email}</p>
     </div>
    </section>


    <h3 class="summaryTitle">Job Information</h3>
    <section id="summaryJobInfo1">
     <div class="pastCompanyName title firstJob">
      <h3>Company Name:</h3>
      <p>${obj.companyName1}</p>
     </div>
     <div id="jobFullLocation" class="jobLocation title firstJob">
      <h3>Job Location:</h3>
      <p>${obj.jobCity1},</p>
      <p>${obj.jobState1}</p>
     </div>
     <div class="jobType title firstJob">
      <h3>Job Type:</h3>
      <p>${obj.jobType1}</p>
     </div>
     <div class="fullTimePeriod title firstJob">
      <h3>Job Time Period:</h3>
      <p>From:</p>
      <p>${obj.timeStartPeriod1}</p>
      <p>To:</p>
      <p>${obj.timeEndPeriod1}</p>
     </div>
     <div class="jobDescriptionSummary title firstJob">
      <h3>Job description and responsibilities:</h3>
      <p>${obj.jobDescription1}</p>
     </div>
     </section>


     <section id="summaryJobInfo2">
     <div class="pastCompanyName title secondJob">
      <h3>Company Name:</h3>
      <p>${obj.companyName2}</p>
     </div>
     <div id="jobFullLocation" class="jobLocation title secondJob">
      <h3>Job Location:</h3>
      <p>${obj.jobCity2},</p>
      <p>${obj.jobState2}</p>
     </div>
     <div class="jobType title secondJob">
      <h3>Job Type:</h3>
      <p>${obj.jobType2}</p>
      </div>
     <div class="fullTimePeriod title secondJob">
      <h3>Job Time Period:</h3>
      <p>From:</p>
      <p>${obj.timeStartPeriod2}</p>
      <p>To:</p>
      <p>${obj.timeEndperiod2}</p>
     </div>
     <div class="jobDescriptionSummary title secondJob">
      <h3>Job description and responsibilities:</h3>
      <p>${obj.jobDescription2}</p>
     </div>
     </section>


     <section id="summaryJobInfo3">
     <div class="pastCompanyName title thirdJob">
      <h3>Company Name:</h3>
      <p>${obj.companyName3}</p>
     </div>
     <div id="jobFullLocation" class="jobLocation title thirdJob">
      <h3>Job Location:</h3>
      <p>${obj.jobCity3},</p>
      <p>${obj.jobState3}</p>
     </div>
     <div class="jobType title thirdJob">
      <h3>Job Type:</h3>
      <p>${obj.jobType3}</p>
     </div>
     <div class="fullTimePeriod title thirdJob">
      <h3>Job Time Period:</h3>
      <p>From:</p>
      <p>${obj.timeStartPeriod3}</p>
      <p>To:</p>
      <p>${obj.timeEndPeriod3}</p>
     </div>
     <div class="jobDescriptionSummary title thirdJob">
      <h3>Job description and responsibilities:</h3>
      <p>${obj.jobDescription3}</p>
     </div>
     </section>


     <section id="summaryJobInfo4">
     <div class="pastCompanyName title fourthJob">
      <h3>Company Name:</h3>
      <p>${obj.companyName4},</p>
     </div>
     <div id="jobFullLocation" class="jobLocation title fourthJob">
      <h3>Job Location:</h3>
      <p>${obj.jobCity4}</p>
      <p>${obj.jobState4}</p>
     </div>
     <div class="jobType title fourthJob">
      <h3>Job Type:</h3>
      <p>${obj.jobType4}</p>
     </div>
     <div class="fullTimePeriod title fourthJob">
      <h3>Job Time Period:</h3>
      <p>From:</p>
      <p>${obj.timeStartPeriod4}</p>
      <p>To:</p>
      <p>${obj.timeEndPeriod4}</p>
     </div>
     <div class="jobDescriptionSummary title fourthJob">
      <h3>Job description and responsibilities:</h3>
      <p>${obj.jobDescription4}</p>
     </div>
     </section>


     <section id="summaryJobInfo5">
     <div class="pastCompanyName title fifthJob">
      <h3>Company Name:</h3>
      <p>${obj.companyName5}</p>
     </div>
     <div id="jobFullLocation" class="jobLocation title fifthJob">
      <h3>Job Location:</h3>
      <p>${obj.jobCity5},</p>
      <p>${obj.jobState5}</p>
     </div>
     <div class="jobType title fifthJob">
      <h3>Job Type:</h3>
      <p>${obj.jobType5}</p>
     </div>
     <div class="fullTimePeriod title fifthJob">
      <h3>Job Time Period:</h3>
      <p>From:</p>
      <p>${obj.timeStartPeriod5}</p>
      <p>To:</p>
      <p>${obj.timeEndPeriod5}</p>
     </div>
     <div class="jobDescriptionSummary title fifthJob">
      <h3>Job description and responsibilities:</h3>
      <p>${obj.jobDescription4}</p>
     </div>
    </section>
    </div>
    `

    summaryContainer.appendChild(summaryCard)
    isEmpty()
}

function submitHandler(e){
    e.preventDefault()
    
    const fname = document.querySelector("#fnameResult")
    const lname = document.querySelector("#lnameResult")
    const city = document.querySelector("#cityResult")
    const state = document.querySelector("#stateResult")
    const bday = document.querySelector("#bdayResult")
    const phoneNumber = document.getElementById("phone")
    const email = document.querySelector("#emailResult")

    const companyName1 = document.querySelector(".companyName1")
    const jobCity1 = document.querySelector(".jobCity1")
    const jobState1 = document.querySelector(".jobState1")
    const jobType1 = document.querySelector(".jobType1")
    const timeStartPeriod1 = document.querySelector(".timeStart1")
    const timeEndPeriod1 = document.querySelector(".timeEnd1")
    const jobDescription1 = document.querySelector(".jobDescription1")

    const companyName2 = document.querySelector(".companyName2")
    const jobCity2 = document.querySelector(".jobCity2")
    const jobState2 = document.querySelector(".jobState2")
    const jobType2 = document.querySelector(".jobType2")
    const timeStartPeriod2 = document.querySelector(".timeStart2")
    const timeEndPeriod2 = document.querySelector(".timeEnd2")
    const jobDescription2 = document.querySelector(".jobDescription2")

    const companyName3 = document.querySelector(".companyName3")
    const jobCity3 = document.querySelector(".jobCity3")
    const jobState3 = document.querySelector(".jobState3")
    const jobType3 = document.querySelector(".jobType3")
    const timeStartPeriod3 = document.querySelector(".timeStart3")
    const timeEndPeriod3 = document.querySelector(".timeEnd3")
    const jobDescription3 = document.querySelector(".jobDescription3")

    const companyName4 = document.querySelector(".companyName4")
    const jobCity4 = document.querySelector(".jobCity4")
    const jobState4 = document.querySelector(".jobState4")
    const jobType4 = document.querySelector(".jobType4")
    const timeStartPeriod4 = document.querySelector(".timeStart4")
    const timeEndPeriod4 = document.querySelector(".timeEnd4")
    const jobDescription4 = document.querySelector(".jobDescription4")

    const companyName5 = document.querySelector(".companyName5")
    const jobCity5 = document.querySelector(".jobCity5")
    const jobState5 = document.querySelector(".jobState5")
    const jobType5 = document.querySelector(".jobType5")
    const timeStartPeriod5 = document.querySelector(".timeStart5")
    const timeEndPeriod5 = document.querySelector(".timeEnd5")
    const jobDescription5 = document.querySelector(".jobDescription5")
    
    

    let bodyObj = {
        fname: fname.value,
        lname: lname.value,
        city: city.value,
        state: state.value,
        bday: bday.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        
        companyName1: companyName1.value,
        jobCity1: jobCity1.value,
        jobState1: jobState1.value,
        jobType1: jobType1.value,
        timeStartPeriod1: timeStartPeriod1.value,
        timeEndPeriod1: timeEndPeriod1.value,
        jobDescription1: jobDescription1.value,

        companyName2: companyName2.value,
        jobCity2: jobCity2.value,
        jobState2: jobState2.value,
        jobType2: jobType2.value,
        timeStartPeriod2: timeStartPeriod2.value,
        timeEndPeriod2: timeEndPeriod2.value,
        jobDescription2: jobDescription2.value,

        companyName3: companyName3.value,
        jobCity3: jobCity3.value,
        jobState3: jobState3.value,
        jobType3: jobType3.value,
        timeStartPeriod3: timeStartPeriod3.value,
        timeEndPeriod3: timeEndPeriod3.value,
        jobDescription3: jobDescription3.value,

        companyName4: companyName4.value,
        jobCity4: jobCity4.value,
        jobState4: jobState4.value,
        jobType4: jobType4.value,
        timeStartPeriod4: timeStartPeriod4.value,
        timeEndPeriod4: timeEndPeriod4.value,
        jobDescription4: jobDescription4.value,

        companyName5: companyName5.value,
        jobCity5: jobCity5.value,
        jobState5: jobState5.value,
        jobType5: jobType5.value,
        timeStartPeriod5: timeStartPeriod5.value,
        timeEndPeriod5: timeEndPeriod5.value,
        jobDescription5: jobDescription5.value
    }
    
    axios.post("/api/applications", bodyObj).then(res => console.log(res.data))

    createApplication(bodyObj)
    
    fname.value = ''
    lname.value = ''
    city.value = ''
    state.value = ''
    phoneNumber.value = ''
    email.value = ''
    
    companyName1.value = ''
    jobCity1.value = ''
    jobState1.value = ''
    jobType1.value = ''
    timeStartPeriod1.value = ''
    timeEndPeriod1.value = ''
    jobDescription1.value = ''

    companyName2.value = ''
    jobCity2.value = ''
    jobState2.value = ''
    jobType2.value = ''
    timeStartPeriod2.value = ''
    timeEndPeriod2.value = ''
    jobDescription2.value = ''

    companyName3.value = ''
    jobCity3.value = ''
    jobState3.value = ''
    jobType3.value = ''
    timeStartPeriod3.value = ''
    timeEndPeriod3.value = ''
    jobDescription3.value = ''

    companyName4.value = ''
    jobCity4.value = ''
    jobState4.value = ''
    jobType4.value = ''
    timeStartPeriod4.value = ''
    timeEndPeriod4.value = ''
    jobDescription4.value = ''

    companyName5.value = ''
    jobCity5.value = ''
    jobState5.value = ''
    jobType5.value = ''
    timeStartPeriod5.value = ''
    timeEndPeriod5.value = ''
    jobDescription5.value = ''
    


}

function isEmpty() {
    const summaryJobInfo2 = document.querySelector("#summaryJobInfo2")
    const summaryJobInfo3 = document.querySelector("#summaryJobInfo3")
    const summaryJobInfo4 = document.querySelector("#summaryJobInfo4")
    const summaryJobInfo5 = document.querySelector("#summaryJobInfo5")
    if (document.querySelector(".companyName2").value !== '') {
        summaryJobInfo2.style.display = 'flex'
    }  else if (document.querySelector(".companyName3").value !== ''){
        summaryJobInfo3.style.display = 'flex'
    } else if (document.querySelector(".companyName4").value !== '') {
        summaryJobInfo4.style.display = 'flex'
    } else if (document.querySelector(".companyName5").value !== '') {
        summaryJobInfo5.style.display = 'flex'
    } else {
        summaryJobInfo2.style.display = 'none'
        summaryJobInfo3.style.display = 'none'
        summaryJobInfo4.style.display = 'none'
        summaryJobInfo5.style.display = 'none'
    }
}
            
            
            
form.addEventListener('submit', submitHandler)