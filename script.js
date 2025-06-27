const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;
	  priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);});
	const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
	totalCell.textContent = `Total Price: ${totalPrice}`; 
	 newRow.appendChild(totalCell);
    document.querySelector('table').appendChild(newRow); // Append to the table
	
};

getSumBtn.addEventListener("click", getSum);

