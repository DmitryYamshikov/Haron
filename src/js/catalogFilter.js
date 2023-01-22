export function catalogFilter() {
  const catalogFilterBtn = document.querySelector('.catalog__filter-btn')
  const catalogFilter = document.querySelector('.filter-catalog')

  catalogFilterBtn?.addEventListener('click', () => {
    catalogFilter.classList.toggle('filter-catalog--active')
  })

  const catalogFilterTitle = document.querySelectorAll('.filter-catalog__category-title')

  catalogFilterTitle?.forEach(item => {
    item?.addEventListener('click', () => {
      item.closest('.filter-catalog__category')
        .classList.toggle('filter-catalog__category--active')
    })
  })
}