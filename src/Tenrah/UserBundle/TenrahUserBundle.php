<?php

namespace Tenrah\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class TenrahUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
