 const categoriesMarkup = ({ results = [] }) => {
  return results.reduce(
    (html, { name, filter, imgUrl }) =>
      html +
      `<li
    class="category-item"
    data-filter="${filter}"
    data-name="${name}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${imgUrl}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${name[0].toUpperCase()+name.slice(1)}</h3>
    <p class="category-filter">${filter}</p>
    </div>
  </li>`,
    ''
  );
};

export {categoriesMarkup}