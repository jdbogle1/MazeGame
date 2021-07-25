/** @type {import("../typings/phaser")} */
import { LoadScene } from "./scenes/LoadScene"

let game = new Phaser.Game({
    scale:{
        width:1280,
        height:720
    },
    scene: [LoadScene]
})