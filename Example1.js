class Example1 extends Phaser.Scene{
      constructor (){
          super({key:"Example1"});
      }

      preload(){
        this.load.image('bg','Assets/background.jpg');
        this.load.image('test','Assets/test.png');

      }

      create(){
        this.background = this.add.image(400,300,'bg')
        var test = this.physics.add.image(400,275,'test');

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        test.setVelocity(200, 300);
        test.setBounce(1, 1);
        test.setCollideWorldBounds(true);

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
