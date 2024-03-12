
import Conversationc  from "../modal/Conversation.js";

export const newConversation = async (request, response) => {

    try {
        const senderId = request.body.senderId;
        const  receiverId = request.body.receiverId;

        const exist =  await Conversationc.findOne({  members : { $all : [receiverId,senderId]}});
        if(exist) {
            response.status(200).json('conversation already exists');
            return;
        }
        const newConversation = new Conversationc({
            members: [senderId, receiverId]
        });

      await newConversation.save();
       return  response.status(200).json('conversation saved succsesfully');
    } catch (error) {
      return  response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const  receiverId = request.body.receiverId;

        const conversation = await Conversationc.findOne({ members: { $all : [receiverId,senderId]}});
      return   response.status(200).json(conversation);
    } catch (error) {
       return response.status(500).json(error.message);
    }

}