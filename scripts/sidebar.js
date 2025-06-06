const navbar = document.getElementById('navbar')

function openSideBar(){
    navbar.classList.add('show')
}

function closeSideBar(){
    navbar.classList.remove('show')
}

function openMap(){
    map.classList.add('show')
}

function closeMap(){
    map.classList.remove('show')
}

function openSettings(){
    settings.classList.add('show')
}

function closeSettings(){
    settings.classList.remove('show')
}