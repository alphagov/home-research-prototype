const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const parentDir = '/main'

// Add your routes here

// choose how to get security codes in the create account journey
router.post(`${parentDir}/authentication/choose-otp-method`, function (req, res) {
	var otpMethod = req.session.data['security-code']
	if (otpMethod == "otp-sms") {
		res.redirect('create-otpsms')
	} else if (otpMethod == "otp-voice") {
		res.redirect('create-otp-voice')
	} else {
		res.redirect('create-otp-auth')
	}
})

module.exports = router;