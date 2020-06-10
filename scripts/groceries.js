// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fav",
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "pastry",
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		price: 10.00
	},
	{
		name: "Celery",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fav",
		price: 2.99
	},
	{
		name: "Ham",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		price: 7.97
	},
	{
		name: "Frozen Pizza",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "frozenfood",
		price: 4.99
	},
	{
		name: "Lettuce (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fav",
		price: 1.98
	},
	{
		name: "Cheddar Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "diary",
		price: 6.99
	},
	{
		name: "Milk (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "diary",
		price: 6.49
	},
	{
		name: "Carrots (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fav",
		price: 1.49
	}	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictionVeg, restrictionGlu, restrictionOrg) {
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if((restrictionVeg && restrictionGlu && restrictionOrg) && (prods[i].vegetarian && prods[i].glutenFree && prods[i].organic)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if((restrictionVeg && restrictionGlu && !restrictionOrg) && (prods[i].vegetarian && prods[i].glutenFree)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if((restrictionVeg && !restrictionGlu && restrictionOrg) && (prods[i].vegetarian && prods[i].organic)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if((!restrictionVeg && !restrictionGlu && restrictionOrg) && (prods[i].glutenFree && prods[i].organic)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if ((restrictionVeg && !restrictionGlu && !restrictionOrg ) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if ((restrictionGlu && !restrictionVeg && !restrictionOrg) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if ((!restrictionGlu && !restrictionVeg && restrictionOrg) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
		}
		else if(!restrictionVeg && !restrictionGlu && !restrictionOrg){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
			product_names.push(prods[i].category);
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
