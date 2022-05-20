(function(KoreSDK){
    var KoreSDK=KoreSDK||{};

    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://jp-bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    //botOptions.bearer = "bearer xyz-------------------";
    //botOptions.ttsSocketUrl = '';//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

    // 오늘 날짜 활용 Identity 생성
    dateTime = new Date();

    var year = dateTime.getFullYear();
    var month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
    var day = ('0' + dateTime.getDate()).slice(-2);
    var hour = ('0' + dateTime.getHours()).slice(-2);
    var minites = ('0' + dateTime.getMinutes()).slice(-2);

    dateTime = year + month + day + hour + minites;

    var identity = Math.random() + dateTime;

    botOptions.JWTUrl = "http://1.209.229.71:24011/api/users/sts";
    botOptions.userIdentity = identity;// Provide users email id here
    botOptions.botInfo = {name: "반월 3차 세움펠리피아","_id": "st-8c29becb-1c91-5b96-8ecf-818d83c897fe"}; // bot name is case sensitive
    botOptions.clientId = "cs-8787d4bf-e9ff-5e73-ba51-4a5214371eab";
    botOptions.clientSecret = "qiQmn+zyPflJDBT0urmchHne9WQekhpiei/037dd+wM=";


// To modify the web socket url use the following option
// botOptions.reWriteSocketURL = {
//     protocol: 'PROTOCOL_TO_BE_REWRITTEN',
//     hostname: 'HOSTNAME_TO_BE_REWRITTEN',
//     port: 'PORT_TO_BE_REWRITTEN'
// };
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: true, 			// set true, opens authentication links in popup window, default value is "false"
        isSendButton: true, 			// set true, to show send button below the compose bar
        isTTSEnabled: false,			// set true, to hide speaker icon
        ttsInterface:'webapi',        // webapi or awspolly , where default is webapi
        isSpeechEnabled: false,			// set true, to hide mic icon
        allowGoogleSpeech: true,		// set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: true,			// set false, to deny sending location to server
        isAttachmentBtn: false,           // 첨부파일 버튼 생성 유무
        loadHistory: false,				// set true to load recent chat history
        messageHistoryLimit: 10,		// set limit to load recent chat history
        autoEnableSpeechAndTTS: true, 	// set true, to use talkType voice keyboard.
        graphLib: "d3" ,				// set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
        minimizeMode: true,             // set true, to show chatwindow in minimized mode, If false is set remove #chatContainer style in chatwindow.css  
        multiPageApp: {
            enable: false,              //set true for non SPA(Single page applications)
            userIdentityStore: 'localStorage',//'localStorage || sessionStorage'
            chatWindowStateStore: 'localStorage'//'localStorage || sessionStorage'
        },              
        supportDelayedMessages:true,    // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI       
        pickersConfig:{
            showDatePickerIcon:false,           //set true to show datePicker icon
            showDateRangePickerIcon:false,      //set true to show dateRangePicker icon
            showClockPickerIcon:false,          //set true to show clockPicker icon
            showTaskMenuPickerIcon:false,       //set true to show TaskMenu Template icon
            showradioOptionMenuPickerIcon:false //set true to show Radio Option Template icon
        }
    };
     /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);
