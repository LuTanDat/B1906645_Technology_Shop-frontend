var contactFormHandle =()=>{
    $('button[type=submit]').click((e)=>{
        e.preventDefault()
        e.stopPropagation()
        alert('Backshoes xin cảm ơn góp ý của bạn!')
        window.location.reload()
    })
}

$(document).ready(()=>{
    contactFormHandle()
})