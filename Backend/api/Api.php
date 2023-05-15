<?php

namespace Api;

class Api {
    public static function routing($current_link, $urls) {
        try {
            // var_dump('here');
            // exit;

            foreach($urls as $index => $url) {
                if($index != $current_link) {
                    continue;
                }

                $routeElement = explode('@', $url[0]);
                $className = $routeElement[0];
                $function = $routeElement[1];

                // check if controller present
                if(!file_exists("controllers/". $className . ".php")) {
                    return "Controller not found";
                } 

                $class = "api\controllers\\$className";
                $object = new $class();

                var_dump($class, $object);
                exit;
                
                $object->$function();

            }
        } catch(\Exception $e) {
            var_dump($e->getMessage());
        }
    }
}