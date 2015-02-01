<?php
require_once('config.php');
require_once('TwitterAPIExchange.php');

///////////////////////////////////
// twitter build
///////////////////////////////////
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#awesome';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($config);
$twitterjson = $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
$filename = '../836x8/data/tweets.json';
$twit = json_decode($twitterjson);
$file = fopen($filename, 'w');
fwrite($file, json_encode($twit));
fclose($file);