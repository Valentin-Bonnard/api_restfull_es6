import mongoose from 'mongoose';
import { encrypt } from './utils/encryptModule';
import { compare } from './utils/encryptModule';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    };

    encrypt(password).then((hash, err) => {
        if(err) return console.log(err);

        user.password = hash;
        next();
    })

});

UserSchema.methods.comparePassword = function (toCompare, done) {
  compare(this.password, toCompare, (err, isMatch) => {
    if (err) done(err);
    else done(err, isMatch);
  });
};

export default mongoose.model('User', UserSchema);