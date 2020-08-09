$(document).ready(function() {
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
        $("#light_link").animate({opacity:1.0}, "fast");
    });
    $(".subject1").mouseleave(function() {
        $("#light_link").stop();
        $("#light_link").animate({opacity:0.8}, "fast");
    });
    $(".subject1").click(function() {
        window.location.assign("./src/lighting/lighting.html");
    });

    //mouse interaction for web dev subject
    $(".subject2").mouseenter(function(){
        $("#web_link").stop();
        $("#web_link").animate({opacity:1}, "fast");
    });
    $(".subject2").mouseleave(function() {
        $("#web_link").stop();
        $("#web_link").animate({opacity:0.8}, "fast");
    });
    $(".subject2").click(function() {
        window.location.assign("./src/webdev/webdev.html");
    });
});
