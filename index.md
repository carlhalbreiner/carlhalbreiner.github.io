<html>    
    <head>
        <link rel="stylesheet" href="./index.css" />
        <title>Carl Halbreiner LD and Web Dev</title>
        <link rel="shortcut icon" href="resources/logo.jpg">
        <!-- link to jquery and the index.js script-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="./index.js"></script>
    </head>
    <body>
        <!--Navigation bar-->
        <nav>
            <img id="logo" src="./resources/logo.jpg">
            <div class="navbar">
                <div  id= "active_tab" class="navitem"><p>Home</p></div>
                <div class="navitem"><p>Lighting</p></div>
                <div class="navitem"><p>Web Dev</p></div>
                <div class="navitem"><p>Contact</p></div>
            </div>
        </nav>
        <!--Introduction block-->
        <div class="start_block">
            <h1 id="page_title">Carl Halbreiner<br>Lighting<br>and<br>Website Design</h1>
            <p id="description">Carl Halbreiner is a Theatrical and Dance Lighting Designer as well as a Website Designer and Developer. 
                Born in Bethesda, Maryland, right outside of Washington, DC, He fell in love with Computers at a young age. 
                After completing a Computer Science Degree at Oberlin College, he discovered an interest in working backstage in the Theater.
                A creative at heart, he developed into the designer he is now, both online and on stage.
            </p>
        </div>
        <!--Subject Blocks with links to design pages-->
        <div class="subjects">
            <h1>Creative Subjects</h1>
            <div class="subj_container"> 
                <div class = "subject1">
                    <h2 id = "light_link">Lighting</h2>
                </div>
                <div class = "subject2">
                    <h2 id="web_link">Web Design</h2>
                </div>
            </div>
        </div>
        <!--Foot navbar NEEDS TO ACTUALLY DO SOMETHING-->
        <div class="footer">
            <div class="footnav">
                <p><a href="./index.html">home</a>   |   <a href="./src/contact/contact.html">contact</a></p>
            </div>
        </div>
    </body>
</html>