<?php

// cau lenh show loi
// error_reporting(E_ALL);
// ini_set('display_errors', '1');

require "services/DB.php";

use services\DB;
use Api\Api;

require('controllers/PostsController.php');
require('Api.php');

// get current URL
$current_link = $_SERVER['REQUEST_URI'];

// handle query string
if(str_contains($current_link, '?')) {
    $current_link = explode('?', $current_link)[0];
}

var_dump($current_link);
// exit;

// routes
$urls = [
    '/api/posts' => ['PostsController@getPostFromDatabase']
];

// check if route available
$availableRoutes = array_keys($urls);

if (!in_array($current_link, $availableRoutes)) {
    header('HTTP/1.1 404 Not Found');
    exit;
}

Api::routing($current_link[0], $urls);