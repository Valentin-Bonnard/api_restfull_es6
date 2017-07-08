import bcrypt from 'bcrypt';
import crypto from 'crypto';

const _hashFucntion = (_password) => crypto.createHash('sha384')
    .update(_password)
    .digest()
    .toString('base64');

export function encrypt(_password) {
    const password = _hashFucntion(_password);
    return bcrypt.hash(password, 12);
};

export function compare(_password, _hash) {
    const password = _hashFucntion(_password);
    return bcrypt.compare(password, _hash);
}




/**
 * When using bcrypt.hash, you also should be using bcrypt.compare rather than rehashing and checking string equality.
 */
