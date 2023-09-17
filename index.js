const holder = document.querySelector('.carousel')
const gallery = holder.querySelectorAll('.image-holder li')
const tab = document.querySelectorAll('.tabONe')

const montainONe = document.querySelectorAll('.mountains-nav p')
let index;
gallery.forEach((element, i) => {
    element.addEventListener('click', e => {
        index = i;

        gallery.forEach(element => {
            element.classList.remove('active')
        })
        element.classList.add('active')
        console.log(index)



        const dots = document.querySelectorAll('.dots li')
        dots.forEach(element => {
            element.classList.remove('active')
        })
        dots[i].classList.add('active')

    })

})



montainONe.forEach((element, i) => {
    element.addEventListener('click', () => {
        montainONe.forEach(element => {
            element.classList.remove('active')
        })
        element.classList.add('active')

        let next = montainONe[i].closest('#bot').querySelectorAll('.tab-contaner .tabONe')
        const size = next[i].clientWidth;
        let slider = montainONe[i].closest('#bot').querySelector('.tab-contaner')
        next.forEach(element => {
            element.style.transition = ".5s ease-in-out"
            element.style.transform = `translate(${i * - size}px)`
        })

    })
})


function change() {

    let counter = 0;
    const rightControl = document.querySelector('.right-control')
    const leftControl = document.querySelector('.left-control')
    const dots = document.querySelectorAll('.dots li')
    const clickMe = document.querySelector('#click')
    const closeModal = document.querySelector('.mid-modal span i')

    rightControl.addEventListener('click', () => {

        counter++
        let size = gallery[0].clientWidth
        console.log(counter)
        console.log(gallery.length)
        if (counter >= gallery.length) {
            counter = gallery.length - 1;
        }
        gallery.forEach(element => {
            element.style.transition = `0.5s ease-in-out`
            element.style.transform = `translateX(${counter * - size}px)`
            element.classList.remove('active')

        })


        dots.forEach(element => {
            element.classList.remove('active')
        })
        gallery[counter].classList.add('active')

        dots[counter].classList.add('active')



    });


    leftControl.addEventListener('click', () => {
        counter--
        if (counter <= 0) {
            counter = 0;
        }

        let size = gallery[0].clientWidth
        console.log(counter)
        console.log(gallery.length)
        if (counter >= gallery.length) {
            counter = 0;
        }
        gallery.forEach(element => {
            element.style.transition = `0.5s ease-in-out`
            element.style.transform = `translateX(${counter * - size}px)`
            element.classList.remove('active')

        })

        gallery[counter].classList.add('active')

        dots.forEach(element => {
            element.classList.remove('active')
        })
        dots[counter].classList.add('active')

    })

    clickMe.addEventListener('click', () => {
        const parent = clickMe.closest('#mid')
        const modal = parent.querySelector('.mid-modal')
        const imageModal = parent.querySelector('#imageModal')
        const imageInput = parent.querySelector('#imageSrc')
        const imageSrc = parent.querySelectorAll('.image-holder li img')
        imageModal.style.transition = `0.5s ease`
        imageModal.style.transform = `scaleY(1)`
        modal.style.transform = `scaleY(1)`


        imageInput.src = imageSrc[counter].src

    })

    closeModal.addEventListener('click', () => {
        const closeImage = document.querySelector('.mid-modal')

        closeImage.style.transform = `scaleY(0)`
    })



}

change();