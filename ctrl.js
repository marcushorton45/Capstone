const applications = require("./db.json")

module.exports = {
    getApplications: (req, res) => {
        res.status(200).send(applications)
    },
    createApplication: (req, res) => {
        console.log(req.body)
        const { fullName, location, bday, phoneNumber, email, companyName1, jobLocation1, jobType1, timePeriod1, jobDescription1 } = req.body
        const summary = {
            id,
            fullName,
            location,
            bday,
            phoneNumber,
            email,

            companyName1,
            jobLocation1,
            jobType1,
            timePeriod1,
            jobDescription1
        }

        applications.push(summary)
        res.status(200).send(applications)
    },
}