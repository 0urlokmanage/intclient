let states = {
    'invaliduserIdentifier': '<div data-testid="IdentifierFirstErrorMessage"  class="IuxErrorBox__StyledDiv-sc-1uyrsey-0 kGzcKp">We cant find anyone with <strong class="SignInFormErrors__StyledStrongBreakWord-swrycd-2 eJYsnT">sdsdsds@ds.com</strong></div>"',
    "header": "IdentifierFirstHeader",

    "IdentifierFirstErrorMessage":"", 
    "validuserIdentifier": "passwordVerificationContainer",
    "chooseOTP": "MfaChallengePicker",
    "chooseOTPidentifier": "challengePickerChallenges",
    "challengePickerHeader": "challengePickerHeader",


    "VerifyOtpHeader": "VerifyOtpWeSentToPrompt",
    "header": "VerifyOtpHeader",

    "wrongOTP": "VerifyOtpServerError",
    

    "nextaction": "https://accounts.intuit.com/app/account-manager",
    "selectors":{
        "header": "IdentifierFirstHeader"
    }
}

let actions = { 
    "firstlogin" : {
        "button": "",
    },
    "getstate": [states],

    "receiveAction":{

    },
    "sendAction":{
        
    }
}

let buttons = {
    ""
}