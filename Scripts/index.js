//Checks whether document is loaded or not if not, js waits so that document gets loaded
if (document.readyState == 'loading') document.addEventListener('DOMContentLoaded', ready())
else ready()


// ********************** Ready Function ************************


function ready() {
    var dropdownList = ["dropdown-Software", "dropdown-Game", "dropdown-container"]
    console.log(dropdownList)

    var navList = document.getElementsByClassName("main-nav-item-1")
    for (var i = 1; i < navList.length; i++) {
        var button = navList[i]
        console.log(button)
        button.addEventListener('click', (event) => {
            console.log(event)
            console.log(event.target)
            var elementName = event.target.innerText
            if (elementName == "Software") {
                HideAllDropDown([1, 2])
                document.getElementsByClassName("dropdown-Software")[0].classList.toggle("show-block")
            }
            else if (elementName == "Games & Entertainment") {
                HideAllDropDown([0, 2])
                document.getElementsByClassName("dropdown-Game")[0].classList.toggle("show-block")
            }
            else if (elementName == "All Microsoft") {
                HideAllDropDown([0, 1])
                document.getElementsByClassName("dropdown-container")[0].classList.toggle("show-flex")
            }
        })
    }

    function HideAllDropDown(others) {
        for (var i = 0; i < others.length; i++) {
            var dropdown = document.getElementsByClassName(dropdownList[others[i]])[0]
            if (dropdown.matches('.show-block')) {
                dropdown.classList.toggle('show-block')
            }
            else if (dropdown.matches('.show-flex')) {
                dropdown.classList.toggle('show-flex')
            }
        }
    }

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
                if (dropdown.matches(".show-flex")) {
                    dropdown.classList.toggle("show-flex")
                }
                else if (dropdown.matches(".show-block")) {
                    dropdown.classList.toggle("show-block")
                }
            }
        }
    })
}
// ********************** Ready Function Ends************************


