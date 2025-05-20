$(document).ready(function () {
    english()

    defaultCon()

    language = "en"
    curvita = false

    $("#theme").html("☀️")
})

let proj
let curvita
let language

//DATA

const allProjects = {
    front: [
        {
            name: "The Peopleiser",
            image: "./assets/peopleiser.png",
            link: "https://peopleiser.vercel.app/",
            description:
                "An app for visualising large numbers of people by putting them in vehicles (or Olympiastadion!).",
            tech: "Keeping it simple with HTML, CSS, & jQuery",
        },
        {
            name: "Crounter",
            image: "./assets/crounter.png",
            link: "https://crounter.vercel.app/",
            description:
                "Solving one of my own problems with an app that helps the user keep track of stitches, rows and pattern repeats on a single screen",
            tech: "React.js hooks",
        },
        {
            name: "Lucysco.de",
            image: "assets/web3.png",
            link: "https://lucysco.de",
            description:
                "Personal website, with portfolios of my code and crochet projects. This was an exercise in building a lightweight, single-page site without using a framework. Balancing simplicity with functionality has been an interesting discipline, especially when it comes to accessing data objects.",
            tech: "HTML, CSS, jQuery",
        },
        {
            name: "Science Tweets",
            image: "./assets/scitwittick.png",
            link: "https://science-ticker.herokuapp.com/",
            description:
                "Gets data from the Twitter API to deliver the latest tweets from New Scientist, Scientific American, and Nature, ticker-tape style",
            tech: "node.js, express",
        },

        {
            name: "txet-mess",
            image: "./assets/txet-mess.png",
            link: "https://txet-mess.vercel.app/",
            description:
                "It is a meme universally acknowledged that a word in possession of all its letters can still be easily read if the middle letters are scrambled, because the human brain reads the whole word not the individual letters...",
            tech: "Old school vanilla JavaScript",
        },
        {
            name: "Connect 4",
            image: "./assets/connect4.png",
            link: "https://connect4-lake.vercel.app/",
            description:
                "The classic game, but in hideous colours.</br> This is why you need to employ real designers.",
            tech: "HTML, CSS, jQuery",
        },
    ],
    full: [
        {
            name: "myTube",
            image: "./assets/myTube.png",
            link: "https://mytube-xi.vercel.app/",
            description:
                "Video sharing app: view shared videos, subscribe to favourite users, and upload your own videos",
            tech: "NextJS using ReactPlayer with a PostgreSQL database hosted on Railway.app, videos hosted by AWS S3",
        },
        {
            name: "JobAwesome",
            image: "./assets/jobawesome.png",
            link: "http://job-board-red.vercel.app/",
            description:
                "Find your place! Find your people! Companies can post jobs and applicants can apply directly through the app.",
            tech: "NextJS and Tailwindcss, with Prisma and a PostgreSQL database",
        },
        {
            name: "Qira's Folk",
            image: "./assets/QFlogo.png",
            link: "https://github.com/lucywho/qiras-folk#qirasfolk",
            description:
                "Social Network SPA: Make friends, chat, and see who's new.",
            tech: "Built in React.js using Redux, Socket.io, and a PostgreSQL database.",
        },
        {
            name: "Imaginary Realities",
            image: "./assets/lagoonsq.png",
            link: "https://github.com/lucywho/imaginary-realities#imageboard",
            description:
                "Hubble-themed image board. Upload your own images and comment on other pictures.",
            tech: "SPA built in Vue.js with a PostgreSQL database, using AWS S3 for image storage.",
        },
        {
            name: "Prepositioner",
            image: "./assets/PP-logo.png",
            link: "https://github.com/lucywho/prepositioner",
            description:
                "Test your knowledge of German prepositions! Delivers 10 random questions each time, with the option to try again or to see the correct answer. Keeps score and gives positive feedback",
            tech: "SPA built in React.js with a PostgreSQL database",
        },
        {
            name: "Who For All!",
            image: "./assets/whoforall.png",
            link: "https://github.com/lucywho/who-for-all#who-for-all",
            description:
                "A fun petition site! Sign up to register your support for Doctor Who to be shown on all terrestrial TV channels across the world! Sign using the mouse or finger, add personal details, and see who else signed!",
            tech: "Built with Handlebars and a PostgreSQL database.",
        },
    ],
    crochet: [
        {
            name: "My First Blanket",
            stitch: "classic granny squares",
            image: "./assets/crochet/first-throw-dog.jpg",
            material: "acrylic",
            pattern: { link: "", description: "" },
            description:
                "This was my first ever crochet project. It's badly made, the tension is all over the place, and the joins are ... idiosyncratic. But Old Dog loved it.",
        },
        {
            name: "Huge Throw",
            stitch: "granny squares and clusters",
            image: "assets/crochet/big-throw.jpg",
            material: "acrylic",
            pattern: { link: "", description: "" },
            description:
                "A huge improvement of my first attempt. By this point, I'd got the hang of the join-as-you-go method and was much more confident about mixing up stitches: hence the stripes of cluster stitches between the panels of granny squares.",
        },
        {
            name: "Dog Jumper",
            stitch: "houndstooth stitch",
            image: "assets/crochet/dog-jumper.jpg",
            material: "acrylic",
            pattern: {
                link: "https://www.yarnspirations.com/red-heart-crochet-houndstooth-dog-sweater/RHC0729-030152M.html",
                description: "Yarnspirations Houndstooth Dog Sweater",
            },
            description:
                "Old Dog was starting to feel the cold so I made her a jumper, heavily adapted from the free Yarnspirations pattern. As you can see, she was thrilled.",
        },
        {
            name: "Blue Lemon Jumper",
            stitch: "lemon peel stitch",
            image: "assets/crochet/blue-stripes.jpg",
            material: "Stylecraft Special DK",
            pattern: { link: "", description: "" },
            description:
                "I bought an enormous lot of yarn off eBay. There were only 2 balls of each shade, so stripy projects were the answer! I made this jumper and one in shades of pink.",
        },

        {
            name: "Autumn Tunic",
            stitch: "crosshatch stitch",
            image: "assets/crochet/autumn-tunic.JPG",
            material: "Ice Yarns Gonca",
            pattern: {
                link: "https://www.ravelry.com/patterns/library/slanted-squares-sweater",
                description: "Slanted Squares Sweater",
            },
            description:
                "This pattern from CroJennifer on Ravelry is easy and interesting to make - a rare combination! I loved it so much that I also made versions in green, pink, and blue for various family members. This was the first one that I kept for myself.",
        },
        {
            name: "With A Little Help From My Friends",
            stitch: "various stitches",
            image: "assets/crochet/walhfmf-throw.JPG",
            material: "Ice Yarns Gonca",
            pattern: {
                link: `https://www.hookedonsunshine.co/little-help-from-my-friends-cal`,
                description: "With a little help from my friends CAL",
            },
            description:
                "I made this Crochet-Along blanket from Hooked on Sunshine for my husband. It incorporates a fascinating selection of stitches and techniques; most of which I hadn't used before. It was a lot of fun to make.",
        },
        {
            name: "Big X",
            stitch: "classic granny squares",
            image: "assets/crochet/multicoloured-x-throw.jpg",
            material: "Stylecraft Special DK ",
            pattern: { link: "", description: "" },
            description:
                "This was made with the leftovers from a huge eBay parcel of assorted yarn.",
        },
        {
            name: "Side-to-Side Sweater",
            stitch: "double, half-treble, and cross-stitches",
            image: "assets/crochet/side-to-side-sweater.JPG",
            material: "Ice Yarns self-striping acrylic",
            pattern: { link: "", description: "" },
            description:
                "The problem with self-striping yarns and conventional patterns is that you always get horizontal stripes. I really wanted vertical stripes so I designed this pattern, which is worked from side to side, along the full length of the front and back, in alternating rows of double, half treble and cross-stitch, and trimmed with half trebles around the neckline.",
        },
        {
            name: "Sunflower Cardigan",
            stitch: "sunflower granny squares",
            image: "assets/crochet/sunflower-cardigan.JPG",
            material: "Ice Yarns Gonca",
            pattern: { link: "", description: "" },
            description:
                "My daughter saw a picture online and asked if I could make her one of these. 'Of course', I said, before discovering that the creator had made it free-hand and there was no pattern! So, after a fair bit of trial and error, I managed to put it together myself, using the flat braid joining method and alternating front- and back- post trebles for the ribbing",
        },
        {
            name: "The Cat Arse Throw",
            stitch: "harlequin stitch",
            image: "assets/crochet/cat-arse-throw.JPG",
            material: "Ice Yarns Favourite acrylic",
            pattern: { link: "", description: "" },
            description:
                "I decided to use up some of my yarn stash and try out a new stitch... All I can say is, harlequin stitch is fun to crochet but don't do it in pink.",
        },
    ],
}

//FUNCTIONS

function defaultCon() {
    $("#contents").html(
        `<div class="soon cont-default"><h2>Welcome to my website</h2></br></br><p>A gallery of stuff that I'm doing or thinking about</p>
        </br><p>Take a look around and get in touch!</p>
     </div>`
    )
}

function english() {
    $("#strapline").html(
        `<div class="strap1">full stack web dev</div><div class="strap2">project manager</div><div class="strap3">crochet addict</>`
    )
    $(".full").html("Full Stack Projects")
    $(".front").html("Front End Projects")
    $(".crochet").html("Crochet")
    $(".home").html("Home")
    $("#cv").html(`<i class="far fa-file-alt"></i><strong> about me</strong>`)
    $("#email").html(`email`)
    $("#lang").html("🇩🇪")
}

function german() {
    $("#strapline").html(
        `<div class="strap1">full stack web dev</div><div class="strap2">projektleiterin</div><div class="strap3">häkelsüchtige</>`
    )
    $("#cv").html(`<i class="far fa-file-alt"></i><strong> über mich</strong>`)
    $("#email").html(`E-mail`)
    $(".full").html("Full-Stack Projekte")
    $(".front").html("Front-End Projekte")
    $(".crochet").html("Häckeln")
    $(".home").html("Startseite")

    $("#lang").html("🇬🇧")
}

function setProjects() {
    $("#contents").html(`<div id="projwrap"></div>`)

    for (i = 0; i < proj.length; i++) {
        let title = proj[i].name
        let link = proj[i].link
        let image = proj[i].image
        let description = proj[i].description
        let tech = proj[i].tech

        if ($("#contents").hasClass("light")) {
            let chunk = `<div id="${i}" class="project">   
                <a class="light" href=${link} target= _blank>
                    <h2 style="padding: 10px 0">${title}</h2>
                    <div id="image">
                        <img src=${image} alt="image for ${title} project" >
                    </div>
                    <div style="padding:10px 0">${description}</div>
                    <div>${tech}</div>
                </a>
            </div> `

            $("#projwrap").append(chunk)
        } else {
            let chunk = `<div id="${i}" class="project">   
                <a href=${link} target= _blank>
                    <h2 style="padding: 10px 0">${title}</h2>
                    <div id="image">
                        <img src=${image} alt="image for ${title} project" >
                    </div>
                    <div style="padding:10px 0">${description}</div>
                    <div>${tech}</div>
                </a>
            </div> `

            $("#projwrap").append(chunk)
        }
    }
}

function showFullstack() {
    curvita = false
    proj = allProjects.full
    setProjects(proj)
}

function showFront() {
    curvita = false
    proj = allProjects.front
    setProjects(proj)
}

function showCrochet() {
    curvita = false
    $("#contents").html(`<div id="projwrap"></div>`)
    let croch = allProjects.crochet

    for (i = 0; i < croch.length; i++) {
        let title = croch[i].name
        let stitch = croch[i].stitch
        let image = croch[i].image
        let material = croch[i].material
        let pattern = croch[i].pattern
        let description = croch[i].description

        if ($("#contents").hasClass("light")) {
            let chunk = `<div class="project">   
                    <h2 style="padding: 10px 0">${title}</h2>
                    <div id="image">
                        <img src=${image} alt="image for ${title} project" >
                    </div>
                    <a class="light" href="${pattern.link}">${pattern.description}</a>
                    <div>Made from ${material} yarn using ${stitch}</div>
                    <div style="padding:10px 0">${description}</div>
                
            </div> `

            $("#projwrap").append(chunk)
        } else {
            let chunk = `<div class="project">   
        <h2 style="padding: 10px 0">${title}</h2>
        <div id="image">
            <img src=${image} alt="image for ${title} project" style="object-fit: cover">
        </div>
        <a href="${pattern.link}">${pattern.description}</a>
        <div>Made from ${material} yarn using ${stitch}</div>
        <div style="padding:10px 0">${description}</div>
    
</div> `

            $("#projwrap").append(chunk)
        }
    }
    let copy = `<div style="font-size: 0.75rem; text-align: right">all images: &copy; Lucy Toman 2022</div>`
    $("#projwrap").append(copy)
}

function showComing() {
    curvita = false
    $("#contents").html(`<div class="soon "><h4>What's Next?</h4>
    <p>This website started out as an experiment in building a single page application with no framework, and it was a lot of fun to do <strong>however</strong> frameworks do exist for reason, and I've really reached the end of what it is possible and/or sensible to do with just HTML/CSS/JS.</br></br>
    I'm currently thinking about what I want my new website to look like and how I want people to use it. In particular, I think I want more space to talk about my projects, and to make it easier for users to navigate them, which is pushing me towards a more blog-style setup.</br></br>
    Once I've worked out what I really want, and found some time in between other projects(!), then I'll decide on an appropriate framework and get building!</p></div>`)
}

function toggleCv() {
    if (language === "en") {
        $("#contents").html(`<h4>About me</h4>
    <br/>
    <strong>Junior full stack web developer. </strong><br/>HTML. CSS and tailwind. JavaScript and Typescript. Vue, React and Next. postgreSQL and Prisma.</br></br>
    I have a bachelors degree in Education, 15 years experience as a policy and project manager in the UK Civil Service, and have worked as a technical copy editor and product manager. <br/>I'm a native speaker of British English with intermediate German (CEFR level: B2).
    <br/> <br/>
    <h5>What I'm doing now</h5>
    &centerdot; a training internship with an international IT services company</br>
    &centerdot; learning about CSS algorithms
       <br/><br/>
    <h5>What I've done recently</h5>
    &centerdot; learned TypeScript<br/>
    &centerdot; done an online web-dev bootcamp focussed on Next.js<br/>
    &centerdot; deployed this website using GitHub workflow to automatically update the live website with new commits<br/>
    &centerdot; studied German to B2 level<br/>
    <br/>
    <h5>What I used to do</h5>
    I spend 15 years working as a project manager, policy advisor and team leader with the UK civil service. This gave me extensive experience of:<br/>
    &centerdot; working under pressure to meet legal and regulatory deadlines<br/>
    &centerdot; keeping the big picture in mind while sweating the details: making sure the final product works as expected, even in the edge cases<br/>
    &centerdot; building consensus among interest groups with apparently contradictory wishes in order to create outcomes that everyone can live with
    <br/>
    &centerdot; living with change: new agendas, radical reorganisations of the department, and frequently changing and reforming teams to meet rapidly changing external pressures
        <br/><br/>
        
    `)
    } else {
        $("#contents").html(`<h4>Über mich</h4>
                <br/>
                <strong>Junior Full-Stack-Entwickler</strong><br/>&centerdot;HTML<br/>&centerdot;CSS & tailwind<br/>&centerdot;JavaScript & Typescript<br/>&centerdot;Vue, React & Next<br/>&centerdot;postgreSQL & Prisma.</br></br>
            
            Ich habe einen Abschluss in Pädagogik und kann 15 Jahre Erfahrung als Politikberaterin und Projektleiterin im britischen öffentlichen Dienst vorweisen.</br></br>
            Ich spreche Deutsch auf mittlerem Niveau (CEFR B2) und Englisch als Muttersprache.
          `)
    }
    curvita = true
}

function showImpress() {
    curvita = false
    $("#contents")
        .html(`<div class="center-impress"><div class="center-impress"><h4>Impressum</h4>
    <br/>
    <h6>Website designed and built by:</h6>Lucy Toman<br/>
    Wildhüterweg 25, 12353 Berlin<br/>
    lucy@toman.me.uk
    <br/>
    <h6>Steuernummer</h6>DE320203693<br/>
    <h6>Registrierte Mitgliedschaften</h6>Industrie - und Handelsksmmer zu Berlin<br/>
    </div></div>
    `)
}

function toggleLang() {
    if (language === "en") {
        german()
        language = "de"
    } else {
        english()
        language = "en"
    }

    if (curvita) {
        toggleCv()
    }
}
function toggleTheme() {
    $("body, button, div, img, a").toggleClass("light")

    $("h4, h5, p, li").toggleClass("light")

    if ($("#theme").hasClass("light")) {
        $("#theme").html("🌒")
    } else {
        $("#theme").html("☀️")
    }
}
