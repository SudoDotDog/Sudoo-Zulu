/**
 * @author WMXPY
 * @namespace Zulu
 * @description NATO
 */

export const NATOPhoneticAlphabetMap = {

    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliet',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu',
};

export const getNATOPhoneticAlphabet = (
    character: keyof typeof NATOPhoneticAlphabetMap,
): string => {

    return NATOPhoneticAlphabetMap[character];
};
