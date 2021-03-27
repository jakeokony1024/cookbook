const express = require('express');
const mongoose = require('mongoose');
const routes = require('routes');
const app = express();
const PORT = process.env.PORT || 3001;


//Middleware Definition//
app.use(express.urlencoded({extended:true}));
app.use(express.json());

if(process.env.NODE_ENV === "production")
{
 app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
 process.env.MONGOOSE_URI || "mongodb://localhost:27017/mern_todolist",
);

app.listen(PORT, () => {
 console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});