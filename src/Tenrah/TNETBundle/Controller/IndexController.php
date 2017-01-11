<?php

namespace Tenrah\TNETBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    /**
     * @Route("/", name="tenrahnet_homepage")
     */
    public function indexAction()
    {
        return $this->render('TenrahTNETBundle:index:index.html.twig');
    }
}
