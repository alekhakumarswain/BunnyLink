document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem("Rname");
    const usernameDisplay = document.getElementById("Username");

    if (name == null) {
        window.location.href = "welcome.html";
    } else {
        usernameDisplay.innerHTML = `Welcome, ${name}`;
    }

    const linksContainer = document.getElementById('linksContainer');
    const profileData = JSON.parse(localStorage.getItem('profileData')) || [];

    function displayLink(profile) {
        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile-container');

        const profileIcon = document.createElement('img');
        profileIcon.src = profile.icon;
        profileIcon.alt = 'Profile Icon';
        profileIcon.classList.add('profile-icon');

        const profileLink = document.createElement('a');
        profileLink.href = profile.url;
        profileLink.target = '_blank';
        profileLink.textContent = profile.uname;
        profileLink.classList.add('profile-link');

        profileContainer.appendChild(profileIcon);
        profileContainer.appendChild(profileLink);
        linksContainer.appendChild(profileContainer);
    }

    profileData.forEach(profile => {
        displayLink(profile);
    });

    document.getElementById('addLinkButton').addEventListener('click', () => {
        window.location.href = "addlink.html";
    });
});
