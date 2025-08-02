import mongoose from "mongoose";



const experienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    duration: String, // Example: "Jan 2022 – Jul 2023"
});
const PersonalInfoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    shortBio: {
        type: String,
        required: true,
    },
    fullBio: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    experience: [experienceSchema],
    clientSatisfaction: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    projectsCompleted: {
        type: Number,
        required: true,
        min: 0,
    },
    awards: {
        type: Number,
        required: true,
    },
    socialLinks: {
        linkedIn: String,
        github: String,
        twitter: String,
        facebook: String,
        instagram: String,
        website: String,
    },
    resume: String,
    skills: [String],


})

export default mongoose.models.PersonalInfoSchema || mongoose.model("PersonalInfoSchema", PersonalInfoSchema);