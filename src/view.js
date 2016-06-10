/**
 * Created by mariepelletier on 2016-06-07.
 */
var view = {
    difficulty:'easy',
    goal:'twenty',
    displayMessage: function(message){
        $('.result').html(message);
    },
    init: function(){
        this.displayMessage("Let's Play!");
        this.settings();
    },
    displayMoves:function(item){
                switch (item) {
                    case 1:
                        //audio1.play();
                        $('.blue').css('background-color', 'skyblue')
                        setTimeout(function() {
                            $('.blue').css('background-color', 'blue')
                        }, 500)
                        break;
                    case 2:
                        //audio2.play();
                        $('.red').css('background-color', 'pink')
                        setTimeout(function() {
                            $('.red').css('background-color', 'red')
                        }, 500)
                        break;
                    case 3:
                        //audio3.play();
                        $('.yellow').css('background-color', '#FAFAD2')
                        setTimeout(function() {
                            $('.yellow').css('background-color', 'yellow')
                        }, 500)
                        break;
                    case 4:
                        //audio4.play();
                        $('.green').css('background-color', 'lawngreen')
                        setTimeout(function() {
                            $('.green').css('background-color', 'green')
                        }, 500)
                        break;
                }
    },
    //listen to setting radio buttons
    settings: function(){
        if ($('#easy').checked==true){
            this.difficulty = 'easy';
        }
        if ($('#strict').checked==true){
            this.difficulty = 'strict';
        }
        if ($('#20').checked==true){
            this.goal = "twenty"
        }
        if ($('#infinite').checked==true){
            this.goal = "infinite"
        }

    },
    //listen to user clicks
    buttonListener: function(){

    }
}

view.init();
