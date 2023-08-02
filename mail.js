const firebaseConfig = {
 
    apiKey: "AIzaSyBU_iLzYJJzlVLUIO-iHKtI0YAjaBVvH7s",
    authDomain: "projectcontact-us.firebaseapp.com",
    databaseURL: "https://projectcontact-us-default-rtdb.firebaseio.com",
    projectId: "projectcontact-us",
    storageBucket: "projectcontact-us.appspot.com",
    messagingSenderId: "29542670639",
    appId: "1:29542670639:web:419e247c86053f233241da"
 
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};