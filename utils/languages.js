export function english() {
  document.getElementById(
    'strapline'
  ).innerHTML = `<div class="strap1">full stack web dev</div><div class="strap2">project manager</div><div class="strap3">crochet addict</div>`;

  document.getElementById('full').innerHTML = 'Full Stack Projects';
  document.getElementById('front').innerHTML = 'Front End Projects';
  document.getElementById('crochet').innerHTML = 'Crochet';
  document.getElementById('coming').innerHTML = 'Coming up';
  document.getElementById('home').innerHTML = 'Home';

  document.getElementById(
    'cv'
  ).innerHTML = `<i class="far fa-file-alt"></i><strong> about me</strong>`;
  document.getElementById('email').innerHTML = 'email';
  document.getElementById('lang').innerHTML = '🇩🇪';
}

export function german() {
  document.getElementById(
    'strapline'
  ).innerHTML = `<div class="strap1">full stack web dev</div><div class="strap2">projektleiterin</div><div class="strap3">häkelsüchtige</div>`;

  document.getElementById('full').innerHTML = 'Full-Stack Projekte';
  document.getElementById('front').innerHTML = 'Front-End Projekte';
  document.getElementById('crochet').innerHTML = 'Häckeln';
  document.getElementById('coming').innerHTML = 'Kommend';
  document.getElementById('home').innerHTML = 'Startseite';

  document.getElementById(
    'cv'
  ).innerHTML = `<i class="far fa-file-alt"></i><strong> über mich</strong>`;
  document.getElementById('email').innerHTML = `E-mail`;
  document.getElementById('lang').innerHTML = '🇬🇧';
}
