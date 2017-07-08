import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('Task', TaskSchema);