import {model, Schema} from "mongoose";

const userSchema = Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        pass: {
            type: String,
            required: true,
        },
        cPass: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            default: null,
        },

    }, {timestamps: true}
)

const user = model("user", userSchema);
export default user;

