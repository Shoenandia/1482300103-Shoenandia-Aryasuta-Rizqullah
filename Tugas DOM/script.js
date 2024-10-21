function showMoreHobbies() {
    const moreHobbiesDiv = document.getElementById('moreHobbies');
    if (moreHobbiesDiv.style.display === 'none') {
        moreHobbiesDiv.style.display = 'block';
    } else {
        moreHobbiesDiv.style.display = 'none';
    }
}

function myFunction() {
    const myCollection = document.getElementsByTagName("h1");
    for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "green";
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function showMoreHobbies() {
    const moreHobbiesDiv = document.getElementById('moreHobbies');
    if (moreHobbiesDiv.style.display === 'none') {
        moreHobbiesDiv.style.display = 'block';
        moreHobbiesDiv.classList.remove('fade-out');
        moreHobbiesDiv.classList.add('fade-in');
    } else {
        moreHobbiesDiv.classList.remove('fade-in');
        moreHobbiesDiv.classList.add('fade-out');
        // Tunggu animasi selesai sebelum menyembunyikan elemen
        moreHobbiesDiv.addEventListener('animationend', function() {
            moreHobbiesDiv.style.display = 'none';
            moreHobbiesDiv.classList.remove('fade-out');
        }, { once: true });
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}