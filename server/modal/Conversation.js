import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true
    }
);

const conversationc = mongoose.model('Conversationc', ConversationSchema);

export default conversationc;