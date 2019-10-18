<li class="element-carousel__slide">
  <% if $Link %>
    <a href="{$Link.LinkURL}"{$Link.TargetAttr} class="element-carousel__link">
  <% end_if %>

  <div class="element-carousel__slide-container">
    <% if $Image %>
      <% include DNADesign\Elemental\Models\ElementCarouselImage  ImageSize=$ImageSize%>
    <% end_if %>

    <% if $Video %>
      {$Video}
    <% end_if %>

    <% if not $Video %>
      <% include DNADesign\Elemental\Models\ElementCarouselCaption %>
    <% end_if %>
  </div>

  <% if $Link %>
    </a>
  <% end_if %>
</li>
