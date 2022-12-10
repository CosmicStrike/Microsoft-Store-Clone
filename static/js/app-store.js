//Checks whether document is loaded or not if not, js waits so that document gets loaded
if (document.readyState == 'loading') document.addEventListener('DOMContentLoaded', ready())
else ready()


function print(msg) {
    console.log(msg)
}

function Add_Store_Menu_Event(target) {
    target.addEventListener('click', (e) => {
        document.getElementsByClassName('app-store')[0].classList.toggle('display-none')
        document.getElementsByClassName('category')[0].classList.toggle('display-block')
        document.getElementsByClassName('store-title-menu')[0].classList.toggle('display-block')
        document.getElementsByClassName('container')[0].classList.toggle('app-store-menu-width')
        document.getElementsByTagName('main')[0].classList.toggle('app-store-menu-margin')
    })
}

function App_Store_Menu() {
    //Mobile app store menu
    var icons = document.getElementsByClassName('material-symbols-outlined')
    for (var i = 0; i < icons.length; i++) {
        if (icons[i].textContent.trim() == 'close') {
            if (icons[i].parentElement.classList.contains('store-title')) {
                Add_Store_Menu_Event(icons[i])
            }
        }
        else if (icons[i].textContent.trim() == 'menu') {
            if (icons[i].parentElement.classList.contains('store-title')) {
                Add_Store_Menu_Event(icons[i])
            }
        }
    }
}

function ready() {
    App_Store_Menu()
}