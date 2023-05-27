window.addEventListener("DOMContentLoaded", () => {
    let products = document.querySelectorAll(".product"),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector(".open");

    function createCard() {
        let cartMother = document.createElement("div"),
            cart = document.createElement("div"),
            cardField = document.createElement("div"),
            cardHeading = document.createElement("div"),
            closeBtn = document.createElement("button");

        cartMother.classList.add('cardMother')
        cart.classList.add("cart")
        cardField.classList.add("cardField")
        cardHeading.classList.add("cardHeading")
        closeBtn.classList.add("closeBtn")

        document.body.appendChild(cartMother)

        let copy = document.body.querySelector(".cardMother").appendChild(cart)
        copy.appendChild(cardField)
        copy.appendChild(cardHeading)
        copy.appendChild(closeBtn)

        let h1 = document.createElement("h1")
        h1.textContent = "Korzinamzing ichi..."
        closeBtn.textContent = "Yopish"
        cardField.append(h1)
    }

    createCard()

    let cart = document.querySelector(".cardMother"),
        closeBtn = document.querySelector(".closeBtn"),
        cardHeading = document.querySelector(".cardHeading");

    openBtn.addEventListener("click", () => {
        cart.style.display = "block"
    })

    closeBtn.addEventListener("click", () => {
        cart.style.display = "none"
    })


    buttons.forEach((item, idx) => {
        item.addEventListener("click", () => {
            let cloneItem = products[idx].cloneNode(true)
            products[idx].remove()
            btn = cloneItem.querySelector("button")
            btn.remove()
            cardHeading.appendChild(cloneItem)
        })
    })


    let loader = document.querySelector(".loader")
    setTimeout(() => {
        loader.style.opacity = 0
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
})

