$(document).ready(function() {
    //Init page
    $("#light_link").hide();
    $("#web_link").hide();

    //clicking the nav buttons
    $(".navitem").click(function() {
        const destination = $(this).text();
        switch (destination) {
            case "Lighting": 
                window.location.assign("./src/lighting/lighting.html");
                break;
            case "Web Dev": 
                window.location.assign("./src/webdev/webdev.html");
                break;
            case "Contact": 
                window.location.assign("./src/contact/contact.html");
                break;
            default: 
                window.location.assign("./index.html");
                break;
        }
    });

    //mouse interaction for lighting subject
    $(".subject1").mouseenter(function(){
        $("#light_link").stop();
        $("#light_link").fadeIn("fast");
    });
    $(".subject1").mouseleave(function() {
        $("#light_link").stop();
        $("#light_link").fadeOut("fast");
    });
    $(".subject1").click(function() {
        window.location.assign("./src/lighting/lighting.html");
    });

    //mouse interaction for web dev subject
    $(".subject2").mouseenter(function(){
        $("#web_link").stop();
        $("#web_link").fadeIn("fast");
    });
    $(".subject2").mouseleave(function() {
        $("#web_link").stop();
        $("#web_link").fadeOut("fast");
    });
    $(".subject2").click(function() {
        window.location.assign("./src/webdev/webdev.html");
    });
});
