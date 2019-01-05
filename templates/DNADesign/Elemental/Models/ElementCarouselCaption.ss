<% if $Title && $ShowTitle || $Caption %>
  <div class="element-carousel__content">
    <% if $ShowTitle %>
      <p class="element-carousel__title">{$Title}</p>
    <% end_if %>

    <div class="element-carousel__caption">{$Caption}</div>
  </div>
<% end_if %>
