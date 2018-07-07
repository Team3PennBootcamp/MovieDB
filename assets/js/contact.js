// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHIeYzCQzyHn08-qaHhbRV8TR_YweJo4U",
    authDomain: "movies-dc68c.firebaseapp.com",
    databaseURL: "https://movies-dc68c.firebaseio.com",
    projectId: "movies-dc68c",
    storageBucket: "movies-dc68c.appspot.com",
    messagingSenderId: "709096868679"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var bookmarked = [""];
  var currentUser = "";

  // Writes user contact info to firebase and stores username to localstorage.
  $(document.body).on("click", "#add-train-btn", function(){
    var userName = $("#name-input").val();
    localStorage.setItem("currentUser", userName)
    var email = $("#email-input").val();
    var favorites = $("#movie-input").val();

    database.ref('Users/' + userName).set({
      email: email,
      favorites: favorites,
      bookmarked: bookmarked
    })
  });
