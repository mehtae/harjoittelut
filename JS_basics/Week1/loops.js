/*for (i = 1; i <= 5; i++ ){
    console.log(i);
}
    console.log('Counting completed!'); */

/*for (i = 5; i >= 1; i-- ){
    console.log(i);
}
    console.log('Countdown finished!');*/

    //var num = 1;

/*  while (num <= 5){
        console.log(num);
        num = num + 1;
    }
    console.log('Counting completed!'); */

/*   var num = 5;

    while (num >= 1){
        console.log(num);
        num = num - 1;
    }
    console.log('Countdown completed!'); */

/*    var num = 2018;

    while (num <= 2022){
        console.log(num);
        num++;
    }
    console.log('Count completed!'); */

    /*for (i = 1; i <= 10; i++){
        if (i == 1){
            console.log('Gold medal');
        } else if (i == 2){
            console.log('Silver medal');
        } else if (i == 3){
            console.log('Bronze medal');
        } else
            console.log(i);
    } */

    var i = 1;

    while (i <= 10) {
        switch (i) {
            case 1: 
                console.log('Gold Medal');
                i++;
            break;
            case 2:
                console.log('Silver medal');
                i++;
            break;
            case 3:
                console.log('Bronze medal');
                i++;
            break;
            default:
                console.log(i);
                i++;
        }
    }

