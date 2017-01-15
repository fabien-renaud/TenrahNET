<?php

namespace Tenrah\TNETBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PlayController extends Controller
{
    /**
     * @Route("/play", name="tenrahnet_play")
     */
    public function indexAction()
    {
        return $this->render('TenrahTNETBundle:play:index.html.twig');
    }
}
