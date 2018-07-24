       var config = {
            type: Phaser.AUTO,
            width: 1200 ,
            height: 700,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: [ Example1 ]
        };
    
        var game = new Phaser.Game(config);
    
