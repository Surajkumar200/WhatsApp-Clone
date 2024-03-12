import Messagec from "../modal/Message.js";
import Conversationc from '../modal/Conversation.js';



export const newMessage = async (request, response) => {
    
    try {
        const newMessage = new Messagec(request.body);

        await newMessage.save();
        
        await Conversationc.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json("Message has been sent successfully");
    } catch (error) {
        return response.status(500).json(error);
    }

}
export const getMessage = async (request, response) => {
    try {
        const messages = await Messagec.find({ conversationId: request.params.id });
        return response.status(200).json(messages);
    } catch (error) {
        return response.status(500).json(error);
    }

}