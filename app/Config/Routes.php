<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->post('/entreecircuit', 'Circuit::entreecircuit');
$routes->get('/affichercircuit', 'Circuit::affichercircuit');
$routes->get('/affichercircuitbyid/(:any)', 'Circuit::affichercircuitbyid/$1');

$routes->post('/additinerary', 'Itinerary::additinerary');
$routes->get('/getitinerary', 'Itinerary::getitinerary');

$routes->post('/addcity', 'City::addcity');
$routes->get('/getcity', 'City::getcity');

$routes->post('/addactivity', 'Activity::addactivity');
$routes->get('/getactivity', 'Activity::getactivity');

$routes->post('/addpic', 'Pic::addpic');
$routes->get('/getpic', 'Pic::getpic');