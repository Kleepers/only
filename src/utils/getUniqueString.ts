import randomstring from 'randomstring';

export const getUniqueString = () => {
    return randomstring.generate({
        length: 12,
        charset: 'alphabetic'
    });
}