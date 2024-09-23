import mongoose from 'mongoose';

// Create a schema for the planets
// name: String (required, unique)
// 3d url: String (required)

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    url_3D: {
        type: String,
        required: true,
    }
});

// Create a model for the planets
const Planet = mongoose.model("Planet", planetSchema);

export default Planet;