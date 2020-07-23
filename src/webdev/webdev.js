$(document).ready( function() {

    //clicking the nav buttons
    $(".navitem").click(function() {
        const destination = $(this).text();
        switch (destination) {
            case "Lighting": 
                window.location.assign("../lighting/lighting.html");
                break;
            case "Web Dev": 
                window.location.assign("./webdev.html");
                break;
            case "Contact": 
                window.location.assign("../contact/contact.html");
                break;
            default: 
                window.location.assign("../../index.html");
                break;
        }
    });
});