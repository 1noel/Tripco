
// Toggle navigation menu
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    const authButtons = document.getElementById('authButtons');
    navLinks.classList.toggle('hidden');
    authButtons.classList.toggle('hidden');
}

// modal and sweet alert
document.addEventListener('DOMContentLoaded', function() {
    const bookNowBtn = document.getElementById('bookNowBtn');
    const modal = document.getElementById('bookingModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const bookingForm = document.getElementById('bookingForm');
    const countrySelect = document.getElementById('countrySelect');

    // Fetch countries from API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            });
        });

    // Show modal
    bookNowBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Hide modal
    cancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        Swal.fire({
            title: 'Success!',
            text: 'Your booking has been submitted successfully!',
            icon: 'success',
            confirmButtonColor: '#38bdf8'
        });

        // Hide modal and reset form
        modal.classList.add('hidden');
        bookingForm.reset();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
