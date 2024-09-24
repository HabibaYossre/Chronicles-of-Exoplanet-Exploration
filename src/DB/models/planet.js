import mongoose from 'mongoose';

// Create a schema for the planets
// name	planet_mass	planet_radius	planet_discovery_method	discovery_date	planet_type	URL


const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    URL: {
        type: String,
        required: true,
    },
    planet_mass: {
        type: String,
        required: true,
    },
    planet_radius: {
        type: String,
        required: true,
    },
    planet_discovery_method: {
        type: String,
        required: true,
    },
    discovery_date: {
        type: Number,
        required: true,
    },
    planet_type: {
        type: Number,
        required: true,
    }
});

// Create a model for the planets
const Planet = mongoose.model("Planet", planetSchema);

export default Planet;