$(document).ready(function () {
  english();

  defaultCon();

  language = 'en';
  curvita = false;

  $('#theme').html('☀️');
});

let proj;
let curvita;
let language;

//DATA

const allProjects = {
  front: [
    {
      name: 'The Peopleiser',
      image: './assets/peopleiser.png',
      link: 'https://peopleiser.vercel.app/',
      description:
        'An app for visualising large numbers of people by putting them in vehicles (or Olympiastadion!).',
      tech: 'Keeping it simple with HTML, CSS, & jQuery',
    },
    {
      name: 'Crounter',
      image: './assets/crounter.png',
      link: 'https://crounter.vercel.app/',
      description:
        'Solving one of my own problems with an app that helps the user keep track of stitches, rows and pattern repeats on a single screen',
      tech: 'React.js hooks',
    },
    {
      name: 'Lucysco.de',
      image: 'assets/web3.png',
      link: 'https://lucysco.de',
      description:
        'Personal website, with portfolios of my code and crochet projects. This was an exercise in building a lightweight, single-page site without using a framework. Balancing simplicity with functionality has been an interesting discipline, especially when it comes to accessing data objects.',
      tech: 'HTML, CSS, jQuery',
    },
    {
      name: 'Science Tweets',
      image: './assets/scitwittick.png',
      link: 'https://science-ticker.herokuapp.com/',
      description:
        'Gets data from the Twitter API to deliver the latest tweets from New Scientist, Scientific American, and Nature, ticker-tape style',
      tech: 'node.js, express',
    },

    {
      name: 'txet-mess',
      image: './assets/txet-mess.png',
      link: 'https://txet-mess.vercel.app/',
      description:
        'It is a meme universally acknowledged that a word in possession of all its letters can still be easily read if the middle letters are scrambled, because the human brain reads the whole word not the individual letters...',
      tech: 'Old school vanilla JavaScript',
    },
    {
      name: 'Connect 4',
      image: './assets/connect4.png',
      link: 'https://connect4-lake.vercel.app/',
      description:
        'The classic game, but in hideous colours.</br> This is why you need to employ real designers.',
      tech: 'HTML, CSS, jQuery',
    },
  ],
  full: [
    {
      name: 'familyPhotos',
      image: './assets/famphotos.png',
      link: 'https://github.com/lucywho/tomanphotos',
      description:
        'Photo gallery app to help my parents view and organise 60+ years of family photos. Work in progress.',
      tech: 'NextJS, PostgreSQL database hosted on Railway.app, photos hosted by AWS S3',
    },
    {
      name: 'myTube',
      image: './assets/myTube.png',
      link: 'https://github.com/lucywho/mytube',
      description:
        'Video sharing app: view shared videos, subscribe to favourite users, and upload your own videos',
      tech: 'NextJS using ReactPlayer with a PostgreSQL database hosted on Railway.app, videos hosted by AWS S3',
    },
    {
      name: 'JobAwesome',
      image: './assets/jobawesome.png',
      link: 'https://github.com/lucywho/JobAwesome',
      description:
        'Find your place! Find your people! Companies can post jobs and applicants can apply directly through the app.',
      tech: 'NextJS and Tailwindcss, with Prisma and a PostgreSQL database',
    },
    {
      name: "Qira's Folk",
      image: './assets/QFlogo.png',
      link: 'https://github.com/lucywho/qiras-folk#qirasfolk',
      description: "Social Network SPA: Make friends, chat, and see who's new.",
      tech: 'Built in React.js using Redux, Socket.io, and a PostgreSQL database.',
    },
    {
      name: 'Imaginary Realities',
      image: './assets/lagoonsq.png',
      link: 'https://github.com/lucywho/imaginary-realities#imageboard',
      description:
        'Hubble-themed image board. Upload your own images and comment on other pictures.',
      tech: 'SPA built in Vue.js with a PostgreSQL database, using AWS S3 for image storage.',
    },
    {
      name: 'Prepositioner',
      image: './assets/PP-logo.png',
      link: 'https://github.com/lucywho/prepositioner',
      description:
        'Test your knowledge of German prepositions! Delivers 10 random questions each time, with the option to try again or to see the correct answer. Keeps score and gives positive feedback',
      tech: 'SPA built in React.js with a PostgreSQL database',
    },
    {
      name: 'Who For All!',
      image: './assets/whoforall.png',
      link: 'https://github.com/lucywho/who-for-all#who-for-all',
      description:
        'A fun petition site! Sign up to register your support for Doctor Who to be shown on all terrestrial TV channels across the world! Sign using the mouse or finger, add personal details, and see who else signed!',
      tech: 'Built with Handlebars and a PostgreSQL database.',
    },
  ],
  crochet: [
    {
      name: 'My First Blanket',
      stitch: 'classic granny squares',
      image: './assets/crochet/first-throw-dog.jpg',
      material: 'acrylic',
      pattern: { link: '', description: '' },
      description:
        "This was my first ever crochet project. It's badly made, the tension is all over the place, and the joins are ... idiosyncratic. But Old Dog loved it.",
    },
    {
      name: 'Huge Throw',
      stitch: 'granny squares and clusters',
      image: 'assets/crochet/big-throw.jpg',
      material: 'acrylic',
      pattern: { link: '', description: '' },
      description:
        "A huge improvement of my first attempt. By this point, I'd got the hang of the join-as-you-go method and was much more confident about mixing up stitches: hence the stripes of cluster stitches between the panels of granny squares.",
    },
    {
      name: 'Dog Jumper',
      stitch: 'houndstooth stitch',
      image: 'assets/crochet/dog-jumper.jpg',
      material: 'acrylic',
      pattern: {
        link: 'https://www.yarnspirations.com/red-heart-crochet-houndstooth-dog-sweater/RHC0729-030152M.html',
        description: 'Yarnspirations Houndstooth Dog Sweater',
      },
      description:
        'Old Dog was starting to feel the cold so I made her a jumper, heavily adapted from the free Yarnspirations pattern. As you can see, she was thrilled.',
    },
    {
      name: 'Blue Lemon Jumper',
      stitch: 'lemon peel stitch',
      image: 'assets/crochet/blue-stripes.jpg',
      material: 'Stylecraft Special DK',
      pattern: { link: '', description: '' },
      description:
        'I bought an enormous lot of yarn off eBay. There were only 2 balls of each shade, so stripy projects were the answer! I made this jumper and one in shades of pink.',
    },

    {
      name: 'Autumn Tunic',
      stitch: 'crosshatch stitch',
      image: 'assets/crochet/autumn-tunic.JPG',
      material: 'Ice Yarns Gonca',
      pattern: {
        link: 'https://www.ravelry.com/patterns/library/slanted-squares-sweater',
        description: 'Slanted Squares Sweater',
      },
      description:
        'This pattern from CroJennifer on Ravelry is easy and interesting to make - a rare combination! I loved it so much that I also made versions in green, pink, and blue for various family members. This was the first one that I kept for myself.',
    },
    {
      name: 'With A Little Help From My Friends',
      stitch: 'various stitches',
      image: 'assets/crochet/walhfmf-throw.JPG',
      material: 'Ice Yarns Gonca',
      pattern: {
        link: `https://www.hookedonsunshine.co/little-help-from-my-friends-cal`,
        description: 'With a little help from my friends CAL',
      },
      description:
        "I made this Crochet-Along blanket from Hooked on Sunshine for my husband. It incorporates a fascinating selection of stitches and techniques; most of which I hadn't used before. It was a lot of fun to make.",
    },
    {
      name: 'Big X',
      stitch: 'classic granny squares',
      image: 'assets/crochet/multicoloured-x-throw.jpg',
      material: 'Stylecraft Special DK ',
      pattern: { link: '', description: '' },
      description:
        'This was made with the leftovers from a huge eBay parcel of assorted yarn.',
    },
    {
      name: 'Side-to-Side Sweater',
      stitch: 'double, half-treble, and cross-stitches',
      image: 'assets/crochet/side-to-side-sweater.JPG',
      material: 'Ice Yarns self-striping acrylic',
      pattern: { link: '', description: '' },
      description:
        'The problem with self-striping yarns and conventional patterns is that you always get horizontal stripes. I really wanted vertical stripes so I designed this pattern, which is worked from side to side, along the full length of the front and back, in alternating rows of double, half treble and cross-stitch, and trimmed with half trebles around the neckline.',
    },
    {
      name: 'Sunflower Cardigan',
      stitch: 'sunflower granny squares',
      image: 'assets/crochet/sunflower-cardigan.JPG',
      material: 'Ice Yarns Gonca',
      pattern: { link: '', description: '' },
      description:
        "My daughter saw a picture online and asked if I could make her one of these. 'Of course', I said, before discovering that the creator had made it free-hand and there was no pattern! So, after a fair bit of trial and error, I managed to put it together myself, using the flat braid joining method and alternating front- and back- post trebles for the ribbing",
    },
    {
      name: 'The Cat Arse Throw',
      stitch: 'harlequin stitch',
      image: 'assets/crochet/cat-arse-throw.JPG',
      material: 'Ice Yarns Favourite acrylic',
      pattern: { link: '', description: '' },
      description:
        "I decided to use up some of my yarn stash and try out a new stitch... All I can say is, harlequin stitch is fun to crochet but don't do it in pink.",
    },
  ],
};

//FUNCTIONS

function defaultCon() {
  $('#contents').html(
    `<div class="welcome cont-default"><h2>Welcome to my website</h2></br></br><p>A gallery of stuff that I'm doing or thinking about</p>
        </br><p>Take a look around and get in touch!</p>
     </div>`
  );
}

function english() {
  $('#strapline').html(
    `<div class="strap1">full stack web dev</div><div class="strap2">project manager</div><div class="strap3">crochet addict</>`
  );
  $('.full').html('Full Stack Projects');
  $('.front').html('Front End Projects');
  $('.crochet').html('Crochet');
  $('.home').html('Home');
  $('#cv').html(`<i class="far fa-file-alt"></i><strong> about me</strong>`);
  $('#email').html(`email`);
  $('#lang').html('🇩🇪');
}

function german() {
  $('#strapline').html(
    `<div class="strap1">full stack web dev</div><div class="strap2">projektleiterin</div><div class="strap3">häkelsüchtige</>`
  );
  $('#cv').html(`<i class="far fa-file-alt"></i><strong> über mich</strong>`);
  $('#email').html(`E-mail`);
  $('.full').html('Full-Stack Projekte');
  $('.front').html('Front-End Projekte');
  $('.crochet').html('Häckeln');
  $('.home').html('Startseite');

  $('#lang').html('🇬🇧');
}

function setProjects() {
  $('#contents').html(`<div id="projwrap"></div>`);

  for (i = 0; i < proj.length; i++) {
    let title = proj[i].name;
    let link = proj[i].link;
    let image = proj[i].image;
    let description = proj[i].description;
    let tech = proj[i].tech;

    if ($('#contents').hasClass('light')) {
      let chunk = `<div id="${i}" class="project">   
                <a class="light" href=${link} target= _blank>
                    <h2 style="padding: 10px 0">${title}</h2>
                    <div id="image">
                        <img src=${image} alt="image for ${title} project" >
                    </div>
                    <div style="padding:10px 0">${description}</div>
                    <div>${tech}</div>
                </a>
            </div> `;

      $('#projwrap').append(chunk);
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
            </div> `;

      $('#projwrap').append(chunk);
    }
  }
}

function showFullstack() {
  curvita = false;
  proj = allProjects.full;
  setProjects(proj);
}

function showFront() {
  curvita = false;
  proj = allProjects.front;
  setProjects(proj);
}

function showCrochet() {
  curvita = false;
  $('#contents').html(`<div id="projwrap"></div>`);
  let croch = allProjects.crochet;

  for (i = 0; i < croch.length; i++) {
    let title = croch[i].name;
    let stitch = croch[i].stitch;
    let image = croch[i].image;
    let material = croch[i].material;
    let pattern = croch[i].pattern;
    let description = croch[i].description;

    if ($('#contents').hasClass('light')) {
      let chunk = `<div class="project">   
                    <h2 style="padding: 10px 0">${title}</h2>
                    <div id="image">
                        <img src=${image} alt="image for ${title} project" >
                    </div>
                    <a class="light" href="${pattern.link}">${pattern.description}</a>
                    <div>Made from ${material} yarn using ${stitch}</div>
                    <div style="padding:10px 0">${description}</div>
                
            </div> `;

      $('#projwrap').append(chunk);
    } else {
      let chunk = `<div class="project">   
        <h2 style="padding: 10px 0">${title}</h2>
        <div id="image">
            <img src=${image} alt="image for ${title} project" style="object-fit: cover">
        </div>
        <a href="${pattern.link}">${pattern.description}</a>
        <div>Made from ${material} yarn using ${stitch}</div>
        <div style="padding:10px 0">${description}</div>
    
</div> `;

      $('#projwrap').append(chunk);
    }
  }
  let copy = `<div style="font-size: 0.75rem; text-align: right">all images: &copy; Lucy Toman 2022</div>`;
  $('#projwrap').append(copy);
}

function showComing() {
  curvita = false;
  if (language === 'en') {
    $('#contents').html(`<div class="soon"><h4>What's Next?</h4>
    </br>
    <div class="soon-text">
    <p>This website started out as an experiment in building a single page application with no framework, and it was a lot of fun to do <strong>however</strong> frameworks do exist for reason, and I've really reached the end of what it is sensible to do with just HTML/CSS/JS.  I'm currently thinking about what I want my new website to look like and how I want people to use it. In particular, I think I want more space to talk about my projects, and to make it easier for users to navigate them, which is pushing me towards a more blog-style setup.
    </p>
    <p>I'm also torn between whether I want to start from scratch and learn something new, maybe refresh my Astro skills, perhaps ask AI to completely rebuild it and see what happens...
    Once I've worked out what I really want, and found some time in between other projects(!), then I'll decide on an appropriate framework and get building!</p>
    <p>In the meantime, I'm also revisiting my full stack projects. I've been working front-end only for a while now, and haven't had much time for personal projects, so my old full-stack Next.js projects are a bit (a lot!) out of date. I'm currently working on migrating them from pages router to app router. Unfortunately, the versions hosted on Vercel have lost their connection to their Railway databases recently, so I also need to fix that.</p>
    <p>...and, of course, I need to find time to crochet and do my day job!</p></div></div>`);
  } else {
    $('#contents').html(`<div class="soon"><h4>Demn&auml;chst?</h4>
    </br>
    <p>Eine komplette &Uuml;berarbeitung der Website, wenn ich die Zeit finde, zu entscheiden, was ich damit machen will...</p></div>`);
  }
}

function toggleCv() {
  if (language === 'en') {
    $('#contents').html(`
        <h4>About me</h4>
        <br/>
        <strong>Frontend web developer, shading towards full stack. </strong><br/>
        I\’m an experienced frontend developer with experience in a range of sectors including academic publishing, financial services and government. I specialise in creating reusable React components using frameworks such as Next.js and Nx, with an emphasis on writing clean, end-to-end tested code, and implementing responsive and accessible designs.
        </br></br>
        Currently working as a frontend software developer for a international IT services company. As well as working directly on client projects, I am also experimenting with AI tools to see how they can support our clients, particularly in generating MVPs and prototypes.
        <br/> <br/>
        <h5>Technical skills</h5>
        <strong>Frameworks:</strong> Nx, Next, React, Astro<br/>
        <strong>CI/CD:</strong> GitHub Actions, Cloudflare Workers<br/>
        <strong>Testing:</strong> Jest, Cypress, Vitest<br/>
        <strong>Languages:</strong> TypeScript/JavaScript, jQuery, HTML, CSS, TailwindCSS<br/>
        <strong>Backend:</strong> Express, Node, Databases - MySQL, Postgres, Prisma ORM<br/>
        <strong>Platforms & tools:</strong> Vercel, GitHub, AWS, Cloudflare, Railway, Postman, Heroku
        <br/><br/>
        <h5>Professional skills</h5>
        <strong>Team working:</strong> I work in remote, multi-disciplinary and multi-cultural teams, including with team members in diﬀerent organisations.<br/>
        <strong>Project management:</strong> I am a certified project manager, with over five years experience of working in Agile projects. I have extensive experience of managing a range of projects, including conference organisation, government policy reviews and legislative change.<br/>
        <strong>Communication:</strong> I write thorough and accessible documentation ranging from onboarding instructions to process documentation, and am comfortable briefing senior managers and presenting to customers.<br/>
        <strong>Languages:</strong> native English, intermediate German, basic French.
        <br/><br/>
        <h5>Personal skills</h5>
        I spent 15 years working as a project manager, policy advisor and team leader with the UK Civil Service. This gave me extensive experience of:<br/>
            &centerdot; working under pressure to meet legal and regulatory deadlines<br/>
            &centerdot; keeping the big picture in mind while sweating the details: making sure the final product works as expected, even in the edge cases<br/>
            &centerdot; building consensus among interest groups with apparently contradictory wishes in order to create outcomes that everyone can live with <br/>
            &centerdot; living with change: new agendas, radical reorganisations of the department, and frequently changing and reforming teams to meet rapidly changing external pressures
        <br/><br/> 
    `);
  } else {
    $('#contents').html(`
        <h4>&Uuml;ber mich</h4>
        <br/>
            <strong>Frontend-Webentwickler mit Tendenz zum Full-Stack</strong>
            <br/></br>
            Ich bin ein erfahrener Frontend-Entwickler mit Erfahrungen in verschiedenen Bereichen, einschließlich akademischem Verlagswesen, Finanzdienstleistungen und öffentlicher Verwaltung. Ich spezialisiere mich auf die Erstellung wiederverwendbarer React-Komponenten unter Verwendung von Frameworks wie Next.js und Nx, mit Schwerpunkt auf sauberem, end-to-end getestetem Code und der Implementierung responsiver und barrierefreier Designs. </br>Derzeit arbeite ich als Frontend-Software-Entwickler f&uuml;r ein internationales IT-Dienstleistungsunternehmen. Neben der direkten Arbeit an Kundenprojekten experimentiere ich auch mit KI-Tools, um zu sehen, wie sie unsere Kunden unterstützen können, insbesondere bei der Generierung von MVPs und Prototypen.
            </br></br>
            <h5>Technische F&auml;higkeiten</h5>
            <strong>Frameworks:</strong> Nx, Next, React, Astro<br/>
            <strong>CI/CD:</strong> GitHub Actions, Cloudflare Workers<br/>
            <strong>Testing:</strong> Jest, Cypress, Vitest<br/>
            <strong>Programmiersprachen:</strong> TypeScript/JavaScript, jQuery, HTML, CSS, Tailwind CSS<br/>
            <strong>Backend:</strong> Express, Node, Datenbanken - MySQL, Postgres, Prisma ORM<br/>
            <strong>Plattformen & Tools:</strong> Vercel, GitHub, AWS, Cloudflare, Railway, Postman, Heroku
            <br/><br/>
            <h5>Berufliche F&auml;higkeiten</h5>
            <strong>Teamarbeit:</strong> Ich arbeite in Remote-, multidisziplinären und multikulturellen Teams, einschließlich mit Teammitgliedern in verschiedenen Organisationen. <br/>
            <strong>Projektmanagement:</strong> Ich bin ein zertifizierter Projektmanager mit &uuml;ber f&uuml;nf Jahren Erfahrung in agilen Projekten. Ich habe umfangreiche Erfahrung in der Leitung verschiedener Projekte, einschließlich Konferenzorganisation, Überpr&uuml;fungen von Regierungsrichtlinien und Gesetzes&auml;nderungen. <br/>
            <strong>Kommunikation:</strong> Ich schreibe gr&uuml;ndliche und verst&auml;ndliche Dokumentation, die von Einführungsanleitungen bis hin zu Prozessdokumentation reicht, und bin es gewohnt, Führungskr&auml;fte zu briefen und Kunden zu pr&auml;sentieren. <br/>
            <strong>Sprachen:</strong> Muttersprache Englisch, mittleres Deutsch, grundlegendes Franz&ouml;sisch.
            <br/><br/>
            <h5>Personale F&auml;higkeiten</h5>
            Ich habe 15 Jahre lang als Projektmanagerin, politische Beraterin und Teamleiterin im britischen &ouml;ffentlichen Dienst gearbeitet. Dadurch konnte ich umfangreiche Erfahrungen sammeln<br/>
            &centerdot; Arbeiten unter Druck, um rechtliche und regulatorische Fristen einzuhalten</br> 
            &centerdot; Das große Ganze im Blick behalten und gleichzeitig auf Details achten: sicherstellen, dass das Endprodukt wie erwartet funktioniert, auch in Grenzf&auml;llen
            </br> 
            &centerdot; Konsens zwischen Interessengruppen mit scheinbar widerspr&uuml;chlichen Wünschen schaffen, um Ergebnisse zu erzielen, mit denen alle leben k&ouml;nnen</br> 
            &centerdot; Mit Ver&auml;nderungen leben: neue Agenden, radikale Umstrukturierungen der Abteilung und h&auml;ufig wechselnde und sich reformierende Teams, um sich schnell &auml;ndernden externen Druck zu begegnen
          `);
  }
  curvita = true;
}

function toggleImpress() {
  curvita = false;
  $('#impressum-footer').toggleClass('visible');
  document.getElementById('copyright-year').innerHTML =
    new Date().getFullYear();
}

function toggleLang() {
  if (language === 'en') {
    german();
    language = 'de';
  } else {
    english();
    language = 'en';
  }

  if (curvita) {
    toggleCv();
  }
}
function toggleTheme() {
  $('body, button, div, img, a, footer').toggleClass('light');

  $('h4, h5, p, li').toggleClass('light');

  if ($('#theme').hasClass('light')) {
    $('#theme').html('🌒');
  } else {
    $('#theme').html('☀️');
  }
}
