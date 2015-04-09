// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//This file is used to prevent malicious domains owned by AM3 from loading



chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    
  	var ret = false;
        //Change read status
  	if (-1 != details.url.indexOf("https://www.facebook.com/ajax/mercury/change_read_status.php"))
  		ret = true;
  	if (-1 != details.url.indexOf("https://www.messenger.com/ajax/mercury/change_read_status.php"))
  		ret = true;
        //typing 	
        if (-1 != details.url.indexOf("https://www.facebook.com/ajax/messaging/typ.php"))
		ret = true;
        if (-1 != details.url.indexOf("https://www.messenger.com/ajax/messaging/typ.php"))
		ret = true;
        //mark seen
        if (-1 != details.url.indexOf("https://www.messenger.com/ajax/mercury/mark_seen.php"))
		ret = true;
        if (-1 != details.url.indexOf("https://www.facebook.com/ajax/mercury/mark_seen.php"))
		ret = true;
    return {cancel: ret};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]);

