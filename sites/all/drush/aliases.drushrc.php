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
