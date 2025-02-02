(function() {
	'use strict';
	// Saves options to chrome.storage
	function save_options() {
		var options_mailprovider = document.getElementById('options_mailprovider').value;
		var options_twitter = document.getElementById('options_twitter').value;
		var options_github = document.getElementById('options_github').value;
		var options_reddit = document.getElementById('options_reddit').value;
		var options_twitch = document.getElementById('options_twitch').value;
        var options_youtube = document.getElementById('options_youtube').value;
        var options_bgcolor = document.getElementById('options_bgcolor').value;
		var options_bordercolor = document.getElementById('options_bordercolor').value;

		chrome.storage.sync.set({
			mailprovider: options_mailprovider,
			twitter: options_twitter,
			github: options_github,
			reddit: options_reddit,
			twitch: options_twitch,
            youtube: options_youtube,
            bgcolor: options_bgcolor,
			bordercolor: options_bordercolor
		}, function() {
			// Update status to let user know options were saved.
			var status = document.getElementById('status');
			status.textContent = 'Options saved.';
			setTimeout(function() {
				status.textContent = '';
			}, 750);
		});
	}

	// Restores select box and checkbox state using the preferences
	// stored in chrome.storage.
	function restore_options() {
		// Use default values
		chrome.storage.sync.get({
			mailprovider: 'https://gmail.com',
			twitter: 'https://twitter.com',
			github: 'https://github.com',
			reddit: 'https://reddit.com',
			twitch: 'http://www.twitch.tv/',
            youtube: 'https://www.youtube.com',
            bgcolor: '#efefef',
			bordercolor: '#777'
		}, function(items) {
			document.getElementById('options_mailprovider').value = items.mailprovider;
			document.getElementById('options_twitter').value = items.twitter;
			document.getElementById('options_github').value = items.github;
			document.getElementById('options_reddit').value = items.reddit;
			document.getElementById('options_twitch').value = items.twitch;
            document.getElementById('options_youtube').value = items.youtube;
            document.getElementById('options_bgcolor').value = items.bgcolor;
			document.getElementById('options_bordercolor').value = items.bordercolor;


		var mailprovider = document.getElementById('mailprovider'),
			twitter = document.getElementById('twitter'),
			github = document.getElementById('github'),
			reddit = document.getElementById('reddit'),
			twitch = document.getElementById('twitch'),
            youtube = document.getElementById('youtube'),
            bgcolor = document.getElementById('bgcolor'),
			bordercolor = document.getElementById('bordercolor');

		if (mailprovider.getAttribute('href') != items.mailprovider) {
			mailprovider.setAttribute('href', items.mailprovider);
		}
		if (twitter.getAttribute('href') != items.twitter) {
			twitter.setAttribute('href', items.twitter);
		}
		if (github.getAttribute('href') != items.github) {
			github.setAttribute('href', items.github);
		}
		if (reddit.getAttribute('href') != items.reddit) {
			reddit.setAttribute('href', items.reddit);
		}
		if (twitch.getAttribute('href') != items.twitch) {
			twitch.setAttribute('href', items.twitch);
		}
        if (youtube.getAttribute('href') != items.youtube) {
            youtube.setAttribute('href', items.youtube);
        }
        if (document.body.style.backgroundColor != items.bgcolor) {
            document.body.style.backgroundColor = items.bgcolor;
        }
		// if (bordercolor.getAttribute('href') != items.bordercolor) {
		// 	bordercolor.setAttribute('href', items.bordercolor);
		// }

		});
	}
	document.addEventListener('DOMContentLoaded', restore_options);
	document.getElementById('save').addEventListener('click', save_options);
})();
