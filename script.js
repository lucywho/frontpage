let theme = $("head link#style").attr("href");

$(".self").html(
    '<img src="./assets/lucy.jpg" alt="Lucy Toman profile photo" />'
);
$(".name").html("Lucy Toman");
$(".contact-me").html(
    `<div id="cv"><i class='far fa-file-alt'></i> More about me</div>
    <a href="https://www.linkedin.com/in/lucytoman/" target="_blank"><i class='fab fa-linkedin'> </i> LinkedIn</a>
    <a href="https://github.com/lucywho" target="_blank"><i class='fab fa-github'> </i> GitHub </a>
    <a href="mailto:lucy.toman+website@gmail.com" target="_blank"><i class="far fa-envelope"> </i> Email </a>
    `
);

$(".modal-name").html(`<p class="name">Lucy Toman</p>`);

$(".cv-text").html(`
<h4>About me: the short version</h4>
<h5>What I'm doing now (and soon)</h5>

    <li>looking for a junior developer role with a fun, friendly, supportive company</li>
    <li>learning TypeScript</li>
    <li>digging deeper into Agile</li>

<h5>What I've done recently</h5>
<li>
    took a career break and realised that I had an opportunity to return to
    my first love of coding
</li>
<li>
    successfully completed a 12 week web-dev bootcamp, despite having to
    study remotely due to COVID-19
</li>
<li>built this website and 
    learned how to set up a GitHub workflow to automatically update the live
    website with new commits
</li>
<h5>What I used to do</h5>

    15 years with the UK civil service gave me fantastic experience of:
    <li>working under pressure to meet legal and regulatory deadlines</li>
    <li>
        keeping the big picture in mind while sweating the details: making
        sure legislation does what its supposed to even in the edge cases
    </li>
    <li>
        building consensus amoung interest groups with apparently
        contradictory wishes to create policies and laws that everyone can
        live with
    </li>
    <li>
        living with change: whether its a new government with a radically
        different agenda, a complete reorganisation of the department, or
        frequently changing and reforming teams
    </li>
`);

$(".print").html(
    `<h4>About me: the long version</h4><a href="./assets/LucyTomanCV.pdf" target="_blank"><i class='far fa-file-alt'></i> Full CV (opens in a new tab)</a></p>`
);

$(".theme").html('<button id="theme" onclick="toggleTheme()">🌒</button>');

function start() {
    $(".projects-header").html("Recent Projects");
    $(".text").html("Welcome to my website!");
    $(".lang").html(
        '<button id="lang" class="de" onclick="toggleLang()">🇩🇪</button>'
    );

    $(".about-me-text").html(
        `<strong>HIRE ME!</strong></br></br>I'm a recent graduate of <a href="https://www.spiced-academy.com/en/" target="_blank">Spiced Academy</a>'s full stack web development course. I write in vanilla JavaScript and jQuery, with Node.js. I have built projects using Handlebars, Vue and React, and have created databases with postgreSQL. Now I'm looking for new challenges as a junior developer.</br></br>
        I have a degree in Education and 15 years experience as a policy advisor and project manager in the UK Civil Service. Native English-speaker with Intermediate German</br></br>
        `
    );
}

function german() {
    $(".projects-header").html("Aktuelle Projekte");
    $(".text").html("Wilkommen auf meiner Website!");

    $(".lang").html(
        '<button id="lang" class="en" onclick="toggleLang()">🇬🇧</button> '
    );

    $(".about-me-text").html(
        `<strong>Ich bin die Richtige für Ihr Team!</strong></br></br>Ich habe den Full-Stack-Web-Developer-Kurs der <a href="https://www.spiced-academy.com/de/" target="_blank">Spiced Academy</a> absolviert. Ich schreibe in Vanilla JavaScript und jQuery mit Node.js. Ich habe Projekte mit Handlebars, Vue und React sowie Datenbanken mit PostgreSQL erstellt. Ich suche jetzt nach neuen Herausforderungen als Junior Developer.
            </br></br>
            Ich habe einen Abschluss in Bildung und kann 15 Jahre Erfahrung als Politikberaterin und Projektmanagerin im britischen öffentlichen Dienst vorweisen.</br></br>
          `
    );
}

function toggleLang() {
    if ($(".de")[0]) {
        german();
    } else {
        start();
    }
}

$(document).ready(function() {
    start();
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

$("div#cv").on("click", function(e) {
    $(".modal-container").addClass("vis");
});

$("#X").on("click", function(e) {
    $(".modal-container").removeClass("vis");
});
