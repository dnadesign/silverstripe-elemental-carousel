<?php

namespace DNADesign\Elemental\Controllers;

use SilverStripe\View\Requirements;

class ElementCarouselController extends ElementController
{
  public function init()
  {
    parent::init();

    Requirements::css('dnadesign/silverstripe-elemental-carousel: client/css/element-carousel.css');
    Requirements::javascript('dnadesign/silverstripe-elemental-carousel: client/js/lory.min.js');
    Requirements::javascript('dnadesign/silverstripe-elemental-carousel: client/js/element-carousel.js');
  }
}
