console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if(count < 0){
        for(let i = 0; i <= count * -1; i++){
            if(i % 2 != 0){
                console.log(i * -1);
            }
        }
    }else{
        for(let i = 0; i <= count; i++){
            if(i % 2 != 0){
                console.log(i);
            }
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = `user name`, age = 0){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if(age >= 16){
        console.log(aboveSixteen);
    }else{
        console.log(belowSixteen);
    }
}
// Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");
function whichQuadrant(x, y){
    if(x == 0 && y == 0){
        console.log(`(${x}, ${y}) is on the x axis and the y axis.`);
    }else if(x == 0){
        console.log(`(${x}, ${y}) is on the x axis.`);
    }else if(y == 0){
        console.log(`(${x}, ${y}) is on the y axis.`);
    }else if(x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in quadrant 1.`);
    }else if(x < 0 && y > 0){
        console.log(`(${x}, ${y}) is in quadrant 2.`);
    }else if(x < 0 && y < 0){
        console.log(`(${x}, ${y}) is in quadrant 3.`);
    }else{
        console.log(`(${x}, ${y}) is in quadrant 4.`);
    }
}
// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");
function triangleType(side1, side2, side3){
    if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
        console.log('This is an invalid triangle.');
    }else if(side1 == side2 && side1 == side3){
        console.log('This is an equilateral triangle.');
    }else if(side1 == side2 || side1 == side3 || side2 == side3){
        console.log('This is an isosceles triangle.');
    }else if(side1 != side2 && side1 != side3 && side2 != side3){
        console.log('This is an scalene triangle.');
    }
}
// Exercise 5 Section
console.log("EXERCISE 2:\n==========\n");
function dataPlanSheets(planLimit, day, usage){
    let startDailyAvg = planLimit / 30;
    let isOver = usage > day * startDailyAvg;
    let isUnder = usage < day * startDailyAvg;
    let isAvg = usage == day * startDailyAvg;
    let dataLeft = planLimit - usage;
    let newDailyAverage = dataLeft / (30 - day);
    currentDailyAverage = usage / day;
    let outOfData = usage >= planLimit;
    console.log(`${day} days used, ${30 - day} days remaining`);
    console.log(`Average daily use: ${usage / day} GB/day`);
    if(isOver){
        console.log(`You are EXEEDING your average daily use (${startDailyAvg} GB/day)`);
        console.log(`Continue this high usage, you'll exceed your data plan by ${currentDailyAverage * 30 - planLimit} GB`);
        console.log(`To stay below your data plan, use no more than ${newDailyAverage} GB/day`);
    }else if(isUnder){
        console.log(`You are under your average daily use (${startDailyAvg} GB/day)`);
        console.log(`At this rate at the end of the month you will have ${planLimit - currentDailyAverage * 30} GB left.`);
        console.log(`To stay below your data plan, use no more than ${newDailyAverage} GB/day`);
    }else if(isAvg){
        console.log(`You are right on average for your daily use of ${startDailyAvg} GB/day`);
        console.log(`To stay below your data plan, use no more than ${newDailyAverage} GB/day`);
    }else if(outOfData){
        console.log(`You are out of data.`);
    }


}