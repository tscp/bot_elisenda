/* ref： http://tech.camph.net/slack-bot-with-gas/ */

var n = 1;
var today = new Date();
var mtgday = new Date(today.getTime() + n*24*60*60*1000);

var yy = (mtgday.getFullYear()).toString().slice(-2);
var mm = ("0"+(mtgday.getMonth()+1)).slice(-2);
var dd = ("0"+mtgday.getDate()).slice(-2);
var yymmdd = yy+mm+dd;

function postSlackMessage() {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN_2');
  var slackApp = SlackApp.create(token);
  var props = {
    channel: "#channel",
    message: "18時までにリソースの入力をお願いします。",
    userName: "elisenda"
  }
  slackApp.postMessage(props.channel, props.message, {
    username:props.userName,
    attachments: JSON.stringify([{
      "channels": "#channel",
      // "pretext" : "",
      "text": "https://docs.google.com/spreadsheets/d/*****Your Sheet*****"
    }])
  });
  slackApp.filesUpload(token, {
    content: "/* markdown */",
    filetype: "post",
    filename: yymmdd + " Mtg.",
    editable: true,
    channels: "#channel"
  });
}
