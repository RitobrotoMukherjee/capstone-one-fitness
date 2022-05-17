const documentRange = document.createRange();

const trainers = [
  {
    image: '../assets/images/trainers/first-trainer.jpg',
    name: 'Bret D. Bowers',
    qualification: 'Strength Trainer',
    description: 'Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.',
  },
  {
    image: '../assets/images/trainers/second-trainer.jpg',
    name: 'Hector T. Daigl',
    qualification: 'Power Trainer',
    description: 'Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.',
  },
  {
    image: '../assets/images/trainers/third-trainer.jpg',
    name: 'Paul D. Newmans',
    qualification: 'Calisthenics',
    description: 'Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.',
  },
  {
    image: '../assets/images/trainers/first-trainer.jpg',
    name: 'Bret D. Bowers',
    qualification: 'Strength Trainer',
    description: 'Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.',
  },
  {
    image: '../assets/images/trainers/second-trainer.jpg',
    name: 'Hector T. Daigl',
    qualification: 'Power Trainer',
    description: 'Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.',
  },
  {
    image: '../assets/images/trainers/third-trainer.jpg',
    name: 'Paul D. Newmans',
    qualification: 'Calisthenics',
    description: 'Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.',
  },
];
function getHtml(trainers) {
  let html = '';
  for (let i = 0; i < trainers.length; i += 1) {
    html += `<div class="grid-items">
            <img src="${trainers[i].image}" alt="trainer ${i + 1}">
            <div class="trainer-desc">
                <h3 class="black">${trainers[i].name}</h3>
                <span class="trainer-qualification">${trainers[i].qualification}</span>
                <hr>
                <p class="about-trainer">
                    ${trainers[i].description}
                </p>
            </div>
        </div>`;
  }
  return documentRange.createContextualFragment(html);
}

export { trainers, getHtml };

export default trainers;