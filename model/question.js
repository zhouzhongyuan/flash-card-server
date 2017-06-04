import restful from 'node-restful';
const mongoose = restful.mongoose;

// import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
        title: String,
        detail: String,
        answer: String,
        chip: Array,
    },
    {
        toJSON: {
            virtuals: true,
        },
    });
const Question = mongoose.model('Question', questionSchema);
export default Question;
export {
    questionSchema,
    Question,
};
