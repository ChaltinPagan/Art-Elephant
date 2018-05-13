const alphabet = () => {
    let a = 65; // ASCII value for uppercase A.
    let z = 90; // ASCII value for uppercase Z.

    // The number 35 is the ASCII value for '#'.
    let lettersArray = [35];

    for (let i = a; i <= z; i++) {
        lettersArray.push(i);
    }

    return lettersArray;
};

export default {
    alphabet
}