import './style.css'
import { subjects } from './data.js'
import { config } from './config.js'

let currentLang = 'en'; // Default language
let currentView = 'dashboard';
let selectedSubjectId = null;

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

  let contentHTML = '';

  if (currentView === 'dashboard') {
    // Grid
    contentHTML = `
        <div class="subjects-grid">
          ${publishedSubjects.map(sub => `
            <div class="card subject-card" data-id="${sub.id}">
              <div class="card-image" style="background-image: url('${sub.image}')"></div>
              <div class="card-content">
                <h2>${sub.title[currentLang]}</h2>
                <p>${sub.description[currentLang]}</p>
                <div class="card-actions">
                  <button class="btn btn-primary" onclick="window.viewSubject('${sub.id}')">
                    ${currentLang === 'en' ? 'View Course' : 'عرض المقرر'}
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
  } else if (currentView === 'subject') {
    const sub = subjects.find(s => s.id === selectedSubjectId);
    if (sub) {
      contentHTML = `
            <div class="subject-detail fadeIn">
                <button class="btn btn-secondary back-btn" onclick="window.viewDashboard()">
                    ${currentLang === 'en' ? '&larr; Back to Dashboard' : '&rarr; العودة للرئيسية'}
                </button>
                
                <div class="subject-header">
                    <h1>${sub.title[currentLang]}</h1>
                    <p class="subtitle">${sub.description[currentLang]}</p>
                    <div class="headers-actions" style="margin-top: 2rem;">
                        ${sub.notebookLink && sub.notebookLink !== '#' ?
          `<a href="${sub.notebookLink}" target="_blank" class="btn btn-primary">
                                <span>NotebookLM</span>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                             </a>` : ''
        }
                    </div>
                </div>

                <div class="weeks-list">
                    ${sub.weeks && sub.weeks.length > 0 ? sub.weeks.map(week => `
                        <div class="week-section">
                            <h3>${week.title[currentLang]}</h3>
                            <div class="resources-list">
                                ${week.resources.map(res => `
                                    <a href="${res.url}" class="resource-item">
                                        <span class="res-icon">📄</span>
                                        <div style="display: flex; flex-direction: column;">
                                            <span class="res-label" style="font-weight: bold;">${res.label[currentLang]}</span>
                                            <span style="font-size: 0.8rem; color: var(--text-muted);">${res.type ? res.type.toUpperCase() : 'FILE'}</span>
                                        </div>
                                    </a>
                                `).join('')}
                                ${week.resources.length === 0 ? `<p class="no-resources">${currentLang === 'en' ? 'No resources yet.' : 'لا توجد مصادر بعد.'}</p>` : ''}
                            </div>
                        </div>
                    `).join('') : `<p style="text-align: center; color: var(--text-muted); font-size: 1.2rem;">${currentLang === 'en' ? 'No content available yet.' : 'لا يوجد محتوى متاح بعد.'}</p>`}
                </div>
            </div>
          `;
    }
  }

  // Footer
  const footerHTML = `
    <footer>
      <p>&copy; ${new Date().getFullYear()} Antigravity MBA System. All rights reserved.</p>
    </footer>
  `;

  app.innerHTML = headerHTML + contentHTML + footerHTML;

  // Re-attach listeners
  attachListeners();
}

// Global functions for inline onclicks
window.viewSubject = (id) => {
  selectedSubjectId = id;
  currentView = 'subject';
  render();
  window.scrollTo(0, 0);
};

window.viewDashboard = () => {
  selectedSubjectId = null;
  currentView = 'dashboard';
  render();
  window.scrollTo(0, 0);
};

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
