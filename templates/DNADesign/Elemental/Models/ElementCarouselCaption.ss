<% if $Title && $ShowTitle || $Caption %>
  <div class="element-carousel__content">
    <% if $ShowTitle %>
      <h3 class="element-carousel__title">{$Title}</h3>
    <% end_if %>

    <div class="element-carousel__caption"><p>{$Caption}</p></div>
  </div>
<% end_if %>
