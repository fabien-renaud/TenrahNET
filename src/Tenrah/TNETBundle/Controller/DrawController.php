<?php

namespace Tenrah\TNETBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DrawController extends Controller
{
    /**
     * @Route("/draw", name="tenrahnet_draw")
     */
    public function indexAction()
    {
        return $this->render('TenrahTNETBundle:draw:index.html.twig');
    }
}
