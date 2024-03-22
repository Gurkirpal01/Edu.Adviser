document.addEventListener('DOMContentLoaded', function() {
    // Landing Page
    const getStartedBtn = document.getElementById('get-started-btn');
    getStartedBtn.addEventListener('click', function() {
        // Hide landing page and show course recommendations section
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('recommendations').style.display = 'block';
    });

    
});

