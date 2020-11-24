let vector = [5, 7, 9, 2, 4];
function valor5(vector,num) {
        if (num < vector[0]) {
            vector.splice(0,0,num)
        } else if (num > vector[0]) {
            vector.splice(1,1,num)
        }
        console.log(vector);
    }


valor5(vector,3)