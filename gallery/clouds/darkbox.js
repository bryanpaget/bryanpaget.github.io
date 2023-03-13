let darkBoxVisible = false;

window.addEventListener('load', (event) => {
	let images = document.querySelectorAll("img");
	if(images !== null && images !== undefined && images.length > 0) {
		images.forEach(function(img) {
			img.addEventListener('click', (evt) => {
				showDarkbox(img.src);
			});
		});
	}
});

function showDarkbox(url) {

	if(!darkBoxVisible) {
		var div = document.createElement("div");
		div.id = "darkbox";
		div.innerHTML = '<img class="darkboximg" src="'+url+'" />';
        document.body.appendChild(div);

		let box = document.getElementById("darkbox");
		box.style.height = '100%';
        box.style.width = '100%';
		box.addEventListener('click', (event) => {
			let element = document.getElementById("darkbox");
			element.parentNode.removeChild(element);
			darkBoxVisible = false;
		})
		darkBoxVisible = true;
	} else {

		let element = document.getElementById("darkbox");
		element.parentNode.removeChild(element);
		darkBoxVisible = false;
	}
}
