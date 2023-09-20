function volume_sphere() {
    //Write your code here
	const but=document.getElementById("submit");
	
	but.addEventListener("click",(event) =>{
		event.preventDefault();
		const radiusInput = document.getElementById("radius");
        const resultElement = document.getElementById("volume");

            // Get the value of the radius input and convert it to a float
            const radius = parseFloat(radiusInput.value);

            if (!isNaN(radius) && radius >= 0) {
                // Calculate the volume of the sphere
                const volume = (4/3) * Math.PI * Math.pow(radius, 3);
                resultElement.value = `${volume.toFixed(2)}`;
            } else {
                resultElement.textContent = "Invalid input. Please enter a valid non-negative number.";
            }

	})
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
