// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "Celeri",
		vegetarian: true,
		glutenFree: true,
		price: 2.99
	},
	{
		name: "Ham",
		vegetarian: false,
		glutenFree: true,
		price: 7.97
	},
	{
		name: "Frozen Pizza",
		vegetarian: false,
		glutenFree: false,
		price: 4.99
	},
	{
		name: "Lettuce",
		vegetarian: true,
		glutenFree: true,
		price: 1.98
	},
	{
		name: "Cheddar Cheese",
		vegetarian: true,
		glutenFree: true,
		price: 6.99
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		price: 6.49
	},
	{
		name: "Carrots",
		vegetarian: true,
		glutenFree: true,
		price: 1.49
	}	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictionVeg, restrictionGlu) {
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if((restrictionVeg && restrictionGlu) && (prods[i].vegetarian && prods[i].glutenFree)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restrictionVeg && !restrictionGlu) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restrictionGlu && !restrictionVeg) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if(!restrictionVeg && !restrictionGlu){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		totalPrice += parseFloat(chosenProducts[i]);
	}
	return totalPrice.toFixed(2);
}
