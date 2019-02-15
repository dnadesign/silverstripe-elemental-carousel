<% if $Title && $ShowTitle %>
  <div class="element-carousel__header">
    <h2 class="element-carousel__title">{$Title}</h2>
  </div>
<% end_if %>

<div class="element-carousel__container" data-element-carousel>
  <div class="element-carousel__frame">
    <ul class="element-carousel__slides">
      <% loop $Slides %>
        <% include DNADesign\Elemental\Models\ElementCarouselSlide %>
      <% end_loop %>
    </ul>
  </div>

  <% if $HasDots %>
    <ul class="element-carousel__dots">
      <% loop $Slides %>
        <% include DNADesign\Elemental\Models\ElementCarouselDot Slide=$Me, Active=$First %>
      <% end_loop %>
    </ul>
  <% end_if %>

  <% if $HasArrows %>
    <% include DNADesign\Elemental\Models\ElementCarouselArrows %>
  <% end_if %>
</div>
