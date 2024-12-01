const more = document.querySelector("#more")
const save = document.getElementById("save")
const alart = document.getElementById("alart")
const check = document.querySelectorAll(".check")

//Adding taskbar
more.addEventListener("click", () => {
    document.getElementById("Hello").style.display = "block"
    document.getElementById("Hello").innerHTML = `<div class="flax"><label for="taskbar"> <input type="text" name="taskbar6" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>
<div class="flax"><label for="taskbar"> <input type="text" name="taskbar7" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>`

    more.style.display = "none"
    const more2 = document.getElementById("more2")
    more2.style.display = "block"

    more2.addEventListener("click", () => {
        document.getElementById("Hello2").style.display = "block"
        document.getElementById("Hello2").innerHTML = `<div class="flax"><label for="taskbar"> <input type="text" name="taskbar6" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>
<div class="flax"><label for="taskbar"> <input type="text" name="taskbar7" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>`

        more2.style.display = "none"
        const more3 = document.getElementById("more3")
        more3.style.display = "block"

        more3.addEventListener("click", () => {
            document.getElementById("Hello3").style.display = "block"
            document.getElementById("Hello3").innerHTML = `<div class="flax"><label for="taskbar"> <input type="text" name="taskbar6" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>
<div class="flax"><label for="taskbar"> <input type="text" name="taskbar7" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>`

            more3.style.display = "none"
            const more4 = document.getElementById("more4")
            more4.style.display = "block"


            more4.addEventListener("click", () => {
                document.getElementById("Hello4").style.display = "block"
                document.getElementById("Hello4").innerHTML = `<div class="flax"><label for="taskbar"> <input type="text" name="taskbar6" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>
<div class="flax"><label for="taskbar"> <input type="text" name="taskbar7" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>`


                more4.style.display = "none"
                const more5 = document.getElementById("more5")
                more5.style.display = "block"


                more5.addEventListener("click", () => {
                    document.getElementById("Hello5").style.display = "block"
                    document.getElementById("Hello5").innerHTML = `<div class="flax"><label for="taskbar"> <input type="text" name="taskbar6" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>
<div class="flax"><label for="taskbar"> <input type="text" name="taskbar7" class="taskbar">
</label> <input type="checkbox" class="check"><p id="completed">completed</p></div>`

                    more5.style.display = "none"

                })

            })
        })
    })
})

check.forEach((e) => {
    e.addEventListener("click", () => {
        e.style.display = "none"
        document.getElementById("completed").style.display = "flex"
    })
})


const saveNow = async () => {
    //save all task as pdf
    save.addEventListener("click", () => {
        alart.style.display = 'none'
        window.print();
    })
}

saveNow()