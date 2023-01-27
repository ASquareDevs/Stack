/*************************************************************
* Communication.js
*
* Appended to the index.html Unity WebGL template (the 'inner' html)
* Used to send and recieve messages from Unity
*
**************************************************************/

//#endregion

//--------------------------------------------------//
// Use this to recieve commands from the outer iFrame
// Our _event variable contains a parameters array within the data object.
// This parameters array contains multiple variables, seperated by pipe delimiters...
//  
//      uid:        The unique 32bit identifier that tells us what Unity WebGL instance the BrandXRAPI.js is trying to message. 
//                      If this doesn't match our stored uid then we disregard the sent in message
//      receiver: 	The name of the receiver method we want to call in javascript
//      parameters: An array of variables seperated by underscores
window.ReceiveMessageFromIFrame = function( message )
//--------------------------------------------------//
{	
	//console.log("CommunicationInner.js//ReceiveMessageFromIFrame// message " + JSON.stringify(_event .data));
    //Pass the message from the outer html javascript (via our BrandXRAPI.js) to our unity instance, which will check the UID and call the logic if there's a match
    if( window.unityInstance != null )
    {
		var inputGiven = message.data;
		inputGiven = inputGiven;
		window.unityInstance.SendMessage( "Player", "VuplexInputs", inputGiven);
	/*			
		if(message == 'INPUT 1')
		{
			window.unityInstance.SendMessage( "Player", "MoveUp");
		}
		else if(message == 'INPUT 2'))
		{
			window.unityInstance.SendMessage( "Player", "MoveDown");
		}
		else if(message == 'INPUT 3'))
		{
			window.unityInstance.SendMessage( "Player", "MoveLeft");
		}
		else if(message == 'INPUT 4'))
		{
			window.unityInstance.SendMessage( "Player", "MoveRight");
		}	
*/		
    }
    else
    {
		console.log( "Inner Communication.js ReceiveMessageFromIFrame(). Unable to locate unityInstance to send message to" );
    }

} //END ReceiveMessageFromIFrame

// Assign handler to message event, this allows us to intercept window.postMessage commands 
if ( window.addEventListener ) 
{
    window.addEventListener('message', window.ReceiveMessageFromIFrame, false);
} 
else if ( window.attachEvent ) // ie8
{
    window.attachEvent('onmessage', window.ReceiveMessageFromIFrame);
}
else
{
	console.log('DID NOT ADD LISTENER');
}

//#endregion

