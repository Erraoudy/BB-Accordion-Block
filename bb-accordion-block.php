<?php
/**
 * Plugin Name:       BB Accordion Block
 * Plugin URI:        https://github.com/Erraoudy/BB-Accordion-Block
 * Description:       A custom block plugin that adds a new block to the WordPress editor.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            SAID ERRAOUDY
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bb-accordion-block
 * Domain Path:       /languages
 */

// Exit if accessed directly 
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register block
function bb_accordion_block_register() {
	
	// Accordion
	register_block_type( 
		__DIR__ . '/build/accordion'
	);
	// Accordion item
	register_block_type(
		__DIR__ . '/build/accordion-item'
	);
}
add_action( 'init', 'bb_accordion_block_register' );

// Allowed HTML
function bb_accordion_block_allowed_html( $tags ) {
    
	$tags['svg'] = array(
		'version' => array(),
        'xmlns' => array(),
		'width' => array(),
		'height' => array(),
        'fill' => array(),
        'viewbox' => array(),
        'aria-hidden' => array(),
        'focusable' => array(),
    );
    $tags['g'] = array(
        'stroke' => array(),
		'stroke-width' => array(),
    );
    $tags['line'] = array(
        'x1' => array(),
		'x2' => array(),
        'y1' => array(),
		'y2' => array(),
    );
    $tags['polyline'] = array(
        'fill' => array(),
		'points' => array(),
        'stroke' => array(),
		'stroke-width' => array(),
    );
    return $tags;
}
add_filter( 'wp_kses_allowed_html', 'bb_accordion_block_allowed_html', 10, 2 );
