import { styles } from "./pimp-my-style.data.js";
let c = 0
export function pimp() {
    let btn = document.querySelector("button")
    if (!btn.classList.contains("unpimp")) {
        if (c < styles.length){
            btn.classList.add(styles[c]) // 14
            c++ //15
        }
        if (c === styles.length) { 
            btn.classList.toggle("unpimp")
        }
    }else{
        if (btn.classList.contains("unpimp")) {
            c--
            btn.classList.remove(styles[c])
        }
        if (c === 0) {
            btn.classList.toggle("unpimp")
        }

    }


}