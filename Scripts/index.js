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
            // console.log(event)
            // console.log(event.target)
            var width = window.innerWidth

            var elementName = event.target.innerText
            if (elementName == "Software") {
                if (width >= 1050)
                    HideAllDropDown([1, 2])
                document.getElementsByClassName("dropdown-Software")[0].classList.toggle("display-flex")
                ToggleAllNavbarStyle()
            }
            else if (elementName == "Games & Entertainment") {
                if (width >= 1050)
                    HideAllDropDown([0, 2])
                document.getElementsByClassName("dropdown-Game")[0].classList.toggle("display-flex")
                ToggleAllNavbarStyle()
            }
            else if (elementName == "All Microsoft") {
                if (width >= 1050)
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
            const width = window.innerWidth
            if (width < 1050) {
                if (!(event.target.classList.contains('hambug') || event.target.classList.contains('hambug-line'))) {
                    if (document.getElementsByClassName('nav-left')[0].classList.contains('display-block')) {

                        var sub_dropdown_list = document.getElementsByClassName('sub-dropdown-list')
                        for (var i = 0; i < sub_dropdown_list.length; i++) {
                            if (sub_dropdown_list[i].classList.contains('display-flex')) sub_dropdown_list[i].classList.toggle('display-flex')
                            // print(sub_dropdown_list[i])
                        }
                        document.getElementsByClassName('nav-left')[0].classList.toggle('display-block')
                        var lab = document.getElementsByClassName('hambug-open')[0]
                        lab.style.display = 'none'
                        if (document.getElementsByClassName('hambug')[0].classList.contains('display-none'))
                            document.getElementsByClassName('hambug')[0].classList.toggle('display-none')

                    }
                }
            }
        }
    })
}


function Hambug() {
    document.getElementsByClassName('hambug')[0].addEventListener('click', (evt) => {
        document.getElementsByClassName('nav-left')[0].classList.toggle('display-block')
        document.getElementsByClassName('hambug')[0].classList.toggle('display-none')
        var lab = document.getElementsByClassName('hambug-open')[0]
        lab.style.display = 'flex'
    })
}

function HambugOpened() {
    document.getElementsByClassName('hambug-open')[0].addEventListener('click', (evt) => {
        document.getElementsByClassName('hambug')[0].classList.toggle('display-none')
        var lab = document.getElementsByClassName('hambug-open')[0]
        lab.style.display = 'none'
    })
}

function ActivateLayer3(event) {
    var sib
    print(event.target)

    if (event.target.classList.contains('sub-dropdown-list-head')) {
        sib = event.target.parentElement.children[1]
        print(sib)
        sib.classList.toggle('display-flex')
    }
    else if (event.target.classList.contains('sub-nav-head') || event.target.classList.contains('dropdown-arrow')) {
        sib = event.target.parentElement.parentElement.children[1]
        print(sib)
        sib.classList.toggle('display-flex')
    }
}

function ManageDropDownMobile() {
    window.addEventListener('resize', WindowResized)
    Hambug()
    HambugOpened()

    // Add event listener for layer 3 
    // Using Event Delegation 
    // Event Delegation is a technique where instead of assiging same event listener to two or more elements we will assign, only one event listener to their parent element and to figure out on which element did event occur we will use event.target attribute to give us the target element on which the event occurs 

    // This is without delegation where i was adding event listener to each <li> in <ul>

    // var sub_dropdown_head = document.getElementsByClassName("sub-dropdown-list-head")
    // for (var i = 0; i < sub_dropdown_head.length; i++) {


    // }


    //This is with delegation where i am adding event to their common parent i.e <ul>
    var dropdown_container = document.getElementsByClassName('dropdown-container')[0]
    dropdown_container.addEventListener('click', ActivateLayer3)
}

function WindowResized() {
    const mediaFireed = window.matchMedia('(max-width:1050px)')
    if (!mediaFireed.matches) {
        if (document.getElementsByClassName('nav-left')[0].classList.contains('display-block'))
            document.getElementsByClassName('nav-left')[0].classList.toggle('display-block')

        var lab = document.getElementsByClassName('hambug-open')[0]
        lab.style.display = 'none'

        if (document.getElementsByClassName('hambug')[0].classList.contains('display-none'))
            document.getElementsByClassName('hambug')[0].classList.toggle('display-none')
        HideAllDropDown([0, 1, 2])
        ToggleAllNavbarStyle()
    }
}

// ********************** Ready Function ************************



function ready() {
    // window.addEventListener('load', (e) => { print("HI") })

    //Manages dropdown for a Desktop version app
    ManageDropDown()

    //Manages dropdown for a Mobile version app
    ManageDropDownMobile()

}


// ********************** Ready Function Ends************************


