/* https://en.wikipedia.org/wiki/NAND_logic#NAND
*/

function NAND(x, y) {
  // If there is no x and y, return 1, otherwise, 0.
	return !(x && y) ? 1 : 0;
}

function NOT(n) {
	return NAND(n, n);
}

function AND(x, y) {
  return NOT(NAND(x, y));
}

function OR(x, y) {
  return NAND(NAND(x, x), NAND(y, y));
}

function XOR(x, y) {
    return NAND(NAND(x, NAND(x, y)), NAND(y, NAND(x, y)));
}