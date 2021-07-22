count = undefined;

// this function is called once HTML has loaded completely
window.onload = function() {
    console.log('initializing')

    // Get the count input field
    var countElem = document.getElementById("recipientCount_form");
    var recipientsDiv = document.getElementById("recipientsDiv_form");
    console.log(countElem)
    console.log(recipientsDiv)

    // Execute a function when the user releases a key on the keyboard
    countElem.addEventListener("keyup", function(event) {

        // Cancel the default action, if needed
        event.preventDefault();

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            count = parseInt(countElem.value);

            // remove if any field already exists
            recipientsDiv.innerHTML = '';

            var newInnerHtml = '';

            for (var i = 1; i <= count; i++) {
                newInnerHtml += '<label for="recipientName' + i + '">Recipient' + i + ' name:</label>'
                newInnerHtml += '<input type="text" name="recipientName' + i + '" placeholder="Enter Recipient ' + i + ' Name" id="recipientName' + i + '_form" />';
            }

            recipientsDiv.innerHTML = newInnerHtml;
        }
    });
}

function create_invitation() {
    if (count == undefined) {
        alert('There are no recipients to print invitation for.');
        return
    }
    var finalInvitationsDiv = document.getElementById("finalInvitations");

    finalInvitationsDiv.innerHTML = ''

    var invitation = 'Hello $recipientName$!<br/><br/> You have been invited to volunteer for an event held by $organizationName$ on $eventDate$. Please come to the following website: $websiteURL$ to sign up as a volunteer.<br/><br/> Thanks!<br/><br/>$hostName$'

    var organizationName = document.getElementById("organizationName_form").value;
    var eventDate = document.getElementById("eventDate_form").value;
    var websiteURL = document.getElementById("websiteURL_form").value;
    var hostName = document.getElementById("hostName_form").value;

    invitation = invitation.replace('$organizationName$', organizationName)
    invitation = invitation.replace('$eventDate$', eventDate)
    invitation = invitation.replace('$websiteURL$', websiteURL)
    invitation = invitation.replace('$hostName$', hostName)

    for (var i = 1; i <= count; i++) {
        var recipientName = document.getElementById("recipientName" + i + "_form").value;

        var invitation_copy = invitation;
        var result = invitation_copy.replace('$recipientName$', recipientName)

        finalInvitationsDiv.innerHTML += '<article id="invitaition_' + i + '">' + result + '</article>'
    }
    document.getElementById("recipientName").innerHTML = RecipientName;

}