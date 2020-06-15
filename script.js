console.log("script attached", $);

let theme = $("head link#style").attr("href");

$(".self").html('<img src="./assets/lucy.JPG" alt="Lucy Toman" />');
$(".name").html("Lucy Toman");
$(".lang").html('<button id="en">🇬🇧</button> <button id="de"> 🇩🇪</button> ');
$(".theme").html(
    '<button id="theme" onclick="toggleTheme()">dark mode</button>'
);

$(".projects-header").html("Recent Projects!");
$(".text").html("Welcome to my website");
$(".about-me").html(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut exercitationem quibusdam impedit facilis ipsum nulla aut laboriosam consequatur, modi quas voluptas, nostrum illo consequuntur recusandae atque quo porro debitis! Eaque."
);

$("#en").click(function() {
    $(".projects-header").html("Recent Projects!");
    $(".text").html("Welcome to my website");
    $(".about-me").html(
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut exercitationem quibusdam impedit facilis ipsum nulla aut laboriosam consequatur, modi quas voluptas, nostrum illo consequuntur recusandae atque quo porro debitis! Eaque."
    );
});

$("#de").click(function() {
    $(".projects-header").html("Neue Projekte");
    $(".text").html("Wilkommen auf meiner Website!");

    $("about-me").html(
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut exercitationem quibusdam impedit facilis ipsum nulla aut laboriosam consequatur, modi quas voluptas, nostrum illo consequuntur recusandae atque quo porro debitis! Eaque."
    );
});

function toggleTheme() {
    if (theme == "style.css") {
        theme = "dark.css";
        $("head link#style").attr("href", theme);
        $(".theme").html(
            '<button id="theme" onclick="toggleTheme()">light mode</button>'
        );
    } else {
        theme = "style.css";
        $("head link#style").attr("href", theme);
        $(".theme").html(
            '<button id="theme" onclick="toggleTheme()">dark mode</button>'
        );
    }
}
