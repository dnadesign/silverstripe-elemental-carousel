<div class="element-carousel" data-element-carousel data-options="{$Options}">
  <div class="element-carousel-frame">
    <ul class="element-carousel-slides">
      <% loop $Slides %>
        <% include DNADesign\Elemental\Models\ElementCarouselSlide %>
      <% end_loop %>
    </ul>
  </div>

  <% if $HasDots %>
    <ul class="element-carousel-dots">
      <% loop $Slides %>
        <% include DNADesign\Elemental\Models\ElementCarouselDot Slide=$Me, Active=$First %>
      <% end_loop %>
    </ul>
  <% end_if %>

  <% if $HasArrows %>
    <% include DNADesign\Elemental\Models\ElementCarouselArrows %>
  <% end_if %>

</div>
