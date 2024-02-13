<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Progetto-settimana-14' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'h1dEXlL9WSiRTbUGKbmcJnRAMPnAZX64CCTmMKLBKXwotIhGYDGOhCIVzwAfqwYW' );
define( 'SECURE_AUTH_KEY',  'pTFReV8DMS2aoSoisxEXFHkh1byyptWSzlE2b3LTnvqmpNcJOCDRqw5H8v4UdL4F' );
define( 'LOGGED_IN_KEY',    '5k13wOQZP2RxlhoypMEbpUX0Iu2P2WNOkNlWFeRlYGwK6qZXASSLT16011dIHakY' );
define( 'NONCE_KEY',        'Ogmp1D6X29SGBk6FHfjvBJmzWdQQ12EVkHFpkfxbAWaQ2kpybG577zaFCOeTfKM0' );
define( 'AUTH_SALT',        'xmnI6NuJaAvf6bxbyjpsDHa0ZNSiwTPjV9MmBk2SbQjnwuW3PDBYoLzPZbEh8API' );
define( 'SECURE_AUTH_SALT', 'N79sIFdOVdn1kKrfujCxQtPFd5a7gHIeKlSBfqXvUfXTs7qoqcV8mJHloJpoCRO4' );
define( 'LOGGED_IN_SALT',   'mBmFzjngwoBECudBvmFtQ2wlLlha33VcuSuucSEtzM0QdUC7p6XOhJH6nLx81ejA' );
define( 'NONCE_SALT',       'LXTvqIkFQiSj40OPhmWz7ciKuWulwnNx0Y5NaCnQexKWUSrdGJL8DUe30EzSYYRX' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
