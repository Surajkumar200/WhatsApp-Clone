import Userc from "../modal/User.js";

export const addUser = async (request, response) => {
    try {
       const exist = await Userc.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new Userc(request.body);
        await newUser.save();
       return response.status(200).json(newUser);
    } catch (error) {
        return  response.status(500).json(error);
    }
}

export const getUser = async (request, response) => {
    try {
        const user = await Userc.find({});
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
}
