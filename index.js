//Creating a server

const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
    console.log("Server started on port 3000.")
});

//Respond to the browser
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//Respond with a result
app.post("/bmicalculator", function (req, res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    function bmiCalculator (weight, height) {
        let bmi = Math.round(weight / Math.pow(height, 2));
        if (bmi < 18.5) {
            return ("Your BMI is " + bmi + ", so you are underweight.");
        }
        if (bmi > 18.5 && bmi < 24.5) {
            return ("Your BMI is " + bmi + ", so you have a normal weight.");
        }
        if (bmi > 24.5) {
            return ("Your BMI is " + bmi + ", so you are overweight.");
        }
    }

    let bmiResult = bmiCalculator(weight, height);

    res.send(bmiResult);
})


