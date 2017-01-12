<?php

namespace Tenrah\TNETBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CloudController extends Controller
{
    /**
     * @Route("/cloud", name="tenrahnet_cloud")
     */
    public function indexAction()
    {
        return $this->render('TenrahTNETBundle:cloud:index.html.twig');
    }
}
