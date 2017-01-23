<?php
/**
 * @file
 * views_feature.features.inc
 */

/**
 * Implements hook_views_api().
 */
function views_feature_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function views_feature_image_default_styles() {
  $styles = array();

  // Exported image style: banner.
  $styles['banner'] = array(
    'label' => 'Banner',
    'effects' => array(
      1 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 1420,
          'height' => 570,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'banner',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}
