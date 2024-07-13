const express = require('express');
const router = express.Router();

// Route for dashboard or management page
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        pageTitle: 'Dashboard',
        projectDescription: 'This is a sample project description.',
        // Add more data as needed for your dashboard view
    });
});

module.exports = router;
