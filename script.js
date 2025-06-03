import { allProjects } from './data/allProjects.js';
import { english, german } from './utils/languages.js';
import { setProjects } from './utils/setProjects.js';
import { welcomeText } from './components/welcome.js';
import { setCrochetProjects } from './utils/setCrochetProjects.js';

$(document).ready(function () {
  english();

  welcomeText();

  language = 'en';
  curvita = false;

  $('#theme').html('☀️');
});

let proj;
let curvita;
let language;

//FUNCTIONS

window.showFullstack = function () {
  curvita = false;
  proj = allProjects.full;
  setProjects(proj);
};

window.showFront = function () {
  curvita = false;
  proj = allProjects.front;
  setProjects(proj);
};

window.showCrochet = function () {
  curvita = false;
  proj = allProjects.crochet;
  setCrochetProjects(proj);
};

window.showComing = function () {
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
};

window.toggleCv = function () {
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
};

window.toggleImpress = function () {
  curvita = false;
  $('#impressum-footer').toggleClass('visible');
  document.getElementById('copyright-year').innerHTML =
    new Date().getFullYear();
};

window.toggleLang = function () {
  if (language === 'en') {
    german();
    language = 'de';
  } else {
    english();
    language = 'en';
  }

  if (curvita) {
    toggleCv();
  } else if ($('#contents > div').hasClass('soon')) {
    showComing();
  }
};
window.toggleTheme = function () {
  $('body, button, div, img, a, footer').toggleClass('light');

  $('h4, h5, p, li').toggleClass('light');

  if ($('#theme').hasClass('light')) {
    $('#theme').html('🌒');
  } else {
    $('#theme').html('☀️');
  }
};
