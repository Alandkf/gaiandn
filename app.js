const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require('./models');
const cityRoutes = require('./routes/cityRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const villageRoutes = require('./routes/villageRoutes');
const driverRoutes = require('./routes/driverRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.use('/cities', cityRoutes);
app.use('/employees', employeeRoutes);
app.use('/sections', sectionRoutes);
app.use('/villages', villageRoutes);
app.use('/drivers', driverRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.error('Unable to sync database:', err);
});

module.exports = app;
