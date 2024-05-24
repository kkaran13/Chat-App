import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        // getting message from input
        const { message } = req.body;

        // receiving receiver ID from params
        const { id: receiverId } = req.params;

        // sender id coming from user's request id
        const senderId = req.user._id;

        // Checking conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        // if conversation doesn't exist create one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Craete a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // push this message in messages array
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // saving message to DB [sysnc]
        // await conversation.save();
        // await newMessage.save();

        // this will in prallel to save message in DB [async]
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO Functionality

        // send it as rensponse
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        })
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // Not reference but actual messages

        if (!conversation) return res.status(200).json([]);

        res.status(200).json(messages);
    }
    catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}