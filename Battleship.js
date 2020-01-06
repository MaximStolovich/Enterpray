function createSeaBattle() {
    let battleField = [];
    let shipPositioning, fieldMake, addCell, makeTurn;
    
    addCell = function (xCoordinate, yCoordinate){
        battleField.push( {
            occupied: undefined,
            coordinate: {
                x: xCoordinate,
                y: yCoordinate    
            }
        })  
    }

    fieldMake = function (xLength, yLength) {
        for (let i = 0; i < xLength; i++){
            for (let j = 0; j < yLength; j++){
                addCell(i, j);                
            }
        }  
    }

    placeShip = function (ship){
            //choose direction randomly and start to check fields
        let randDirectionMake = functionMath.floor(Math.random() * 2) + 1;
        let RandomCell = battleField[Math.floor(Math.random() * battleField.length)];
        for (let i = 0; i < ship.length; i++){
            if(i !== ship.length - 1 && cell.x === battleField.xLength - 1)
        } 
    }
    fieldMake(5, 5);
    console.log(battleField);
};

createSeaBattle();
console.log('$$$$$$$$$$$$$$');

    

    /*
    shipPositioning = function (ships){
        for (let ship of arguments) {
            for (let i = 0; i < ship.value, i++;) {

            }
        }
    } 
    

}





{
            occupied: undefined,
            coordinate: {
                x: xCoordinate,
                y: yCoordinate    
            }
    */
    





const warShips = [
    Battleship = {
        id: 'BS',
        length: 4,
        occupiedFields: [],
        hits: 0,
        sunk: false
    }, 
    'Cruiser','Destroyer', 'PatrolBoat']; 



    WarShip = {
        size: undefined,
        name: 'gloomy',
        position: []
    }
