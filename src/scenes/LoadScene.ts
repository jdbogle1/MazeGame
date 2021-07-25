//@ts-ignore
import { cst } from "../cst";

import { main } from "../classes/MainClass"

import { MazeScene } from "./MazeScene";

export class LoadScene extends Phaser.Scene {
  maze: any;
  mazeGroup: Phaser.GameObjects.Group;
  mazeRooms: any
  constructor() {
    super({
      key: cst.scenes.Load
    })
  }
  loadScenes() {
    this.scene.add(cst.scenes.Maze,MazeScene,false);
  }
  loadImages() {
    this.load.setPath("./assets/image/bg");
    for (let prop in cst.image.bg) {
      //@ts-ignore
      this.load.image(cst.image.bg[prop],cst.image.bg[prop]);
    }
    this.load.setPath("./assets/image/ui");
    for (let prop in cst.image.ui) {
      //@ts-ignore
      this.load.image(cst.image.ui[prop],cst.image.ui[prop]);
    }
    this.load.setPath("./assets/image/sprite");
    for (let prop in cst.image.sprite) {
      //@ts-ignore
      this.load.image(cst.image.sprite[prop],cst.image.sprite[prop]);
    } 
  }
  loadAudio() {
    this.load.setPath("./assets/audio/sfx");
    for (let prop in cst.audio.sfx) {
      //@ts-ignore
      this.load.image(cst.audio.sfx[prop],cst.audio.sfx[prop]);
    }
    this.load.setPath("./assets/audio/music");
    for (let prop in cst.audio.music) {
      //@ts-ignore
      this.load.image(cst.audio.music[prop],cst.audio.music[prop]);
    }
  }
  preload() {
    main.centre.x = this.game.scale.width/2;
    main.centre.y = this.game.scale.height/2;
    main.width = this.game.scale.width;
    main.height = this.game.scale.height;
    this.loadImages();
    this.loadScenes();
    this.loadAudio();
    this.load.on("load", (file: Phaser.Loader.File)=>{
      console.log(file.src);
    });
    let loadBar = this.add.graphics({
      fillStyle: {
        color: 0xff0000
      }
    });
    this.load.on("progress",(percent: number)=>{
      loadBar.fillRect(0,this.game.renderer.height/2,this.game.renderer.width*percent,100)
    });
    this.load.on("complete",()=>{
      this.add.text(this.game.scale.width/2,this.game.scale.height/2+50,"Press any button to continue...",{
          color: "#000",
          fontSize: "30px",
          fontStyle: "bold",
          fontFamily: "argos"
      }).setOrigin(0.5,0.5)
      
      this.input.keyboard.on("keyup",()=>{
          this.scene.start(cst.scenes.Maze,{msg:"hello"}); 
      })
  })

  }
  create() {
  }
  update(delta:number) {
  }
}