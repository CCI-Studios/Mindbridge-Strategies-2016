<?php

$aliases['dev'] = array(
	'uri'=> 'mindbridge.ccistaging.com',
	'root' => '/home/staging/subdomains/mindbridge/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options'=>'-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'live.mindbridgestrategies.com',
	'root' => '/home/mindbrid/subdomains/live/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'mindbrid',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);