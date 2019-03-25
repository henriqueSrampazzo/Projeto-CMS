<!DOCTYPE html>

<html lang="pt-br">

<head>

	<title>OAuth-Teste2</title>

	<meta charset="utf-8">

	<script src="https://apis.google.com/js/platform.js" async defer></script>

	<meta name = "google-signin-client_id" content = "985193849438-rtvrgp0drn3opa2btb5skqtp711cm7cb.apps.googleusercontent.com">
	
</head>

<body>

	<div class="g-signin2" data-onsuccess="onSignIn"></div>

	<p id="msgID"></p>
	<p id="msgNome"></p>
	<p id="msgEmail"></p>
	<p id="msgToken"></p>

	<script>

		function onSignIn(googleUser) {

			var profile = googleUser.getBasicProfile();

			var userID = profile.getId(); 
			var userName = profile.getName();
			var userEmail = profile.getEmail();
			var id_token = googleUser.getAuthResponse().id_token;

			document.getElementById('msgID').innerHTML = userID;
			document.getElementById('msgNome').innerHTML = userName;
			document.getElementById('msgEmail').innerHTML = userEmail;
			document.getElementById('msgToken').innerHTML = id_token;

			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://localhost:8888/token');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onload = function() {
				console.log('Signed in as: ' + userEmail);
			};
			xhr.send('id_token=' + id_token);
		}

	</script>

	<a href="#" onclick="signOut();">Sign out</a>

	<script>

		function signOut() {

			var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function () {
				console.log('User signed out.');
			});
		}
	</script>


</body>

</html>