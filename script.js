// script.js
// Handles dynamic navbar, dark mode toggle, and section population

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderGlobalFloatingShapes();
  renderHero();
  renderAbout();
  renderProjects();
  renderCV();
  // Enforce dark mode always:
  document.documentElement.classList.add('dark');
  document.body.style.background = '#181a20';
  document.body.style.color = '#e6e6e6';
});

function renderCV() {
  const cvSection = document.getElementById('cv');
  cvSection.innerHTML = `
    <div class="cv-header" style="text-align:center;margin-bottom:2rem;">
      <h2 style="font-size:2rem;font-weight:700;color:var(--color-accent);margin-bottom:0.7rem;">Curriculum Vitae</h2>
      <p style="color:var(--color-text-light);margin-bottom:1.2rem;">Preview or download my latest CV as a PDF.</p>
      <button class="cv-preview-btn" id="cv-preview-btn" style="display:inline-block;padding:0.9rem 2.2rem;font-size:1.15rem;font-weight:600;border-radius:0.7rem;background:var(--color-accent);color:#fff;text-decoration:none;box-shadow:0 2px 10px #3b82f650;transition:background 0.18s;margin-right:1rem;">
        <img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/eye.svg" class="icon-18" style="vertical-align:middle;margin-right:0.5rem;filter:invert(1);"/>
        Preview CV
      </button>
      <a href="data/MpataneCV.pdf" download class="cv-download-btn" style="display:inline-block;padding:0.9rem 2.2rem;font-size:1.15rem;font-weight:600;border-radius:0.7rem;background:var(--color-accent);color:#fff;text-decoration:none;box-shadow:0 2px 10px #3b82f650;transition:background 0.18s;">
        <img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/download.svg" class="icon-18" style="vertical-align:middle;margin-right:0.5rem;filter:invert(1);"/>
        Download CV
      </a>
    </div>
  `;

  // Attach preview logic
  const previewBtn = document.getElementById('cv-preview-btn');
  if (previewBtn) {
    previewBtn.onclick = createCVModal;
  }
}

function renderAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <div class="about-header" style="text-align:center;margin-bottom:2.2rem;">
      <h2 style="font-size:2rem;font-weight:700;color:var(--color-accent);margin-bottom:0.7rem;">About Me</h2>
    </div>
    <div class="about-card-glass">
      <div class="about-main-row about-flex-row">
        <div class="about-avatar">
          <img src="data/Avatar8.png" alt="Profile Image" />
        </div>
        <div class="about-summary">
          <p>A results-driven Business Intelligence and Data Analytics student with proven expertise in full-stack development, mobile application development, and custom software solutions. Demonstrated success in building and deploying live financial technology platforms serving 30+ users with 90% success rates. Strong background in web development, mobile app development, database design, and business intelligence with focus on delivering scalable solutions for small and medium enterprises.</p>
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const projects = document.getElementById('project');
  projects.innerHTML = `
    <div class="project-header" style="text-align:center;margin-bottom:2.2rem;">
      <h2 style="font-size:2rem;font-weight:700;color:var(--color-accent);margin-bottom:0.7rem;">Projects</h2>
    </div>
    <div class="project-timeline">
      <div class="exp-card" style="animation: fadeInUp 0.7s 0s cubic-bezier(.4,0,.2,1);">
        <div class="exp-row">
          <div class="exp-role">Lead Developer &amp; Product Manager</div>
          <div class="exp-company">@ CampusCred (Fintech Platform)</div>
        </div>
        <div class="exp-meta">
          <span class="exp-location"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/map-pin.svg" class="icon-14"/> Francistown, Botswana</span>
          <span class="exp-dates"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/calendar.svg" class="icon-14"/> 2024 – Present</span>
        </div>
        <ul class="exp-achievements">
          <li>Achieved 90% loan repayment success rate</li>
          <li>Designed and deployed live student micro-lending platform (30+ users, 20+ loans/month)</li>
          <li>Integrated admin analytics, credit scoring, and NoSQL data</li>
        </ul>
        <div class="exp-tech">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flutter.svg" class="icon-24" title="Flutter"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" class="icon-24" title="Firebase"/>
          <img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/chart-bar.svg" class="icon-24" title="Analytics"/>
        </div>
      </div>
      <div class="exp-card" style="animation: fadeInUp 0.7s 0.08s cubic-bezier(.4,0,.2,1);">
        <div class="exp-row">
          <div class="exp-role">Data Engineer &amp; Tool Developer</div>
          <div class="exp-company">@ CampusCred Data Pipeline</div>
        </div>
        <div class="exp-meta">
          <span class="exp-location"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/map-pin.svg" class="icon-14"/> Remote</span>
          <span class="exp-dates"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/calendar.svg" class="icon-14"/> 2025 – 2025</span>
        </div>
        <ul class="exp-achievements">
          <li>Automated transformation of Firebase JSON logs to CSV</li>
          <li>Developed PyQt5 desktop GUI for interactive analytics</li>
          <li>Enabled drill-down loan insights and performance trends</li>
        </ul>
        <div class="exp-tech">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" class="icon-24" title="Python"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qt.svg" class="icon-24" title="PyQt5"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg" class="icon-24" title="Firebase"/>
        </div>
      </div>
      <div class="exp-card" style="animation: fadeInUp 0.7s 0.16s cubic-bezier(.4,0,.2,1);">
        <div class="exp-row">
          <div class="exp-role">Backend &amp; Game Developer</div>
          <div class="exp-company">@ Real-Time Multiplayer Chess Game</div>
        </div>
        <div class="exp-meta">
          <span class="exp-location"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/map-pin.svg" class="icon-14"/> Remote</span>
          <span class="exp-dates"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/calendar.svg" class="icon-14"/> 2025 – 2025</span>
        </div>
        <ul class="exp-achievements">
          <li>Built FastAPI + WebSocket backend for real-time chess</li>
          <li>Integrated chessboard.js frontend with full chess rules</li>
          <li>Enabled seamless gameplay, live move broadcasting, and audio</li>
        </ul>
        <div class="exp-tech">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" class="icon-24" title="FastAPI"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/websocket.svg" class="icon-24" title="WebSocket"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" class="icon-24" title="JavaScript"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chessdotcom.svg" class="icon-24" title="Chess"/>
        </div>
      </div>
      <div class="exp-card" style="animation: fadeInUp 0.7s 0.24s cubic-bezier(.4,0,.2,1);">
        <div class="exp-row">
          <div class="exp-role">Freelance Web Developer</div>
          <div class="exp-company">@ Customer Management System (CMS)</div>
        </div>
        <div class="exp-meta">
          <span class="exp-location"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/map-pin.svg" class="icon-14"/> Francistown, Botswana</span>
          <span class="exp-dates"><img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/calendar.svg" class="icon-14"/> 2024 – 2024</span>
        </div>
        <ul class="exp-achievements">
          <li>Delivered custom PHP + MySQL CMS for client recordkeeping</li>
          <li>Enabled user registration, record editing, and report generation</li>
          <li>Achieved full client satisfaction</li>
        </ul>
        <div class="exp-tech">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg" class="icon-24" title="PHP"/>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" class="icon-24" title="MySQL"/>
          <img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/globe.svg" class="icon-24" title="Web"/>
          <img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/layout-dashboard.svg" class="icon-24" title="CMS"/>
        </div>
      </div>
    </div>
  `;
}

// === ICON HELPERS FOR CDN ICONS ===
function getIconUrl(name) {
  // Lucide icons CDN (https://lucide.dev/icons/)
  const lucide = {
    location: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/map-pin.svg',
    email: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/mail.svg',
    phone: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/phone.svg',
    linkedin: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
    summary: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/user.svg',
    education: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/graduation-cap.svg',
    certificate: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/badge-check.svg',
    language: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/languages.svg',
    skills: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/code.svg',
    competency: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/brain-circuit.svg',
    info: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/info.svg',
    role: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/user-check.svg',
    calendar: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/calendar.svg'
  };
  return lucide[name] || '';
} // No project or modal logic below.
function getSkillIconUrl(name) {
  // SimpleIcons CDN (https://simpleicons.org/)
  const map = {
    python: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg',
    php: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg',
    html5: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg',
    css3: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg',
    javascript: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg',
    flutter: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flutter.svg',
    mysql: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg',
    firebase: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg',
    linux: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg',
    tableau: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg',
    excel: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg',
    vscode: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg',
    git: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg',
    android: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/androidstudio.svg',
    jupyter: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jupyter.svg',
    fastapi: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg',
    pyqt5: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qt.svg',
    websocket: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/websocket.svg',
    chess: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chessdotcom.svg',
    analytics: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/chart-bar.svg',
    cms: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/layout-dashboard.svg',
    web: 'https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/globe.svg'
  };
  // Remove extension if present
  const key = name.replace(/\..+$/, '').toLowerCase();
  return map[key] || '';
}

function renderGlobalFloatingShapes() {
  // Remove existing if any
  let old = document.getElementById('floating-bg-shapes');
  if (old) old.remove();
  const bg = document.createElement('div');
  bg.id = 'floating-bg-shapes';
  bg.style.position = 'fixed';
  bg.style.top = '0';
  bg.style.left = '0';
  bg.style.width = '100vw';
  bg.style.height = '100vh';
  bg.style.zIndex = '0';
  bg.style.pointerEvents = 'none';
  bg.style.overflow = 'visible';
  bg.innerHTML = `
    <svg class="floating-shape" data-idx="0" width="70" height="70" style="position:absolute;left:4vw;top:10vh;" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="8" fill="#3b82f6" fill-opacity="0.13"/><text x="50%" y="55%" text-anchor="middle" fill="#3b82f6" font-size="32" font-family="monospace" dy=".3em">{ }</text></svg>
    <svg class="floating-shape" data-idx="1" width="90" height="90" style="position:absolute;left:10vw;top:12vh;" viewBox="0 0 100 100"><circle cx="50" cy="50" r="38" stroke="#6366f1" stroke-width="8" fill="#6366f1" fill-opacity="0.09"/></svg>
    <svg class="floating-shape" data-idx="2" width="110" height="80" style="position:absolute;right:14vw;bottom:10vh;" viewBox="0 0 80 80"><ellipse cx="40" cy="40" rx="28" ry="18" fill="#10b981" fill-opacity="0.11"/></svg>
    <svg class="floating-shape" data-idx="3" width="60" height="60" style="position:absolute;right:8vw;top:18vh;" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="8" fill="#10b981" fill-opacity="0.12"/><text x="50%" y="55%" text-anchor="middle" fill="#10b981" font-size="28" font-family="monospace" dy=".3em">[ ]</text></svg>
    <svg class="floating-shape" data-idx="4" width="50" height="50" style="position:absolute;left:18vw;bottom:8vh;" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="8" fill="#6366f1" fill-opacity="0.10"/><text x="50%" y="55%" text-anchor="middle" fill="#6366f1" font-size="22" font-family="monospace" dy=".3em">&lt;/&gt;</text></svg>
    <svg class="floating-shape" data-idx="5" width="80" height="80" style="position:absolute;right:18vw;bottom:20vh;" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#3b82f6" stroke-width="10" fill="#3b82f6" fill-opacity="0.07"/></svg>
    <svg class="floating-shape" data-idx="6" width="40" height="40" style="position:absolute;left:35vw;top:5vh;" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="8" fill="#6366f1" fill-opacity="0.10"/><text x="50%" y="55%" text-anchor="middle" fill="#6366f1" font-size="20" font-family="monospace" dy=".3em">{ }</text></svg>
  `;
  document.body.appendChild(bg);
  // Animate shapes bouncing around
  animateFloatingShapes();
}

function animateFloatingShapes() {
  const shapes = Array.from(document.querySelectorAll('.floating-shape'));
  // Initial positions and velocities
  const state = shapes.map((shape, i) => {
    let left = shape.style.left.includes('vw') ? window.innerWidth * parseFloat(shape.style.left) / 100 : parseFloat(shape.style.left) || 0;
    let top = shape.style.top.includes('vh') ? window.innerHeight * parseFloat(shape.style.top) / 100 : parseFloat(shape.style.top) || 0;
    let width = shape.width.baseVal.value || shape.getBoundingClientRect().width;
    let height = shape.height.baseVal.value || shape.getBoundingClientRect().height;
    return {
      left, top, width, height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7
    };
  });
  function step() {
    shapes.forEach((shape, i) => {
      let s = state[i];
      s.left += s.vx;
      s.top += s.vy;
      // Bounce off viewport
      if (s.left < 0 || s.left + s.width > window.innerWidth) s.vx *= -1;
      if (s.top < 0 || s.top + s.height > window.innerHeight) s.vy *= -1;
      s.left = Math.max(0, Math.min(window.innerWidth - s.width, s.left));
      s.top = Math.max(0, Math.min(window.innerHeight - s.height, s.top));
      shape.style.left = s.left + 'px';
      shape.style.top = s.top + 'px';
    });
    requestAnimationFrame(step);
  }
  step();
}

function renderHero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="hero-bg-anim"></div>

    <!-- SVGs -->
    <svg class="hero-svg-float" style="left: 4vw; top: 10vh; width: 70px;" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="8" fill="#3b82f6" fill-opacity="0.13"/><text x="50%" y="55%" text-anchor="middle" fill="#3b82f6" font-size="32" font-family="monospace" dy=".3em">{ }</text></svg>
    <svg class="hero-svg-float hero-svg-float2" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="#6366f1" stroke-width="8" fill="#6366f1" fill-opacity="0.09"/></svg>
    <svg class="hero-svg-float hero-svg-float3" viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="40" rx="28" ry="18" fill="#10b981" fill-opacity="0.11"/></svg>
    <svg class="hero-svg-float" style="right: 8vw; top: 18vh; width: 60px; animation-delay: 2.8s;" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="8" fill="#10b981" fill-opacity="0.12"/><text x="50%" y="55%" text-anchor="middle" fill="#10b981" font-size="28" font-family="monospace" dy=".3em">[ ]</text></svg>
    <svg class="hero-svg-float" style="left: 18vw; bottom: 8vh; width: 50px; animation-delay: 1.7s;" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="8" fill="#6366f1" fill-opacity="0.10"/><text x="50%" y="55%" text-anchor="middle" fill="#6366f1" font-size="22" font-family="monospace" dy=".3em">&lt;/&gt;</text></svg>
    <svg class="hero-svg-float" style="right: 18vw; bottom: 20vh; width: 80px; animation-delay: 3.2s;" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="#3b82f6" stroke-width="10" fill="#3b82f6" fill-opacity="0.07"/></svg>
    <svg class="hero-svg-float" style="left: 35vw; top: 5vh; width: 40px; animation-delay: 2.1s;" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="8" fill="#6366f1" fill-opacity="0.10"/><text x="50%" y="55%" text-anchor="middle" fill="#6366f1" font-size="20" font-family="monospace" dy=".3em">{ }</text></svg>

    <!-- Hero Content -->
    <div class="hero-content">
      <h1 class="hero-title">Hi, I’m Aobakwe Mpatane</h1>
      <div class="hero-tagline">Data Analyst &bull; Python Developer &bull; CEH-in-Training</div>
      <div class="hero-summary">
        I build intelligent systems that turn data into decisions.<br>
        Passionate about ethical hacking, automation, and data-driven solutions.
      </div>
      <div class="hero-btns">
        <a href="#project" class="hero-btn">View Projects</a>
        <a href="data/MpataneCV.pdf" class="hero-btn" download id="hero-download-cv">Download CV</a>
      </div>

      <!-- Contact Info -->
      <div class="hero-contact">
        <p><strong>Email:</strong> <a href="mailto:aobakwempatane67@gmail.com">aobakwempatane67@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+26773629161">+267-7362-9161</a> / <a href="tel:+26777554795">775-54795</a></p>
        <p><strong>Location:</strong> Francistown, Botswana</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aobakwe-mpatane-22290b206" target="_blank">linkedin.com/in/aobakwe-mpatane</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Tailor81" target="_blank">github.com/Tailor81</a></p>
      </div>
    </div>
  `;
}

// Modal logic for CV preview
function createCVModal() {
  if (document.getElementById('cv-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'cv-modal';
  modal.innerHTML = `
    <div class="cv-modal-backdrop" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.75);z-index:9998;"></div>
    <div class="cv-modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#23243a;padding:2rem 1rem 1rem 1rem;border-radius:1.2rem;box-shadow:0 8px 40px #000a;z-index:9999;max-width:90vw;max-height:90vh;display:flex;flex-direction:column;align-items:center;">
      <button id="close-cv-modal" style="align-self:flex-end;background:none;border:none;color:#fff;font-size:1.8rem;cursor:pointer;margin-bottom:0.5rem;">&times;</button>
      <iframe src="data/MpataneCV.pdf" style="width:70vw;height:70vh;border:none;background:#fff;border-radius:0.7rem;box-shadow:0 2px 10px #0004;"></iframe>
      <a href="data/MpataneCV.pdf" download style="margin-top:1.2rem;display:inline-block;padding:0.7rem 2rem;font-size:1rem;font-weight:600;border-radius:0.7rem;background:var(--color-accent);color:#fff;text-decoration:none;box-shadow:0 2px 10px #3b82f650;transition:background 0.18s;">
        <img src="https://cdn.jsdelivr.net/npm/lucide-static@0.322.0/icons/download.svg" class="icon-18" style="vertical-align:middle;margin-right:0.5rem;filter:invert(1);"/>
        Download CV
      </a>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('close-cv-modal').onclick = closeCVModal;
  modal.querySelector('.cv-modal-backdrop').onclick = closeCVModal;
}
function closeCVModal() {
  const modal = document.getElementById('cv-modal');
  if (modal) modal.remove();
}

document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'hero-preview-cv') {
    createCVModal();
  }
});

function renderNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <nav class="navbar">
      <div class="logo">Aobakwe Mpatane</div>
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#cv">CV</a></li>

      </ul>
    </nav>
  `;

}


