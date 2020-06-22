let theme = $("head link#style").attr("href");

$(".self").html(
    '<img src="./assets/lucy.jpg" alt="Lucy Toman profile photo" />'
);
$(".name").html("Lucy Toman");
$(".lang").html('<button id="en">🇬🇧</button> <button id="de">🇩🇪</button> ');
$(".contact-me").html(
    `<a href="mailto:lucy.toman+website@gmail.com"><i class="far fa-envelope"> </i> email </a> <a href="https://github.com/lucywho"><i class='fab fa-github'> </i> GitHub </a> <a href="https://www.linkedin.com/in/lucytoman/"><i class='fab fa-linkedin'> </i> LinkedIn</a>`
);

$(".theme").html('<button id="theme" onclick="toggleTheme()">🌒</button>');

function start() {
    $(".projects-header").html("Recent Projects");
    $(".text").html("Welcome to my website!");
    $(".about-me-text").html(
        `<strong>HIRE ME!</strong></br></br>I'm a recent graduate of Spiced Academy's full stack web development course. I write in vanilla JavaScript and jQuery, with Node.js. I have built projects using Handlebars, Vue and React, and have created databases with postgreSQL.Now I'm looking for new challenges as a junior developer.</br></br>
        I have a degree in Education and 15 years experience as a policy advisor and project manager in the UK Civil Service. Native English-speaker with B1+ German</br></br>
        `
    );
    $(".under-construction").html(
        `<em>Note: This website is still under construction and some "Recent Projects" link to github respositories.</em>`
    );
}

$(document).ready(function() {
    start();
});

$("#en").click(function() {
    start();
});

$("#de").click(function() {
    $(".projects-header").html("Aktuelle Projekte");
    $(".text").html("Wilkommen auf meiner Website!");

    $(".about-me-text").html(
        `<strong>Ich bin die Richtige für Ihr Team!</strong></br></br>Ich habe den Full-Stack-Web-Developer-Kurs der Spiced Academy absolviert. Ich schreibe in Vanilla JavaScript und jQuery mit Node.js. Ich habe Projekte mit Handlebars, Vue und React sowie Datenbanken mit PostgreSQL erstellt. Ich suche jetzt nach neuen Herausforderungen als Junior Developer.
        </br></br>
        Ich habe einen Abschluss in Bildung und kann 15 Jahre Erfahrung als Politikberaterin und Projektmanagerin im britischen öffentlichen Dienst vorweisen.</br></br>
      `
    );
    $(".under-construction").html(
        `<em> Hinweis: Diese Website befindet sich noch im Aufbau und einige "Aktuelle Projekte" verlinken auf Github Repositories.</em>`
    );
});

function toggleTheme() {
    if (theme == "style.css") {
        theme = "dark.css";
        $("head link#style").attr("href", theme);
        $(".theme").html(
            '<button id="theme" onclick="toggleTheme()">☀️</button>'
        );
    } else {
        theme = "style.css";
        $("head link#style").attr("href", theme);
        $(".theme").html(
            '<button id="theme" onclick="toggleTheme()">🌒</button>'
        );
    }
}
