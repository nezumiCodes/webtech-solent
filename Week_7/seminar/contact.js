let subBtn = document.getElementById("subBtn");
let cName = document.getElementById("cName");
let cEmail = document.getElementsById("cEmail");
let numOwl = document.getElementById("numOwl");
let query = document.getElementById("query");

subBtn.addEventListener("submit", () => {
	//alert("You have successfully submitted the form!");
	if (
		cName.value === "" ||
		cEmail.value === "" ||
		query.value === "" ||
		numOwl.value === ""
	) {
		alert("You haven't filled out the form!");
		if (cName.value === "") cName.style.background = "red";
		if (cEmail.value === "") cEmail.style.background = "red";
		if (numOwl.value === "") numOwl.style.background = "red";
		if (query.value === "") query.style.background = "red";
	} else {
		if (numOwl.value < 1 || numOwl.value > 10)
			alert("Number is not between 1 and 10");
	}
});
