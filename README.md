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
