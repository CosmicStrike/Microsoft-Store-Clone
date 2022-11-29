//Checks whether document is loaded or not if not, js waits so that document gets loaded
if (document.readyState == 'loading') document.addEventListener('DOMContentLoaded', ready())
else ready()

let img_index = 0

function print(msg) {
    console.log(msg)
}

function ChangeImage(handle) {
    var images = ["Images/App-Store/Popular-app-1.jpg", "Images/App-Store/AdobeExpress.png", "Images/App-Store/VoiceRecorder.png"]
    if (handle.classList.contains('navigation-left')) {
        img_index -= 1
        if (img_index < 0) img_index = 2
    }
    else {
        img_index = (img_index + 1) % 3
    }

    var applist = document.getElementsByClassName('popular-app-list')[0]
    img = applist.getElementsByTagName('img')[0]
    img.src = images[img_index]
    print(img_index)
}

function ready() {



    document.getElementsByTagName('main')[0].addEventListener('click', (event) => {
        var elem = event.target
        if (elem.classList.contains('navigation-left') || elem.classList.contains('navigation-right')) {
            ChangeImage(elem)
        }
    })
}