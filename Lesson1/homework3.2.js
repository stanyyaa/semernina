function drawTriangle(height, symbol) {
    let tree = symbol;
    for (let i = 0; i < height; i++) {
        console.log (" " .repeat(height--) +tree);
        tree += symbol +symbol;
    }
}
drawTriangle(10, '*')