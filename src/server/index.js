// Import environment variables
require("dotenv").config();
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes");
const permittedCrossDomainPolicies = require('helmet-crossdomain')
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
const uri = 'mongodb://em:em@mycluster-shard-00-00-4vu9n.gcp.mongodb.net:27017,mycluster-shard-00-01-4vu9n.gcp.mongodb.net:27017,mycluster-shard-00-02-4vu9n.gcp.mongodb.net:27017/timetable?ssl=true&replicaSet=myCluster-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true });

var db = mongoose.connection;

// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 3000;

app.use(permittedCrossDomainPolicies({ permittedPolicies: 'all' }))

// Send message for default URL
app.get('/', (req, res) => res.send('Hello timetable'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port);
});
