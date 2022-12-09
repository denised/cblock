<?php
/**
 * Plugin Name:       Cblock
 * Description:       MMR Conditional Block for just us folks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Denise
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cblock
 */

function create_block_cblock_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_cblock_block_init' );
