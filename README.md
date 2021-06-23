<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>Invitation Page</title>
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <script src="script.js" type="text/javascript"></script>

var invitation = "Hello __recipientName_____!\n You have been invited to volunteer for an event held by __organizationName_____ on ___eventDate_____. Please come to the following website: to sign up as a volunteer.\n Thanks! \n __hostName__";
//alert("vfkvkfm");
function checkPageForm(){
//alert("hello");
var recipientName = document.getElementsByName("recipientName")[0].value;
var organizationName = document.getElementsByName("organizationName")[0].value;
var eventDate = document.getElementsByName("eventDate")[0].value;
var url = document.getElementsByName("websiteURL")[0].value;
var hostName = document.getElementsByName("hostName")[0].value;
//alert(recipientName);
invitation = invitation.replace("recipientName",recipientName);
invitation = invitation.replace("organizationName",organizationName);
invitation = invitation.replace("eventDate",eventDate);
invitation = invitation.replace("hostName",hostName);
//invitation = invitation.replace("recipientName",recipientName);

alert(invitation);

//document.getElementById("abc").innerHTML = invitation;
}
</script>

</head>

<body>
<header>
<div class="top">
<a class="logo" href="index.html">CapellaVolunteers<span class="dotcom">.org</span></a>
</div>
<nav>
<ul class="topnav">
<li><a href="index.html">Home</a>
</li>
<li><a href="invitation.html" class="active">Invitation</a>
</li>
<li><a href="gallery.html">Gallery</a>
</li>
<li><a href="registration.html">Registration</a>
</li>
</ul>

</nav>
</header>
<section id="pageForm">
<form onsubmit="checkPageForm()">
<label for="recipientName">Recipient name:</label>
<input type="text" name="recipientName"placeholder="Enter your Recipient Name" />

<label for="organizationName">Organization name:
</label>
<input type="text" name="organizationName"placeholder="Enter your Organization Name" />

<label for="eventDate">Event Date:
</label>
<input type="text" name="eventDate"placeholder="Enter your Event Date" />

<label for="websiteURL">URL:
</label>
<input type="text" name="websiteURL"placeholder="Enter your Website URL" />

<label for="hostName_form">Host name:
</label>
<input type="text" name="hostName"placeholder="Host Name" />

<input type="submit" value="Submit" onclick="checkPageForm()">

</form>
</section>
</body>
</html>
