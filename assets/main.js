// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjZeEP03eMyHuonQsMWIKRKypWphJLpCs",
    authDomain: "train-schedule-82679.firebaseapp.com",
    databaseURL: "https://train-schedule-82679.firebaseio.com",
    projectId: "train-schedule-82679",
    storageBucket: "train-schedule-82679.appspot.com",
    messagingSenderId: "964404059803"
};
firebase.initializeApp(config);

var database = firebase.database();

var trainName = ""
    destination = ""
    trainTime = ""
    frequency = ""

$("#clickButton").on("click", function(event) {
    event.preventDefault();

    // inputs
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    trainTime = $("#trainTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    // Change what is saved in firebase
    database.ref().set({
      name: trainName,
      destination: destination,
      time: trainTime,
      frequency: frequencyInput,
    });
  });

  database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().time);
    console.log(snapshot.val().frequency);

    // Change the HTML
    $("#trainInfo").text(snapshot.val().name + " - " + snapshot.val().destination + " - " + snapshot.val().time) + " - " + snapshot.val().frequency;

    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });