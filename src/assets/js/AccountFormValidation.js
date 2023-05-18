var form = $('.account-form')

var strongPass = /^((?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]))(?=.{8,})/
var corectEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/

var inputs = form[0].querySelectorAll('input:not([type=submit])')

var inputFocusEvent=()=>{
    inputs.forEach((e)=>{
        e.onfocus=()=>{
            if(e.id!='check-privacy-policy'){
                e.nextElementSibling.classList.add('mess-hide')
                if(e.type=='password' && e.id=='repass')
                    e.nextElementSibling.nextElementSibling.classList.add('mess-hide')
            }
            else
                e.parentElement.nextElementSibling.classList.add('mess-hide')
        }
    })
}

var formValidate=()=>{
    var submitBtn = form.children('input[type=submit]')
    submitBtn.click((e)=>{
        var valid = true;
        e.preventDefault()
        inputs.forEach((e)=>{
            if(e.type=='password' && e.id=='pass'){
                if(!strongPass.test(e.value)){
                    e.nextElementSibling.classList.remove('mess-hide')
                    valid = false
                }
            }
            else if(e.type=='password' && e.id=='repass'){
                let pass = $('input[type=password]#pass')[0]
                if(pass.value !== e.value){
                    e.nextElementSibling.nextElementSibling.classList.remove('mess-hide')
                    valid = false
                }
                else if(!strongPass.test(e.value)){
                    e.nextElementSibling.classList.remove('mess-hide')
                    valid = false
                }
            }
            else if(e.type=='text' && e.id=='username'){
                if(e.value.length<10 || e.value.length>20){
                    e.nextElementSibling.classList.remove('mess-hide')
                    valid = false
                }
            }
            else if(e.type=='email' && e.id=='email'){
                if(!corectEmail.test(e.value)){
                    e.nextElementSibling.classList.remove('mess-hide')
                    valid = false
                }
            }
            else if(e.type=='checkbox' && e.id=='check-privacy-policy'){
                if(!e.checked){
                    e.parentElement.nextElementSibling.classList.remove('mess-hide')
                    valid = false
                }
            }
            
        })

        if(valid) {
            form.submit()
            window.localStorage.setItem('username',$('input#username').val())
            window.location.replace('./index.html')
        }
    })
}

inputFocusEvent()
formValidate()