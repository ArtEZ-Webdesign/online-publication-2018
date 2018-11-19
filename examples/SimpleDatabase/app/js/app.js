const container = document.querySelector('.container');

fetch('http://localhost:8080/api/laptops')
	.then(function(response) {
		return response.json();
	}).then(function (laptops) {
		for(let i=0; i<laptops.length; i++) {
			let div = document.createElement('div');
			div.classList.add('laptop');

			container.appendChild(div);

			let make = document.createElement('div');
			make.innerHTML = laptops[i].make;
			div.appendChild(make);

			let model = document.createElement('div');
			model.innerHTML = laptops[i].model;
			div.appendChild(model);
		}
	});
