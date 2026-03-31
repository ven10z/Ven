
let savedCarouselHTML = "";

function showSidebar() {
    const side = document.querySelector('.sidebar');
    side.style.display = 'flex';
}

function closeSidebar() {
    const side = document.querySelector('.sidebar');
    side.style.display = 'none';
}

function initCarousel() {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const thumbnailItems = document.querySelectorAll('.thumbnail .item');
    const carouselDom = document.querySelector('.carousel');

    if (nextDom && prevDom) {
        nextDom.onclick = (e) => { 
            e.preventDefault(); 
            showSlider('next'); 
        };
        prevDom.onclick = (e) => { 
            e.preventDefault(); 
            showSlider('prev'); 
        };
    }

    thumbnailItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.onclick = (e) => {
            e.stopPropagation();
            if (index !== 0) {
                jumpToSlide(index);
            }
        };
    });
}

function jumpToSlide(index) {
    let sliderDom = document.querySelector('.choice');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let carouselDom = document.querySelector('.carousel');

    for (let i = 0; i < index; i++) {
        let sliderItemsDom = sliderDom.querySelectorAll('.item');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    carouselDom.classList.remove('next', 'prev');

    void carouselDom.offsetWidth; 
    carouselDom.classList.add('next');

    initCarousel();

    setTimeout(() => {
        carouselDom.classList.remove('next');
    }, 500);
}

function showSlider(type) {
    let sliderDom = document.querySelector('.choice');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let carouselDom = document.querySelector('.carousel');
    
    let sliderItemsDom = sliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, 500);
}

// Replace your existing enter/exit functions with these:

function enterTheatre(contentHTML) {
    const mainArea = document.getElementById('main-content-area');
    const theatreArea = document.getElementById('theatre-container');
    
    // 1. Hide the carousel without deleting it
    mainArea.style.display = 'none';
    
    // 2. Setup the Theatre content
    const videoBackground = `
        <video autoplay muted loop class="theatre-video">
            <source src="background.mp4" type="video/mp4">
        </video>
    `;
    
    theatreArea.innerHTML = videoBackground + contentHTML;
    theatreArea.style.display = 'block';
    
    window.scrollTo(0, 0);
}

function exitTheatre() {
    const mainArea = document.getElementById('main-content-area');
    const theatreArea = document.getElementById('theatre-container');

    theatreArea.style.display = 'none';
    theatreArea.innerHTML = '';

    mainArea.style.display = 'block';

    window.dispatchEvent(new Event('resize')); 
}

function showProfile() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container p-4">
                <div class="row">
                    <div class="col-md-4 text-center border-end border-secondary">
                        <img src="profile_ven.jpg" class="img-fluid rounded mb-3" style="border: 2px solid #00093c; box-shadow: 0 0 20px rgba(229,9,20,0.5);">
                        <h1 class="text-white">VEN</h1>
                        <p class="badge bg-danger">Game Developer / Quality Assurance Engineer</p>
                        <div class="mt-4 text-start">
                            <h3 class="now-showing" style="font-size: 2 rem; color: #e50914; border-bottom: 2px solid #e50914;">About Me</h3>
                            <p class="text-light bio-text" style="font-size: .95 rem; line-height: 1.6; font-weight: 400;">
                                Currently pursuing a Bachelor of Science in Information Technology at STI College Malolos, 
                                I am dedicated to mastering the dual disciplines of Game Development and Quality Assurance Engineering. 
                                I bridge the gap between creative world-building and technical stability, ensuring that immersive digital experiences 
                                are as high-performing as they are engaging. My approach centers on the rigorous testing and optimization of complex
                                mechanics to deliver polished, market-ready software. This portfolio reflects my evolution from a student to a future 
                                detail-oriented technician committed to excellence in every project.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-8 px-4">
                        <h2 class="now-showing mb-4" style="color: #e50914; font-size: 1.5rem; border-color: #ff9800;">Production Tech Stack</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tech-category-card">
                                    <div class="tech-category-title text-center" style="color: #e50914;">Programming Languages</div>
                                    <div class="text-center">
                                        <div class="tech-item"><img src="icon/java.png"> Java</div>
                                        <div class="tech-item"><img src="icon/c-sharp.png"> C#</div>
                                        <div class="tech-item"><img src="icon/python.png"> Python</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tech-category-card">
                                    <div class="tech-category-title text-center" style="color: #e50914;">Web Development</div>
                                    <div class="text-center">
                                        <div class="tech-item"><img src="icon/html.png"> HTML</div>
                                        <div class="tech-item"><img src="icon/css.png"> CSS</div>
                                        <div class="tech-item"><img src="icon/java-script.png"> JavaScript</div>
                                        <div class="tech-item"><img src="icon/bootstrap.png"> Bootstrap</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tech-category-card">
                                    <div class="tech-category-title text-center" style="color: #e50914;">Databases</div>
                                    <div class="text-center">
                                        <div class="tech-item"><img src="icon/database.png"> Microsoft SQL Server</div>
                                        <div class="tech-item"><img src="icon/mongodb.png"> MongoDB</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tech-category-card">
                                    <div class="tech-category-title text-center" style="color: #e50914;">Studio Tools</div>
                                    <div class="text-center">
                                        <div class="tech-item"><img src="icon/apache-netbeans.png"> Net Beans</div>
                                        <div class="tech-item"><img src="icon/visual-studio.png"> Visual Studio</div>
                                        <div class="tech-item"><img src="icon/visual-studio-code.png"> VS Code</div>
                                        <div class="tech-item"><img src="icon/github.png"> GitHub</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button onclick="exitTheatre()" class="ticket-btn">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showProjects() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container">
                <h1 class="now-showing" style="color: #e50914;">Projects</h1>
                <div class="row mt-4">
                    <div class="col-md-6 mb-4 text-center">
                        <div class="poster-wrapper" onclick="showScreenshots('Bliss & Blessing')">
                            <img src="carousel/bb.png" class="img-fluid project-poster mb-2">
                            <div class="image-description" style="font-size: 24px; color: red;">A clothing inventory management system developed using C# and Visual Studio...</div>
                        </div>
                        <h3 class="mt-2 text-white">Bliss & Blessing</h3>
                        <div class="mt-2">
                            <div class="tech-item"><img src="icon/c-sharp.png"> C#</div>
                            <div class="tech-item"><img src="icon/visual-studio.png"> Visual Studio</div>
                            <div class="tech-item"><img src="icon/database.png"> MS SQL Server</div>
                            <div class="tech-item code-link" onclick="window.open('https://github.com/ProfSavage/BlissAndBlessing', '_blank')">
                                <img src="icon/code.png"> Code
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4 text-center">
                        <div class="poster-wrapper" onclick="showScreenshots('Centsible')">
                            <img src="carousel/centsible.png" class="img-fluid project-poster mb-2">
                            <div class="image-description" style="font-size: 24px; color: red;">A digital financial management system...</div>
                        </div>
                        <h3 class="mt-2 text-white">Centsible</h3>
                        <div class="mt-2">
                            <div class="tech-item"><img src="icon/java.png"> Java</div>
                            <div class="tech-item"><img src="icon/apache-netbeans.png"> NetBeans</div>
                            <div class="tech-item code-link" onclick="window.open('https://github.com/TCxDesu/Centsible', '_blank')">
                                <img src="icon/code.png"> Code
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button onclick="exitTheatre()" class="ticket-btn mt-4">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showOrganizations() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container">
                <h1 class="now-showing" style="color: #e50914;">Organizations</h1>
                <div class="row mt-4">
                    <div class="col-md-4 mb-4 text-center">
                        <div class="poster-wrapper" onclick="showOrgDetails('Syntax')">
                            <img src="carousel/syntax.png" class="img-fluid project-poster mb-2">
                            <div class="image-description" style="font-size: 24px;">SOCIETY OF YOUTH FOR THE NEXT TECHNOLOGICAL ADVANCEMENT AND EXCELLENCE</div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 text-center">
                        <div class="poster-wrapper" onclick="showOrgDetails('FRX')">
                            <img src="carousel/frx.png" class="img-fluid project-poster mb-2">
                            <div class="image-description" style="font-size: 24px;">FRX Esports</div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 text-center">
                        <div class="poster-wrapper" onclick="showOrgDetails('Blaze')">
                            <img src="carousel/blaze.jpg" class="img-fluid project-poster mb-2">
                            <div class="image-description" style="font-size: 24px;">Blaze Organization</div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button onclick="exitTheatre()" class="ticket-btn mt-4">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showOrgDetails(orgName) {
    const orgData = {
        'Syntax': { 
            desc: 'SOCIETY OF YOUTH FOR THE NEXT TECHNOLOGICAL ADVANCEMENT AND EXCELLENCE', 
            images: [
                { src: 'syntax/syntax_manager.jpg', desc: 'Syntax Esports Manager' }, 
                { src: 'syntax/syntax_vista.png', desc: 'Syntax Event' }
            ] 
        },
        'FRX': { 
            desc: 'FRX Esports Operations', 
            images: [
                { src: 'frx/frx_backend.jpg', desc: 'FRX Quadruple' }, 
                { src: 'frx/frx_trio.jpg', desc: 'FRX Trio' },
                { src: 'frx/frx_mpl.jpg', desc: 'FRX Team got to experience MPL live'}
            ] 
        },
    };

    const data = orgData[orgName];

    if (!data) return;

    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container">
                <h1 class="now-showing" style="color: #e50914;">${orgName}: Journey</h1>
                <p class="back-to-posters" onclick="showOrganizations()" style="cursor:pointer; color:#e50914;">Back to Organizations</p>
                
                <div class="film-strip mt-3">
                    ${data.images.map(img => `
                        <div class="col-md-6 mb-4 text-center">
                            <div class="poster-wrapper">
                                <img src="${img.src}" class="img-fluid screenshot-item mb-2">
                                <div class="image-description" style="font-size: 24px;">${img.desc || orgName + ' Detail'}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="text-center mt-4">
                    <button onclick="exitTheatre()" class="ticket-btn">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showWebinars() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container">
                <h1 class="now-showing" style="color: #e50914;">Webinars</h1>
                <div class="row mt-4">
                    <div class="col-md-6 mb-4 text-center">
                        <div class="poster-wrapper">
                            <img src="Webinars/syntax.jpg" class="img-fluid project-poster mb-2">
                            <div class="image-description" style="font-size: 24px;">Syntax Webinar</div>
                        </div>
                        <h3 class="mt-2 text-white">Gathering of major PH IT communities discussing leadership and excellence in the gaming industry.</h3>
                    </div>
                    </div>
                <div class="text-center">
                    <button onclick="exitTheatre()" class="ticket-btn mt-4">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showCertificates() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container">
                <h1 class="now-showing" style="color: #e50914;">Award Gallery</h1>
                <div class="film-strip">
                    <div class="poster-wrapper">
                        <img src="certificate/frx_cert.jpg" class="screenshot-item">
                        <div class="image-description" style="font-size: 24px;">FRX Esports Certificate</div>
                    </div>
                    <div class="poster-wrapper">
                        <img src="certificate/sap_cert.png" class="screenshot-item">
                        <div class="image-description" style="font-size: 24px;">SAP Certificate</div>
                    </div>
                    <div class="poster-wrapper">
                        <img src="certificate/Java.jpg" class="screenshot-item">
                        <div class="image-description" style="font-size: 24px;">Java Fundamentals</div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button onclick="exitTheatre()" class="ticket-btn">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showScreenshots(projectName) {
    const galleryData = {
        'Bliss & Blessing': [{src:'BlissBlessing/log-in.png', desc: 'Log In'}, {src: 'BlissBlessing/dboard.png', desc: 'Dashboard'}, {src:'BlissBlessing/features.png', desc:'Feature'}],
        'Centsible': [{src:'Centsible/Log-in.jpg',desc:'Log In'},{src:'Centsible/dashboard.jpg',desc:'Dashboard'}]
    };
    const images = galleryData[projectName] || [];
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container">
                <h1 class="now-showing" style="color: #e50914;">${projectName}: Feature Preview</h1>
                <p onclick="showProjects()" class="back-to-posters"> Back to Projects</p>
                <div class="film-strip mt-3">
                    ${images.map(img => `
                        <div class="poster-wrapper">
                            <img src="${img.src}" class="screenshot-item">
                            <div class="image-description" style="font-size: 24px;">${img.desc}</div>
                        </div>`).join('')}
                </div>
                <div class="text-center mt-4">
                    <button onclick="exitTheatre()" class="ticket-btn">EXIT</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showHireMe() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container text-center" style="max-width: 500px; margin: auto;">
                <h1 class="now-showing" style="color: #e50914;">Hire Me</h1>
                <div class="mt-4">
                    <p class="text-white" style="font-size: 1.2rem;">Ready to collaborate on your next project?</p>
                    <hr style="border-color: #e50914;">
                    <div class="text-start px-4">
                        <div class="hire-me code-link" onclick="window.open('https://www.linkedin.com/in/raven-ariesgado-88599b38b/', '_blank')">
                                <img src="icon/linkedIn.png"> Linked In
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <button onclick="exitTheatre()" class="ticket-btn">CLOSE</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

function showContactMe() {
    const html = `
        <div class="container mt-5 pt-5 animate-in">
            <div class="movie-container text-center" style="max-width: 500px; margin: auto; border: 2px solid #e50914;">
                <h1 class="now-showing" style="color: #e50914;">Connect With Me</h1>
                <div class="mt-4 px-4 text-start">
                    <div class="contact-card mb-3" style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 8px;">
                        <div class="contact-me code-link" onclick="window.open('https://www.facebook.com/media/set/?set=a.131454413968602&type=3', '_blank')">
                                <img src="icon/fb.png"> Facebook
                        </div>
                        <div class="contact-me code-link" onclick="window.open('https://www.instagram.com/veven_0825/', '_blank')">
                                <img src="icon/ig.png"> Instagram
                        </div>
                        <div class="contact-me code-link" onclick="window.open('https://mail.google.com/', '_blank')">
                                <img src="icon/gmail.png"> Gmail
                        </div>
                    </div>
                    <p class="text-center" style="font-style: italic; font-size: 0.9rem; color: white;">Available for freelance and full-time opportunities.</p>
                </div>
                <div class="mt-4">
                    <button onclick="exitTheatre()" class="ticket-btn">CLOSE</button>
                </div>
            </div>
        </div>`;
    enterTheatre(html);
}

document.addEventListener('click', function(e) {
    const btn = e.target.closest('.view-btn');
    if (!btn) return;
    
    e.preventDefault();
    const type = btn.getAttribute('data-type');
    
    if (type === 'profile') {
        showProfile();
    } else if (type === 'projects') {
        showProjects();
    } else if (type === 'webinars') { 
        showWebinars(); 
    } else if (type === 'organization') {
        showOrganizations();
    } else if (type === 'certificate') {
        showCertificates();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});