const $searchForm=document.querySelector('#search-form')
const $searchInput = $searchForm.querySelector('#search-input')

const getSearch = () => {
  $searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userQuery=$searchInput.value.trim()
    const cleanQuery = userQuery.replace(/\s+/g, ''); // Normalize spaces
    if(userQuery) {
      console.log('User Query:', userQuery)
      console.log('Clean Query:', cleanQuery)
      const queryJson = JSON.stringify({ query: cleanQuery });
    }
  })
}

export default getSearch;
