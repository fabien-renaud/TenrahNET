<?php

namespace Tenrah\TNETBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IRCController extends Controller
{
    /**
     * @Route("/irc", name="tenrahnet_irc")
     */
    public function indexAction()
    {
        return $this->render('TenrahTNETBundle:irc:index.html.twig');
    }
}
