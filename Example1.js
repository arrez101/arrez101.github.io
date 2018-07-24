class Example1 extends Phaser.Scene{
      constructor (){
          super({key:"Example1"});
      }

      preload(){
        this.load.image('bg','Assets/background.jpg');
        this.load.image('haram','Assets/haram.png');

      }

      create(){
        this.background = this.add.image(400,300,'bg')
        var haram = this.physics.add.image(600,500,'haram');

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        haram.setVelocity(200, 300);
        haram.setBounce(1, 1);
        haram.setCollideWorldBounds(true);

        }


/*         update(delta){
            if(this.key_A.isDown){
                this.image.x--;
        }
            if(this.key_S.isDown){
                this.image.y++;
        }
            if(this.key_D.isDown){
                this.image.x++;
        }
            if(this.key_W.isDown){
                this.image.y--;
        }
      }  */



    }
