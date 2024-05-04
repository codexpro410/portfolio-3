// About sesstion
var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}

// closemenu()
// openmenu()

// sidemenu

var sidemenu = document.getElementById('sidemenu')
function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = '-200px'
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyYDyAC0cSvMPWepACRYaY7S8lv3I_HaTI7mLA4PntMoseeaH3I8zjR-iLaXlVayIIMXg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            // .then(response => console.log('Success!', response))
            .then(response => {
                msg.innerHTML = 'Message snet successfullt'
                setTimeout(() => {
                    msg.innerHTML = ''
                }, 5000);
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })



