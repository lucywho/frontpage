export function setProjects(proj) {
  $('#contents').html(`<div id="projwrap"></div>`);

  for (let i = 0; i < proj.length; i++) {
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
