<!DOCTYPE html>
<html lang="en-US">

<head>
  <title>Invitation Page</title>
  <link rel="stylesheet" type="text/css" href="css/main.css" />
  <script type="text/javascript">

    // Global data
    var invitations = [];
    var numberOfVolunteers = null;
    var organizationName = null;
    var eventDate = null;
    var hostName = null;
    function processForm() {
      // Read number of volunteers, event date, organization name, and host name
      numberOfVolunteers = parseInt(document.getElementsByName("numberOfVolunteers")[0].value);
      organizationName = document.getElementsByName("organizationName")[0].value;
      eventDate = document.getElementsByName("eventDate")[0].value;
      hostName = document.getElementsByName("hostName")[0].value;
      createForm();
      return false;
    }
    // Based upon number of volunteers, loop to ask recipient name
    function createForm() {
      let htmlForm = `<form onsubmit="return readData()">`;
      for (let i = 0; i < numberOfVolunteers; i++) {
        htmlForm += `<label for="recipientName${i}">Recipient ${i + 1} name:</label>
                   <input type="text" name="recipientName${i}" placeholder="Enter your Recipient ${i + 1} Name" /><br/>`;
      }
      htmlForm += `<input type="submit" value="Submit"><br/><br/></form>`;
      document.getElementById("pageForm").innerHTML = htmlForm;
    }
    function readData() {
      // Reset invitation array
      invitations = [];
      // read input data
      for (let i = 0; i < numberOfVolunteers; i++) {
        const recipientName = document.getElementsByName(`recipientName${i}`)[0].value;
        // validating the input data (trim is user truncate the whitespaces)
        if (recipientName.trim() == "") {
          alert(`Please fill the data for recipient ${i + 1}.`);
          return false;
        }
        // Add to invitations array
        invitations.push({ recipientName, eventDate, organizationName, hostName });
      }
      displayInvitations();
      return false; // making browser not to refresh
    }
    // Display all invitations in the invitations array
    function displayInvitations() {
      const article = document.getElementById("placeholderContent");
      if (invitations.length === 0) {  // If invitations array is empty
        article.innerHTML = 'No invitations to display';
        return;
      }
      let html = "";
      for (let i = 0; i < invitations.length; i++) {
        html += `Hello ${invitations[i].recipientName}!
          <br />
          <br /> You have been invited to volunteer for an event held by
          ${invitations[i].organizationName} on
          ${invitations[i].eventDate}.
          <br />
          <br />Thanks!<br />
          <br />
          ${invitations[i].hostName}<br /><br />`;
      }
      article.innerHTML = html;
    }
  </script>
</head>
<body>
  <header>
    <div class="top">
      <a class="logo" href="index.html">CapellaVolunteers
        <span class="dotcom">.org</span>
      </a>
    </div>
    <nav>
      <ul class="topnav">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="invitation.html" class="active">Invitation</a>
        </li>
        <li>
          <a href="gallery.html">Gallery</a>
        </li>
        <li>
          <a href="registration.html">Registration</a>
        </li>
      </ul>
    </nav>
  </header>
  <section id="pageGlobalForm">
    <form onsubmit="return processForm()">
      <label for="numberOfVolunteers">Number of volunteers:</label>
      <input type="number" min="1" name="numberOfVolunteers" placeholder="Enter number of volunteers" /><br />
      <label for="organizationName">Organization name:</label>
      <input type="text" name="organizationName" placeholder="Enter your Organization Name" /><br />
      <label for="eventDate">Event Date:</label>
      <input type="text" name="eventDate" placeholder="Enter your Event Date" /><br />
      <label for="hostName">Host name:</label>
      <input type="text" name="hostName" placeholder="Host Name" /><br />
      <input type="submit" value="Submit"></form><br />
    </form>
  </section>
  <section id="pageForm"></section>
  <article id="placeholderContent"></article>
  <footer>This events site is for IT-FP3215 tasks.
  </footer>
</body>
</html>
body {
    font: 15px arial, sans-serif;
    color: #808080;
}
input[type=text],
select ,input[type=password],radio{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=submit] {
    width: 100%;
    background-color: #800D1E;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
input[type=submit]:hover {
    background-color: #802F1E;
}
section {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
article {
    border-radius: 5px;
    background-color: #CCCCCC;
    padding: 20px;
    color: #222222;
}
ul.topnav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
ul.topnav li {
    float: left;
}
ul.topnav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
ul.topnav li a:hover:not(.active) {
    background-color: #111;
}
ul.topnav li a.active {
    background-color: #CCCCCC;
    color: #333
}
ul.topnav li.right {
    float: right;
}
@media screen and (max-width: 600px) {
    ul.topnav li.right,
    ul.topnav li {
        float: none;
    }
}
.top {
    position: relative;
    background-color: #ffffff;
    height: 68px;
    padding-top: 20px;
    line-height: 50px;
    overflow: hidden;
    z-index: 2;
}
.logo {
    font-family: arial;
    text-decoration: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 37px;
    letter-spacing: 3px;
    color: #555555;
    display: block;
    position: absolute;
    top: 17px;
}
.logo .dotcom {
    color: #800D1E
}
.topnav {
    position: relative;
    z-index: 2;
    font-size: 17px;
    background-color: #5f5f5f;
    color: #f1f1f1;
    width: 100%;
    padding: 0;
    letter-spacing: 1px;
}
.top .logo {
    position: relative;
    top: 0;
    width: 100%;
    text-align: left;
    margin: auto
}
footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: #efefef;
    text-align: center;
}
div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
}

div.gallery:hover {
    border: 1px solid #777;
}

div.gallery img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 15px;
    text-align: center;
}