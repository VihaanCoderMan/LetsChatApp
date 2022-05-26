const firebaseConfig = {
      apiKey: "AIzaSyAvO6XQWJXCvA9mp6nRS3Ms5Moz7xAnB0M",
      authDomain: "kwitter-b05d5.firebaseapp.com",
      databaseURL: "https://kwitter-b05d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-b05d5",
      storageBucket: "kwitter-b05d5.appspot.com",
      messagingSenderId: "608804764147",
      appId: "1:608804764147:web:96ee0bff8e02ccd3feba86"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.lod(name);
      localStorage.setItem("room_name", name);
        window.location - "kwitter_page.html";      
}