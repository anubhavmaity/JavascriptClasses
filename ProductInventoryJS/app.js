(function(){
	
	function Product(price, id, quantity) {
		this.price = price;
		this.id = id;
		this.quantity = quantity;
	}

	Product.prototype.increase = function(){
		this.quantity += 1;
	};

	Product.prototype.decrease = function(){
		this.quantity -= 1;
	};

	Product.prototype.getId = function(){
		return this.id;
	};

	Product.prototype.setPrice = function(price) {
		this.price = price;
	};

	Product.prototype.getPrice = function(){
		return this.price;
	};

	Product.prototype.getQuantity = function(){
		return this.quantity;
	};

	function Inventory() {
		this.products = [].slice.call(arguments);
	}

	Inventory.prototype.add = function(item) {
		this.products.push(item);
	};

	Inventory.prototype.remove = function(item) {
		var index = this.products.indexOf(item);

        if (index > -1) {
            this.products.splice(index, 1);
        }
	};

	Inventory.prototype.getTotalPrice = function() {

		var sum = 0;
		for (var i=0; i< this.products.length ; i++) {
			sum += this.products[i].getPrice() * this.products[i].getQuantity();
		}
		return sum;
	};

	var apples = new Product(25, 1, 10);
	var mangoes = new Product(50, 2, 5);
	var grapes = new Product(100, 3, 7);
	grapes.increase();
	apples.setPrice(75);

	var inventory = new Inventory(apples, mangoes, grapes);
	var bananas = new Product(10, 4, 8);
	var kiwi = new Product(500, 5, 100);
	inventory.add(bananas);
	inventory.remove(mangoes);

	return inventory.getTotalPrice();


}());