' use strict';
//jshint esversion:6

const firstRow = `мама мыла раму`;
const secondRow = `собака друг человека`;

const getRow = (firstRow, secondRow) => {
    let strLenght1 = 0,
        strLenght2 = 0;

    for( let i = 0; i < firstRow.length; i++){
        if(firstRow.charAt(i) == 'а'){
            strLenght1++;
        }
    }

    for( let i = 0; i < secondRow.length; i++){
        if(secondRow.charAt(i) == 'а'){
            strLenght2++;
        }
    }
    if(strLenght1 > strLenght2){
        console.log(firstRow);
    } else{
        console.log(secondRow);
    }
};

getRow(firstRow, secondRow);