<?php

namespace DNADesign\Elemental\Models;

use DNADesign\Elemental\Models\BaseElement;
use DNADesign\Elemental\DataObjects\CarouselSlide;
use DNADesign\Elemental\Controllers\ElementCarouselController;

class ElementCarousel extends BaseElement
{
  private static $table_name = 'ElementCarousel';

  private static $description = 'Carousel';

  private static $singular_name = 'carousel';

  private static $plural_name = 'carousels';

  private static $icon = 'font-icon-block-carousel';

  private static $controller_class = ElementCarouselController::class;

  private static $inline_editable = false;

  private static $db = [
  ];

  private static $has_many = [
    'Slides' => CarouselSlide::class,
  ];

  /**
   * Enable arrow navigation
   * @config
   * @var bool
   */
  private static $enable_arrow_navigation = true;

  /**
   * Enable dot navigation
   * @config
   * @var bool
   */
  private static $enable_dot_navigation = true;

  public function getType()
  {
    return _t(__class__ . '.BlockType', 'Carousel');
  }

  public function getSimpleClassName()
  {
    return 'element-carousel';
  }

  public function getHasArrows()
  {
    return $this->config()->get('enable_arrow_navigation');
  }

  public function getHasDots()
  {
    return $this->config()->get('enable_dot_navigation');
  }
}
