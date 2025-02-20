/*
desc: How to keep the original array using slice()
goal:
line-code-added: 22
*/

const products = [
	{id: 1, name: 'product a', price: 9.99, category: 'books'},
	{id: 2, name: 'product b', price: 19.99, category: 'electronics'},
	{id: 3, name: 'product c', price: 29.99, category: 'electronics'},
	{id: 4, name: 'product d', price: 4.99, category: 'books'},
	{id: 5, name: 'product d'},
	{id: 6, name: 'product e'},
];

console.log(products);

function filterproductsbycategory(productsdata, category){
	return productsdata.filter(product => product.category === category);
}
function sortproductbyprice(productsdata){
	return productsdata.slice().sort((a, b) => a.price - b.price);
}
function increasepricebypercentage(productsdata, percentage){
	return productsdata.map(product => ({ ...product, price: product.price * (1 + percentage / 100),}));
}

const electronicsproducts = filterproductsbycategory(products, 'electronics');
const sortproducts = sortproductbyprice(products);
const increasedpriceproducts = increasepricebypercentage(products, 10);

//console.log(electronicsproducts);
console.log(sortproducts);
//console.log(increasedpriceproducts);

console.log(products);
