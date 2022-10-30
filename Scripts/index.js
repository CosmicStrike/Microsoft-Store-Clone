//Checks whether document is loaded or not if not, js waits so that document gets loaded
if (document.readyState == 'loading') document.addEventListener('DOMContentLoaded', ready())
else ready()


var dropdownList = ["dropdown-Software", "dropdown-Game", "dropdown-container"]

function print(msg) {
    console.log(msg)
}

function HideAllDropDown(others) {
    for (var i = 0; i < others.length; i++) {
        var dropdown = document.getElementsByClassName(dropdownList[others[i]])[0]
        if (dropdown.matches('.display-flex')) {
            dropdown.classList.toggle('display-flex')
        }
    }
}

function ToggleAllNavbarStyle() {
    //It will change style of navbar options when clicked
    for (var i = 0; i < dropdownList.length; i++) {
        console.log("Color-Insede")
        var dropdown = document.getElementsByClassName(dropdownList[i])[0]
        if (dropdown.matches(".display-flex")) {
            if (dropdown.innerText[0] == "M") {
                document.getElementsByClassName('main-nav-item-1')[1].parentElement.classList.add('navbar-option-clicked')
            }
            else if (dropdown.innerText[0] == "X") {
                document.getElementsByClassName('main-nav-item-1')[2].parentElement.classList.add('navbar-option-clicked')
            }
            else {
                document.getElementsByClassName('main-nav-item-1')[3].parentElement.classList.add('navbar-option-clicked')
            }
        }
        else {
            document.getElementsByClassName('main-nav-item-1')[i + 1].parentElement.classList.remove('navbar-option-clicked')
        }
    }
}

function ManageDropDown() {
    // Adds dropdown functionalilty
    var navList = document.getElementsByClassName("main-nav-item-1")
    for (var i = 1; i < navList.length; i++) {
        var button = navList[i]
        button.addEventListener('click', (event) => {
            console.log(event)
            console.log(event.target)
            var elementName = event.target.innerText
            if (elementName == "Software") {
                HideAllDropDown([1, 2])
                document.getElementsByClassName("dropdown-Software")[0].classList.toggle("display-flex")
                ToggleAllNavbarStyle()
            }
            else if (elementName == "Games & Entertainment") {
                HideAllDropDown([0, 2])
                document.getElementsByClassName("dropdown-Game")[0].classList.toggle("display-flex")
                ToggleAllNavbarStyle()
            }
            else if (elementName == "All Microsoft") {
                HideAllDropDown([0, 1])
                document.getElementsByClassName("dropdown-container")[0].classList.toggle("display-flex")
                ToggleAllNavbarStyle()
            }
        })
    }

    //Adds event listener on documnet so that if clicked outside dropdown, it will close
    document.addEventListener('click', (event) => {

        for (var i = 0; i < dropdownList.length; i++) {
            if (document.getElementsByClassName(dropdownList[i])[0].contains(event.target)) {
                return
            }
        }

        if (!event.target.matches('.main-nav-item-1')) {
            console.log("Inside")
            for (var i = 0; i < dropdownList.length; i++) {
                var dropdown = document.getElementsByClassName(dropdownList[i])[0]
                if (dropdown.matches(".display-flex")) {
                    dropdown.classList.toggle("display-flex")
                }
            }
            ToggleAllNavbarStyle()
        }
    })
}


function Hambug() {
    document.getElementsByClassName('hambug')[0].addEventListener('click', (evt) => {
        document.getElementsByClassName('hambug')[0].style.display = 'none'
        document.getElementsByClassName('hambug-open')[0].style.display = 'flex'
    })

}

function HambugOpened() {
    document.getElementsByClassName('hambug-open')[0].addEventListener('click', (evt) => {
        document.getElementsByClassName('hambug-open')[0].style.display = 'none'
        document.getElementsByClassName('hambug')[0].style.display = 'flex'
    })
}

function ManageDropDownMobile() {
    Hambug()
    HambugOpened()
}

// ********************** Ready Function ************************


function ready() {

    //Manages dropdown for a Desktop version app
    ManageDropDown()

    //Manages dropdown for a Mobile version app
    ManageDropDownMobile()

}


// ********************** Ready Function Ends************************


