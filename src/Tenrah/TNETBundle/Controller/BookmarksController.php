<?php

namespace Tenrah\TNETBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BookmarksController extends Controller
{
    /**
     * @Route("/bookmarks", name="tenrahnet_bookmarks")
     */
    public function indexAction()
    {
        return $this->render('TenrahTNETBundle:bookmarks:index.html.twig');
    }
}
