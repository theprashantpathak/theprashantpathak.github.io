const components = {
  header: `
    <header class="site-header">
      <a class="site-title" href="index.html#about"></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
        <span class="menu-icon" aria-hidden="true"></span>
        <span class="menu-label">Menu</span>
      </button>
      <nav id="site-navigation">
            <a href="index.html#about">About</a>
            <a href="teaching.html">Teaching</a>
            <a href="publications.html">Publications</a>
            <a href="academic-activities.html">Academic Activities</a>
            <a href="contact.html">Contact</a>
      </nav>
    </header>`,
  sidebar: `
    <aside class="sidebar">
      <div class="photo-placeholder"><img src="pp.jpg" alt="Prashant Pathak"></div>
      <h1>Prashant Pathak</h1>
      <p>Assistant Professor,<br> CSE, GCOE Kolhapur,<br>Maharashtra, India</p>
      <ul class="contact-list">
        <li><a href="mailto:prashant.pathak@gcoekolhapur.ac.in"><span class="link-icon" aria-hidden="true">&#9993;</span>prashant.pathak@gcoekolhapur.ac.in</a></li>
        <li><a href="https://scholar.google.com/citations?user=GY7yWoIAAAAJ&hl=en"><span class="link-icon link-icon-scholar" aria-hidden="true">GS</span>Google Scholar</a></li>
        <li><a href="https://www.linkedin.com/in/prashantpathak26/"><span class="link-icon link-icon-linkedin" aria-hidden="true">in</span>LinkedIn</a></li>
      </ul>
    </aside>`,
  footer: '<footer>&copy; 2026 Prashant Pathak</footer>'
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach((element) => {
    const component = components[element.dataset.include];
    if (component) {
      element.outerHTML = component;
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const siteNavigation = document.querySelector('#site-navigation');

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNavigation.classList.toggle('is-open', !isOpen);
  });

  siteNavigation.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNavigation.classList.remove('is-open');
    }
  });
});
