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



const baseURL = `http://localhost:7788/api/applications`

const errCallback = err => console.log(err)
const createApplication = body => axios.post(baseURL, body).then(applicationsCallback).catch(errCallback)


function createApplicationCard(application) {
    const applicationCard = document.createElement('div')
    
    applicationCard.innerHTML = `
    <div class="allInfo">
    <div class="personalInfoContainer">
    <p id="fullName" class="info">${application.fullName}</p>
    <p class="personalInfoTitles allText">Location:</p>
    <p id="location" class="info allText">${application.location}</p>
    <p class="personalInfoTitles allText">Birthdate:</p>
    <p id="bday" class="info allText">${application.bday}</p>
    <p class="personalInfoTitles allText">Phone Number:</p>
    <p id="phoneNumber" class="info allText">${application.phoneNumber}</p>
    <p class="personalInfoTitles allText">Email:</p>
    <p id="email" class="info allText">${application.email}</p>
    </div>
    
    <div class="jobHistoryContainer">
    <p class="jobInfoTitles allText">Past Company Name:</p>
    <p id="pastCompanyName" class="info allText">${application.companyName}</p>
    <p class="jobInfoTitles allText">Past Job Location:</p>
    <p id="jobLocation" class="info allText">${application.jobLocation}</p>
    <p class="jobInfoTitles allText">Experience:</p>
    <p id="jobType" class="info allText">${application.jobType}</p>
    <p class="jobInfoTitles allText">Time Period:</p>
    <p id="jobTimePeriod" class="info allText">${application.jobTimePeriod}</p>
    <p class="jobInfoTitles allText">Past Job Description:</p>
    <p id="jobDescription" class="info allText">${application.jobDescription}</p>
    </div>
    </div>
    `
    
    applicationContainer.appendChild(applicationCard)
}


function displayApplications(arr) {
    applicationContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createApplicationCard(arr[i])
    }
}


const applicationsCallback = ({ data: applications }) => {displayApplications(applications)}
const getAllApplications = () => {
    axios.get(baseURL).then(applicationsCallback).catch(errCallback)}

getAllApplications()

const selectorBox = document.querySelector("#experienceSelector")
const jobHistoryContainer = document.querySelector("#jobHistoryContainer")
const searchBtn = document.querySelector("#searchBtn")
const applicationContainer = document.querySelector('#applicationContainer');

function selector() {
    const selector = selectorBox.value

    const jobTypes = document.querySelectorAll('#jobType')
    console.log(jobTypes[0].textContent)
    for (let i = 0; i < jobTypes.length; i++){
        console.log(jobTypes[i].textContent)
    }
    const applications = document.querySelectorAll('.allInfo')
    for (let i = 0; i < applications.length; i++) {
        const application = applications[i]
        console.log(application)
        console.log(selector)
        if (applications[i].textContent.includes(selector)) {
            application.style.display = 'flex'
        } else if (selector === 'All'){
            application.style.display = 'flex'
        } else {
            application.style.display = 'none'
        }
    }
}



searchBtn.addEventListener("click", selector)