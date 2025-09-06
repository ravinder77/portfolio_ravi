import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tech_used: {
        type: [String],
        required: true,
    },
    github_link: {
        type: String,
    },
    demo_link: {
        type: String,
    }
})


const Project = mongoose.model("Project", projectSchema);
export default Project;