document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const icon = document.getElementById('icon').value.trim();
        const url = document.getElementById('url').value.trim();
        const uname = document.getElementById('uname').value.trim();

        if (icon && url && uname) {
            const profileData = {
                icon: icon,
                url: url,
                uname: uname
            };

            localStorage.setItem('profileData', JSON.stringify(profileData));
            alert('Profile data saved!');
            
            // Optionally, clear the form fields
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
