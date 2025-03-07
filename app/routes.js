//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// READY FOR RELEASE ROUTES
// pull in auth routes
router.use('/', require('./views/ready-for-release/routes/routes-auth.js'))
