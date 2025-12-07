// PROJECT DATA
const projects = {
    1: {
        title: "Campus Booking & Repair System",
        desc: "A platform for students to book device repairs, track progress, and get notifications. Built with HTML, CSS, JS, PHP and MySQL."
    },
    2: {
        title: "Personal Portfolio Website",
        desc: "A responsive portfolio showcasing my skills, bio, and projects using HTML, CSS, and JavaScript."
    },
    3: {
        title: "E-Commerce Mini Store",
        desc: "A mini online store with product listings, cart functionality, and checkout simulation."
    },
    4: {
        title: "Data Analysis Dashboard",
        desc: "A Python-powered dashboard analyzing student expenses using Pandas and Matplotlib."
    }
};

// OPEN PROJECT MODAL
function openProject(id) {
    document.getElementById("modal-title").textContent = projects[id].title;
    document.getElementById("modal-desc").textContent = projects[id].desc;
    document.getElementById("modal").style.display = "flex";
}

function closeProject() {
    document.getElementById("modal").style.display = "none";
}

// CONTACT ICON FUNCTION
function message(platform) {
    const contacts = {
        whatsapp: "https://wa.me/233538076003",
        linkedin: "https://www.linkedin.com/in/emmanuel-kidibi-6641b1340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/e1523574-prog",
        email: "e1523574@gmail.com"
    };
    window.location.href = contacts[platform];
}