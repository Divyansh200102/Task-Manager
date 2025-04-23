// Filtering Options
// Status

// Priority

// Assignee

// Due Date

// Sorting Options
// Due Date

// Priority

// Creation Date

// Last Updated

let filterResults = [...filteredProducts];
  filterResults = handleDiscountFilters(filterResults)
  filterResults = handleSort(filterResults, sortBy)

const [products, setProducts] = useState([]);

useEffect(async () => {
    const response = await axios.get("someUrl");
    setProducts(response.data);
}, []);

const discount = queryParams.get('discount');
const sortBy = queryParams.get('sort');

const shouldFilterProduct = (product) => {
    if (discount) {
        return product.discount > discount;
    } else {
        return false;
    }
};

const sortProduct = (a, b) => {
    switch(sortByValue) {
        case 'new' : return parseISO(b.created_at) - parseISO(a.created_at);
        case 'discount' : return b.discount - a.discount;
        case 'price_desc' : return b.price - a.price;
        case 'price_asc' : return a.price - b.price;
        default : return a.name.localeCompare(b.name);
    }
}

const filteredAndSortedProducts = products
    .filter(filterProduct)
    .sort(sortProduct);

return (
    <div>
        {filteredAndSortedProducts.map(product => {
            return <div>{product.name}</div>;
        })}
    </div>
);