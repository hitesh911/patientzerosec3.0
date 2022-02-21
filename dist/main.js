
function open_thanks_modal() {
    var modal = document.getElementById("thanks-modal");
    modal.style.display = "block"
}

function close_thanks_modal() {
    var modal = document.getElementById("thanks-modal");
    modal.style.display = "none"
    window.location.reload(true)

}

document.onreadystatechange = function(){
    if(document.readyState != "complete"){
        const loading_bar = document.getElementById("loading")
        loading.style.display = "flex"

    }
}

// dropdown
console.log("hello")
document.addEventListener("click" ,e =>{
    const is_services_dropdown_menu = e.target.matches("[data-dropdown-button]")
    if(!is_services_dropdown_menu && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if(is_services_dropdown_menu){
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active1')
        
    }
    document.querySelectorAll("[data-dropdown].active1").forEach(dropdown =>{
        if(dropdown === currentDropdown) return
        dropdown.classList.remove("active1")
    })
})

