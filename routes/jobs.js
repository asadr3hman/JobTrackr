const express = require('express')
const router = express.Router()

const {
    getJobs,
    getJob,
    deleteJob,
    updateJob,
    createJob
} = require('../controllers/jobs')

router.route('/').post(createJob).get(getJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
