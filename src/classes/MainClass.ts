import { LoadScene } from "../scenes/LoadScene";
import { cst } from "../cst"
import { MazeScene } from "../scenes/MazeScene";

class MainClass {
  centre: { x: number; y: number; };
  width: number;
  height: number;
  constructor() {
    this.centre = {
      x: 0,
      y: 0
    };
    this.width = 0;
    this.height = 0;

  }
  randInt(min:number,max:number) {
    console.log(Math.floor((Math.random()*max)+min))
    return Math.floor((Math.random()*(max-min))+min)
  }
  genMaze(scene:LoadScene|MazeScene,width:number,height:number,seed:number) {
    //@ts-ignore
    const generator = require("generate-maze");
    scene.maze = generator(width,height,true,seed);
    console.log(scene.maze);
    scene.mazeRooms = [];
    for (let i = 0; i < scene.maze.length; i++) {
      scene.mazeRooms[i] = [];
      for (let j = 0; j < scene.maze[i].length; j++) {
        let room = scene.maze[i][j];
        if (!room.top) {
          if (!room.left) {
            if (!room.right) {
              if (!room.bottom) {
                scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.cross);
              } else {
                scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.teeT);
              }
            } else if (!room.bottom) {
              scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.teeL);
            } else {
              scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.turnTL);
            }
          } else if (!room.right) {
            if (!room.bottom) {
              scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.teeR);
            } else {
              scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.turnTR);
            }
          } else if (!room.bottom) {
            scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.straightV);
          } else {
            scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.endT);
          }
        } else if (!room.left) {
          if (!room.right) {
            if (!room.bottom) {
              scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.teeB);
            } else {
              scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.straightH);
            }
          } else if (!room.bottom) {
            scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.turnBL);
          } else {
            scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.endL);
          }
        } else if (!room.right) {
          if (!room.bottom) {
            scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.turnBR);
          } else {
            scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.endR);
          }
        } else if (!room.bottom) {
          scene.mazeRooms[i][j] = scene.add.image(j*100,i*100,cst.image.ui.endB);
        }
      }
    }
  }
  genRoom(scene:MazeScene,maze:any,player:Phaser.GameObjects.Sprite) {
    let room:Phaser.GameObjects.Sprite = maze[player.pos.y][player.pos.x]
    if (
      (room.texture.key == cst.image.ui.endB && player.facing == "bottom")||
      (room.texture.key == cst.image.ui.endL && player.facing == "left")||
      (room.texture.key == cst.image.ui.endR && player.facing == "right")||
      (room.texture.key == cst.image.ui.endT && player.facing == "top")||
      (room.texture.key == cst.image.ui.straightH && (player.facing == "right" || player.facing == "left"))||
      (room.texture.key == cst.image.ui.straightV && (player.facing == "top" || player.facing == "bottom"))) {
        return cst.image.bg.straight
    } else if (
      (room.texture.key == cst.image.ui.endB && player.facing != "bottom")||
      (room.texture.key == cst.image.ui.endL && player.facing != "left")||
      (room.texture.key == cst.image.ui.endR && player.facing != "right")||
      (room.texture.key == cst.image.ui.endT && player.facing != "top")
    ) {
        return cst.image.bg.end
    } else if (room.texture.key == cst.image.ui.cross) {
      return cst.image.bg.cross
    } else if (
      (room.texture.key == cst.image.ui.turnBL && player.facing == "top")||
      (room.texture.key == cst.image.ui.turnTR && player.facing == "bottom")||
      (room.texture.key == cst.image.ui.turnBL && player.facing == "left")||
      (room.texture.key == cst.image.ui.turnTR && player.facing == "right")||
      (room.texture.key == cst.image.ui.turnTL && player.facing == "right")||
      (room.texture.key == cst.image.ui.turnBR && player.facing == "right")||
      (room.texture.key == cst.image.ui.turnBR && player.facing == "left")||
      (room.texture.key == cst.image.ui.turnTL && player.facing == "right")
      
    ) {
      return cst.image.bg.lturn
    } else if (
      (room.texture.key == cst.image.ui.turnTL && player.facing == "bottom")||
      (room.texture.key == cst.image.ui.turnBR && player.facing == "top")||
      (room.texture.key == cst.image.ui.turnTL && player.facing == "right")||
      (room.texture.key == cst.image.ui.turnBR && player.facing == "left")||
      (room.texture.key == cst.image.ui.turnTR && player.facing == "left")||
      (room.texture.key == cst.image.ui.turnBL && player.facing == "right")
    ) {
      return cst.image.bg.rturn
    } else if (
      (room.texture.key == cst.image.ui.teeB && player.facing == "top")||
      (room.texture.key == cst.image.ui.teeL && player.facing == "right")||
      (room.texture.key == cst.image.ui.teeR && player.facing == "left")||
      (room.texture.key == cst.image.ui.teeT && player.facing == "bottom")
    ) {
      return cst.image.bg.tee
    } else if (
      (room.texture.key == cst.image.ui.teeB && player.facing == "left")||
      (room.texture.key == cst.image.ui.teeL && player.facing == "top")||
      (room.texture.key == cst.image.ui.teeT && player.facing == "right")||
      (room.texture.key == cst.image.ui.teeR && player.facing == "bottom")||
      (room.texture.key == cst.image.ui.turnBR && player.facing=="bottom")
    ) {
      return cst.image.bg.tleft
    } else if (
      (room.texture.key == cst.image.ui.teeB && player.facing == "right")||
      (room.texture.key == cst.image.ui.teeL && player.facing == "bottom")||
      (room.texture.key == cst.image.ui.teeT && player.facing == "left")||
      (room.texture.key == cst.image.ui.teeR && player.facing == "top")
    ) {
      return cst.image.bg.tright
    }
  }
}
export var main = new MainClass()