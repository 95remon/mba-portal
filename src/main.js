import './style.css'
import { subjects } from './data.js'
import { config } from './config.js'

let currentLang = 'en'; // Default language

const app = document.querySelector('#app');

function render() {
  const publishedSubjects = subjects.filter(sub => config.publishedSubjects.includes(sub.id));

  // Update Body Class for RTL
  if (currentLang === 'ar') {
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }

  // Header
  const headerHTML = `
    <header>
      <div class="logo">
        <h1>${config.appTitle[currentLang]}</h1>
        <div class="subtitle">${config.appSubtitle[currentLang]}</div>
      </div>
      <div class="lang-toggle" id="lang-toggle">
        <div class="lang-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</div>
        <div class="lang-option ${currentLang === 'ar' ? 'active' : ''}" data-lang="ar">عربي</div>
      </div>
    </header>
  `;

  // Grid
  const gridHTML = `
    <div class="subjects-grid">
      ${publishedSubjects.map(sub => `
        <div class="card">
          <div class="card-image" style="background-image: url('${sub.image}')"></div>
          <div class="card-content">
            <h2>${sub.title[currentLang]}</h2>
            <p>${sub.description[currentLang]}</p>
            <div class="card-actions">
              ${sub.notebookLink && sub.notebookLink !== '#' ?
      `<a href="${sub.notebookLink}" target="_blank" class="btn btn-primary">
                   <span>NotebookLM</span>
                   <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                 </a>` : ''
    }
              ${sub.resources.map(res => `
                <a href="${res.url}" class="btn btn-secondary">
                  ${res.label[currentLang]}
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Footer
  const footerHTML = `
    <footer>
      <p>&copy; ${new Date().getFullYear()} Antigravity MBA System. All rights reserved.</p>
    </footer>
  `;

  app.innerHTML = headerHTML + gridHTML + footerHTML;

  // Re-attach listeners
  attachListeners();
}

function attachListeners() {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    const options = toggle.querySelectorAll('.lang-option');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        if (lang !== currentLang) {
          currentLang = lang;
          render();
        }
      });
    });
  }
}

// Initial Render
render();
