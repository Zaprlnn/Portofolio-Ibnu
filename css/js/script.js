function initPortfolio(role) {
    document.getElementById('role-selector').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    const elements = {
        title: document.getElementById('role-title'),
        heroTitle: document.getElementById('hero-title'),
        heroDesc: document.getElementById('hero-desc'),
        about: document.getElementById('about-text'),
        skills: document.getElementById('skills-container'),
        dynamicTitle: document.getElementById('section-dynamic-title'),
        navLink: document.getElementById('nav-link-dynamic'),
        grid: document.getElementById('dynamic-grid'),
        cv: document.getElementById('cv-download')
    };

    if (role === 'frontend') {
        renderFrontend(elements);
    } else {
        renderPM(elements);
    }
}

function renderFrontend(el) {
    el.title.innerText = "IBNU.DEV";
    el.heroTitle.innerText = "Frontend Developer";
    el.heroDesc.innerText = "Menciptakan antarmuka website yang fungsional dan responsif[cite: 70, 121].";
    el.about.innerText = "Mahasiswa Sistem Informasi dengan minat mendalam pada pengembangan produk digital berbasis web menggunakan HTML, CSS, JavaScript, dan framework modern[cite: 69, 70, 121].";
    el.cv.href = "images/CV_Frontend_Ibnu.pdf";
    
    const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Flutter", "Figma"];
    el.skills.innerHTML = skills.map(s => `<span class="badge">${s}</span>`).join('');

    el.grid.innerHTML = `
        <div class="card">
            <h3>Hagiaa Coffee App</h3>
            <p>Aplikasi mobile berbasis Flutter untuk pemesanan kopi online[cite: 50, 110].</p>
            <div class="tech-stack"><span>Flutter</span> <span>Firebase</span></div>
        </div>
        <div class="card">
            <h3>Manajemen Konten Digital</h3>
            <p>Dashboard login dan sistem crowdfunding untuk konten organisasi[cite: 57, 113, 118].</p>
            <div class="tech-stack"><span>Next.js</span> <span>Tailwind</span> <span>TypeScript</span></div>
        </div>
    `;
}

function renderPM(el) {
    el.title.innerText = "IBNU.PM";
    el.heroTitle.innerText = "Product Manager";
    el.heroDesc.innerText = "Menjembatani kebutuhan pengguna, teknis, dan tujuan bisnis[cite: 9, 68].";
    el.about.innerText = "Memiliki latar belakang teknis sebagai pengembang yang didukung pengalaman organisasi kuat dalam memimpin tim dan perencanaan program[cite: 6, 7, 71].";
    el.dynamicTitle.innerText = "Pengalaman & Organisasi";
    el.navLink.innerText = "Pengalaman";
    el.cv.href = "images/CV_PM_Ibnu.pdf";

    const skills = ["Product Planning", "Requirement Analysis", "User-Centered Design", "Leadership", "Team Coordination", "Strategic Planning"];
    el.skills.innerHTML = skills.map(s => `<span class="badge">${s}</span>`).join('');

    el.grid.innerHTML = `
        <div class="card">
            <h3>Kepala Departemen Minat Bakat</h3>
            <p>BEM FAST UAD | Memimpin 15-26 orang dalam eksekusi FAST Cup & FAST Day[cite: 15, 18, 22].</p>
        </div>
        <div class="card">
            <h3>Koordinator Event Organizer</h3>
            <p>UKM Musik UAD | Mengelola timeline dan konsep acara musik internal[cite: 24, 27, 28].</p>
        </div>
        <div class="card">
            <h3>Koordinator PERLOGKOM</h3>
            <p>P2K FAST UAD | Mengelola kebutuhan logistik dan operasional acara besar[cite: 23, 85].</p>
        </div>
    `;
}