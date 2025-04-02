const getJoke = async () => {
    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any")
        const result = await res.json()
        const setup = result.setup
        const delivery = result.delivery
        const joke = result.joke
        if (joke) {
            setup = result.joke
            delivery = ""
        }
        const setupElement = document.getElementById("setup")
        const deliveryElement = document.getElementById("delivery")
        setupElement.innerHTML = setup
        deliveryElement.innerHTML = delivery
    } catch (error) {
        console.log(error);   
    }
}

