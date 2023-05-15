<?php

// cau lenh show loi
// error_reporting(E_ALL);
// ini_set('display_errors', '1');

require "services/DB.php";

use services\DB;

require('controllers/PostsController.php');

// get current URL
$current_link = $_SERVER['REQUEST_URI'];

var_dump($current_link);
exit;

// routes
$urls = [
    '/api/posts' => ['PostsController@getPostFromDatabase']
];