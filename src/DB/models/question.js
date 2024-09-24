import mongoose from "mongoose";

// Create a schema for the questions
// suitable for the following json object:
// "feature": "light_years_from_earth",
//             "questions": [
//                 {
//                     "text": "How do you feel about exploring distant places?",
//                     "options": [
//                         {
//                             "label": "Nearby",
//                             "value": "Nearby"
//                         },
//                         {
//                             "label": "Intermediate",
//                             "value": "Intermediate"
//                         },
//                         {
//                             "label": "Distant",
//                             "value": "Distant"
//                         }
//                     ]
//                 }

const questionSchema = new mongoose.Schema({
    feature: {
        type: String,
        required: true,
        unique: true,
    },
    questions: {
        type: Array,
        required: true,
    }
});

// Create a model for the questions
const Question = mongoose.model("Question", questionSchema);

export default Question;