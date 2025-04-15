const navbar = document.getElementById('navbar')

function openSideBar(){
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
}

function closeSideBar(){
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
}

function openMap(){
    map.classList.add('show')
    openMapButton.classList.add('hide')
    openButton.setAttribute('aria-expanded', 'true')
}

function closeMap(){
    map.classList.remove('show')
    openMapButton.classList.remove('hide')
    openButton.setAttribute('aria-expanded', 'false')
}