import { cst } from "../cst"
import { main } from "../classes/MainClass"

export class MazeScene extends Phaser.Scene {
  keyboard: object
  player: Phaser.GameObjects.Sprite
  mazeGroup: Phaser.GameObjects.Group
  mazeRooms: any
  bg: Phaser.GameObjects.Image
  step: boolean
  btnHelp: Phaser.GameObjects.Sprite
  txtHelp: Phaser.GameObjects.Text
  overHelp: Phaser.GameObjects.Rectangle
  btnClose: Phaser.GameObjects.Sprite
  txtClose: Phaser.GameObjects.Text
  txtControl: any[]
  constructor() {
    super({
      key: cst.scenes.Maze
    })
  }
  preload() {
  
  }
  create() {
    //Gemerate Maze
    this.cameras.main.setBackgroundColor(0xaaaaaa)
    main.genMaze(this,main.randInt(4,6),main.randInt(3,4),Math.random()*10000);
    this.mazeGroup = this.add.group()
    for (let i = 0; i < this.maze.length; i++) {
      for (let j = 0; j < this.maze[i].length; j++) {
        this.mazeGroup.add(this.mazeRooms[i][j])
      }
    }
    //Spawn Player
    this.player = this.add.sprite(100,100,cst.image.ui.player)
    this.player.pos = {
      x:0,
      y:0
    }
    if (this.maze[0][0].bottom == true) {
      this.player.facing = "right"
    } else {
      this.player.facing = "bottom"
    }
    //Maze Group
    this.mazeGroup.add(this.player)
    this.mazeGroup.setOrigin(0.5,0.5)
    this.mazeGroup.incXY(main.centre.x-this.maze[0].length*30,main.centre.y-this.maze.length*35)
    
    //Set up backgrounds
    main.genRoom(this,this.mazeRooms,this.player)
    this.bg = this.add.image(0,0,main.genRoom(this,this.mazeRooms,this.player)).setOrigin(0);
    //Controls
    this.input.keyboard.on("keyup-W",()=>{
      if (
        this.player.facing == "bottom"&&
        !this.maze[this.player.pos.y][this.player.pos.x].bottom&&
        this.player.pos.y<this.maze.length
      ) {
        this.player.pos.y++;
      } else if (
        this.player.facing == "left"&&
        !this.maze[this.player.pos.y][this.player.pos.x].left&&
        this.player.pos.x>0
      ) {
        this.player.pos.x--;
      } else if (
        this.player.facing == "right"&&
        !this.maze[this.player.pos.y][this.player.pos.x].right&&
        this.player.pos.x<this.maze[0].length
      ) {
        this.player.pos.x++;
      } else if (
        this.player.facing == "top"&&
        !this.maze[this.player.pos.y][this.player.pos.x].top&&
        this.player.pos.y>0
      ) {
        this.player.pos.y--;
      }
    })
    this.input.keyboard.on("keyup-A",()=>{
      console.log(this.player.facing,this.maze[this.player.pos.y][this.player.pos.x].left,this.player.pos.y)
      if (
        this.player.facing == "bottom"&&
        !this.maze[this.player.pos.y][this.player.pos.x].right&&
        this.player.pos.x<this.maze[0].length
      ) {
        this.player.pos.x++;
        this.player.facing = "right"
      } else if (
        this.player.facing == "left"&&
        !this.maze[this.player.pos.y][this.player.pos.x].bottom&&
        this.player.pos.y<this.maze.length
      ) {
        this.player.pos.y++;
        this.player.facing = "bottom"
      } else if (
        this.player.facing == "right"&&
        !this.maze[this.player.pos.y][this.player.pos.x].top&&
        this.player.pos.x>0
      ) {
        this.player.pos.y--;
        this.player.facing = "top"
      } else if (
        this.player.facing == "top"&&
        !this.maze[this.player.pos.y][this.player.pos.x].left&&
        this.player.pos.x>0
      ) {
        this.player.pos.x--;
        this.player.facing = "left"
      }
    })
    this.input.keyboard.on("keyup-S",()=>{
      if (
        this.player.facing == "bottom"&&
        !this.maze[this.player.pos.y][this.player.pos.x].top&&
        this.player.pos.y>0
      ) {
        this.player.pos.y--;
        this.player.facing = "top"
      } else if (
        this.player.facing == "left"&&
        !this.maze[this.player.pos.y][this.player.pos.x].right&&
        this.player.pos.x<this.maze[0].length
      ) {
        this.player.pos.x++
        this.player.facing="right"
      } else if (
        this.player.facing == "right"&&
        !this.maze[this.player.pos.y][this.player.pos.x].left&&
        this.player.pos.x>0
      ) {
        this.player.pos.x--
        this.player.facing = "left"
      } else if (
        this.player.facing == "top"&&
        !this.maze[this.player.pos.y][this.player.pos.x].bottom&&
        this.player.pos.y<this.maze.length
      ) {
        this.player.pos.y++
        this.player.facing = "bottom"
      }
    })
    this.input.keyboard.on("keyup-D",()=>{
      if (
        this.player.facing == "bottom"&&
        !this.maze[this.player.pos.y][this.player.pos.x].left&&
        this.player.pos.x>0
      ) {
        this.player.pos.x--
        this.player.facing = "left"
      } else if (
        this.player.facing == "left"&&
        !this.maze[this.player.pos.y][this.player.pos.x].top&&
        this.player.pos.y>0
      ) {
        this.player.pos.y--
        this.player.facing = "top"
      } else if (
        this.player.facing == "right"&&
        !this.maze[this.player.pos.y][this.player.pos.x].bottom&&
        this.player.pos.y<this.maze.length
      ) {
        this.player.pos.y++
        this.player.facing = "bottom"
      } else if (
        this.player.facing == "top"&&
        !this.maze[this.player.pos.y][this.player.pos.x].right&&
        this.player.pos.x<this.maze[0].length
      ) {
        this.player.pos.x++
        this.player.facing = "right"
      }
    })
    this.input.keyboard.on("keyup",()=>{
      this.bg = this.add.image(0,0,main.genRoom(this,this.mazeRooms,this.player)).setOrigin(0);
      console.log(this.player.facing,this.maze[this.player.pos.y][this.player.pos.x]);
    })
    this.keyboard = this.input.keyboard.addKeys("TAB");
    //UI
    this.btnHelp = this.add.sprite(main.width-200,main.height-50,cst.image.ui.button).setDepth(5).setInteractive().setScale(1.4);
    this.txtHelp = this.add.text(this.btnHelp.x,this.btnHelp.y,"Help",{
      color: "#ffffff",
      fontFamily: "timesnewroman",
      fontSize: "40px"
    }).setOrigin(0.5).setDepth(5)
    this.btnHelp.on("pointerup", ()=>{
      this.overHelp = this.add.rectangle(50,50,main.width-100,main.height-100,0xaaaaaa,0.6).setDepth(6).setOrigin(0)
      this.btnHelp.setDepth(-1);
      this.txtHelp.setDepth(-1);
      this.btnClose = this.add.sprite(main.width-250,main.height-100,cst.image.ui.button).setDepth(7).setInteractive().setScale(1.4);
      this.txtClose = this.add.text(this.btnClose.x,this.btnClose.y,"Close",{
        color: "#ffffff",
        fontFamily: "timesnewroman",
        fontSize: "40px"
      }).setOrigin(0.5).setDepth(6)
      this.btnClose.setInteractive();
      this.btnClose.on("pointerup",()=>{
        this.btnClose.destroy();
        this.txtClose.destroy();
        this.overHelp.destroy();
        this.btnHelp.setDepth(5);
        this.txtHelp.setDepth(5);
        for (let i = 0; i < this.txtControl.length; i++) {
          this.txtControl[i].destroy();
        }
      })
      this.txtControl = [];
      let txtConfig = {color:"#ffffff",fontFamily:"timesnewroman",fontSize:"20px"};
      this.txtControl[0] = this.add.text(75,75,cst.text.help.control.title,{color:"#ffffff",fontFamily:"timesnewroman",fontSize:"40px"}).setDepth(6);
      this.txtControl[1] = this.add.text(this.txtControl[0].x,this.txtControl[0].y+50,cst.text.help.control[1],txtConfig).setDepth(6);
      for (let i = 2; i < 6; i++) {
        this.txtControl[i] =this.add.text(this.txtControl[i-1].x,this.txtControl[i-1].y+25,cst.text.help.control[i],txtConfig).setDepth(6);
      }
    })
    
  }
  update(delta:number) {
    
    this.player.x = (this.player.pos.x*100)+this.mazeRooms[0][0].x
    this.player.y = (this.player.pos.y*100)+this.mazeRooms[0][0].y
    //@ts-ignore
    if (this.keyboard.TAB.isDown) {
      this.mazeGroup.setDepth(2)
    } else {
      this.mazeGroup.setDepth(-1)
    }
  }
}