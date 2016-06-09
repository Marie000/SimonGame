/**
 * Created by mariepelletier on 2016-06-07.
 */
describe('test',function(){
    it('should pass this test',function(){
        expect(1+1).toBe(2);
    })

})

describe('computer turn',function(){
    afterEach(function(){
        model.compMoves = [];
    })
    it('should add one move to the CompMove array',function(){
        computerController.pushTurn('test')
        expect(model.compMoves[0]).toBeDefined();
        expect(model.compMoves.length).toBe(1);
    })
    it('should generate a random move',function(){
        computerController.generateRandom();
        expect(model.compMoves[0]).toBeDefined()
    })
    //TODO
})

describe('user turn',function(){
    //TODO
    afterEach(function(){
        model.compMoves = [];
        model.userMoves = [];
    })
    it('should add one move to userMoves array',function() {
        userController.pushTurn('test')
        expect(model.userMoves[0]).toBeDefined();
        expect(model.userMoves.length).toBe(1);
    });

    it('if user makes same move(s) as computer, the game continues',function(){
        computerController.pushTurn('test');
        userController.pushTurn('test');
        expect(goodMove).toBe(true);
    });
    
    it('should increment the counter if user chose right move',function(){
        model.counter=0;
        computerController.pushTurn('test');
        userController.pushTurn('test');
        expect(model.counter).toBe(1);
    });

    it('should trigger computerTurn if the game continues',function(){
        model.counter=0;
        computerController.makeMove();
        userController.pushTurn(model.compMoves[0]);
        userController.pushTurn(model.compMoves[1]);
        expect(model.counter).toBe(2);
        expect(model.userMoves[1]).toBeDefined();
    });
    it('should give another chance if user chose wrong button and playing in easy mode',function(){
        model.setDifficulty('easy');
        computerController.makeMove();
        userController.pushTurn(5);
        expect(goodMove).toBe(false);
        expect(model.compMoves[0]).toBeDefined();
    });


    it('should end the game if user chose wrong button and playing in strict mode',function(){
        model.setDifficulty('strict');
        computerController.makeMove();
        userController.pushTurn(5);
        expect(goodMove).toBe(false);
        expect(view.message).toBe("Wrong! GAME OVER");
        expect(model.compMoves[0]).not.toBeDefined();
        expect(model.userMoves[0]).not.toBeDefined();
    });

});



