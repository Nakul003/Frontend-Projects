const bars = document.querySelectorAll(".bar");

window.addEventListener("load", () => {

    fetch("./assets/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
        
            return response.json();
        })
        .then(data => {
            setTimeout(() => {
                bars.forEach((element, index) => {
                    element.style.height = `${data[index].amount * 0.179}rem`;
                    element.style.transition = "height 0.5s ease-out";
                });
            }, 0);

        })

        .catch(error => console.error('Error loading data:', error));
})