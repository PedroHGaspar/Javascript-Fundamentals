const somar = (val1, val2) => {
    return val1 + val2;
}

const functionSomar = new Function
(
    'val1', 'val2', 'return val1 + val2'
);