/**
 * Created by mariepelletier on 2016-06-07.
 */
var computerController = {
    generateRandom:function(){
        var random=Math.floor((Math.random() * 4) + 1);
        this.pushTurn(random)
    },
    pushTurn: function(move){
        model.compMoves.push(move)
    },
    makeMove:function(){
        this.generateRandom()
    },
    showMoves:function(array){
        for (var i=0;i<array.length;i++){
            setTimeout(function(){view.displayMoves(array[i])},600);
        }
    }

}
var goodMove = false;

var userController = {
    checkMove: function(){
        var computer = model.compMoves.join('');
        var user = model.userMoves.join('');
        console.log(computer);
        console.log(user);
        if(computer == user){
            goodMove = true;
            this.incrementCounter();
            computerController.makeMove();
        } else {
            if(model.difficulty==='easy'){
                view.displayMessage("Oops! Try again!");
                model.userMoves.pop();
                view.displayMoves(model.compMoves);
            } else {
                view.displayMessage("Wrong! GAME OVER");
                model.init();
            }
        }
    },
    pushTurn: function(move){
        model.userMoves.push(move);
        this.checkMove();
    },
    incrementCounter: function(){
        model.counter++;
        view.displayCounter(model.counter);
    }

}

computerController.showMoves([1,2,3,4])