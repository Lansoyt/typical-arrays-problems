exports.min = function min(array) {
    if (Array.isArray(array) && array.length !== 0) {
        let number = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < number) {
                number = array[i];
            }
        }
        return number;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length !== 0) {
        let number = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > number) {
                number = array[i];
            }
        }
        return number;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length !== 0) {
        let items = 0;
        let sum = 0;
        let average;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
            items++;
        }
        average = sum / items;
        return average;
    } else {
        return 0;
    }
};
