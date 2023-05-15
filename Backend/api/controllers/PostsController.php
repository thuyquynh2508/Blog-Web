<?php

namespace Api\Controllers;

use Services\DB;

class PostsController {
    public $conn = null;

    public function __construct() {
        // create connnection
        $this->conn = (new DB())->database();
    }

    // get posts from third party api
    public function getPosts() {
        try {
            // getting data
            $url = "https://jsonplaceholder.typicode.com/posts";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_ENCODING, 0);
            curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

            // getting photos

            $url = "https://jsonplaceholder.typicode.com/photos";

            $chImg = curl_init();
            curl_setopt($chImg, CURLOPT_AUTOREFERER, true);
            curl_setopt($chImg, CURLOPT_HEADER, 0);
            curl_setopt($chImg, CURLOPT_ENCODING, 0);
            curl_setopt($chImg, CURLOPT_MAXREDIRS, 10);
            curl_setopt($chImg, CURLOPT_TIMEOUT, 30);
            curl_setopt($chImg, CURLOPT_CUSTOMREQUEST, "GET");
            curl_setopt($chImg, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($chImg, CURLOPT_URL, $url);
            curl_setopt($chImg, CURLOPT_FOLLOWLOCATION, TRUE);
            curl_setopt($chImg, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

            $responseData = json_decode(curl_exec($ch), true);
            $responseImage = json_decode(curl_exec($chImg), true);
            $newArray = [];

            // combine data
            foreach($responseData as $resData) {
                if(isset($responseImage[$resData['id']])) {
                    $resData['image'] = $responseImage[$resData['id']]["url"];
                }
                $newArray[] = $resData;
            }

            // luu bai dang vao CSDL
            $this->savePostsToDatabase($newArray);
            
        }
        catch (\Exception $e) {
            var_dump($e->getMessage());
            exit;
        }
    }

    // save data to database
    public function savePostsToDatabase($posts = null) {
        foreach($posts as $post) {
            // var_dump($post);
            $sql = "INSERT INTO Post(`user_id`, `title`, `content`, `image`)
                VALUES (
                    '".$post['userId']."',
                    '".$post['title']."',
                    '".$post['body']."',
                    '".$post['image']."')";

                    if(mysqli_query($this->conn, $sql)) {
                        echo "New record created successfully";
                    } else {
                        echo "Error: ". $sql ."<br/>". mysqli_error($this->conn);
                    }
        }
        mysqli_close($this->conn);
    }

    public function getPostsFromDatabase() {
        try {

            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Headers: *");

            $perPage = $_GET['limit'] ?? 5;
            $pageNumber = $_GET['offset'] ?? 0;
            $postsArray = [];

            $sql = "SELECT * FROM Post";
            $totalPosts = mysqli_num_rows(mysqli_query($this->conn, $sql));
            $sql = "SELECT * FROM Post ORDER BY id LIMIT $perPage OFFSET $pageNumber";
            $response = mysqli_query($this->conn, $sql);

            if($response) {
                while($row = mysqli_fetch_array($response)) {
                    $postsArray['posts'][] = $row;
                }
            }
            else {
                echo "Error ". $sql. "<br/>" . mysqli_error($this->conn);
            }

            $postsArray['count'] = $totalPosts;

            mysqli_close($this->conn);

            echo json_decode($postsArray, JSON_PRETTY_PRINT);
            return json_decode($postsArray, JSON_PRETTY_PRINT);
            // var_dump($_GET);
            // exit;
        } catch (\Exception $e) {
            var_dump($e->getMessage());
            exit;
        }
    }
}