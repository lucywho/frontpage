export function setCrochetProjects(crochet) {
  $('#contents').html(`<div id="projwrap"></div>`);

  for (let i = 0; i < crochet.length; i++) {
    let title = crochet[i].name;
    let stitch = crochet[i].stitch;
    let image = crochet[i].image;
    let material = crochet[i].material;
    let pattern = crochet[i].pattern;
    let description = crochet[i].description;

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
  let year = new Date().getFullYear();
  let copy = `<div style="font-size: 0.75rem; text-align: right">all images: &copy; ${year} Lucy Toman  </div>`;
  $('#projwrap').append(copy);
}
