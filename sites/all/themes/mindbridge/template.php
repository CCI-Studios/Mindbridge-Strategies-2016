<?php 

function mindbridge_preprocess_page(&$vars)
{
	if(drupal_is_front_page())
	{
		 drupal_add_js(drupal_get_path('theme', 'mindbridge') . '/js/slick/slick.js');
		 drupal_add_js(drupal_get_path('theme', 'mindbridge') . '/js/front-slider.js');
  	     $vars['scripts'] = drupal_get_js(); // necessary in D7?
	}
}