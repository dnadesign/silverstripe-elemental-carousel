<?php

namespace DNADesign\Elemental\DataObjects;

use DNADesign\Elemental\Models\ElementCarousel;
use DNADesign\Elemental\Forms\TextCheckboxGroupField;
use DNADesign\Elemental\Controllers\ElementCarouselController;
use DNADesign\YoutubeEmbed\YoutubeEmbed;
use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\TextField;
use SilverShop\HasOneField\HasOneButtonField;
use gorriecoe\Link\Models\Link;

class CarouselSlide extends DataObject
{
  private static $singular_name = 'carousel slide';

  private static $plural_name = 'carousel slides';

  private static $description = 'A slide for Carousel element';

  private static $table_name = 'DNADesign_CarouselSlide';

  private static $controller_class = ElementMediaController::class;

  private static $icon = 'font-icon-block-layout';

  private static $db = [
    'Title' => 'Varchar(255)',
    'ShowTitle' => 'Boolean',
    'Caption' => 'Text'
  ];

  private static $has_one = [
    'Carousel' => ElementCarousel::class,
    'Image' => Image::class,
    'Video' => YoutubeEmbed::class,
    'Link' => Link::class
  ];

  private static $owns = [
    'Image',
  ];

  public function getCMSFields()
  {
    $fields = parent::getCMSFields();

    $fields->removeByName('ShowTitle');
    $fields->removeByName('VideoID');
    $fields->removeByName('LinkID');
    $fields->removeByName('CarouselID');

    $fields->addFieldsToTab('Root.Main', [
      HasOneButtonField::create($this, 'Video'),
      HasOneButtonField::create($this, 'Link'),
    ]);

    $fields->replaceField(
      'Title',
      TextCheckboxGroupField::create(
        TextField::create('Title', 'Title (displayed if checked)'),
        CheckboxField::create('ShowTitle', 'Displayed')
      )
      ->setName('TitleAndDisplayed')
    );

    return $fields;
  }
}
