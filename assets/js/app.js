function showHome() {
    var home = document.getElementById('home');
    var education = document.getElementById('education');
    var interests = document.getElementById('interests');
    var contact = document.getElementById('contact');
    
    home.style.display = 'flex';
    education.style.display = 'none';
    interests.style.display = 'none';
    contact.style.display = 'none';
    
}


function showEducation() {
    var home = document.getElementById('home');
    var education = document.getElementById('education');
    var interests = document.getElementById('interests');
    var contact = document.getElementById('contact');
    
    education.style.display = 'flex';
    home.style.display = 'none';
    interests.style.display = 'none';
    contact.style.display = 'none';
    
}

function showInterests() {
    var home = document.getElementById('home');
    var education = document.getElementById('education');
    var interests = document.getElementById('interests');
    var contact = document.getElementById('contact');
    
    education.style.display = 'none';
    home.style.display = 'none';
    interests.style.display = 'flex';
    contact.style.display = 'none';
    
}

function showContact() {
    var home = document.getElementById('home');
    var education = document.getElementById('education');
    var interests = document.getElementById('interests');
    var contact = document.getElementById('contact');
    
    education.style.display = 'none';
    home.style.display = 'none';
    interests.style.display = 'none';
    contact.style.display = 'flex';
    
}

