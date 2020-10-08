import mongoose from 'mongoose'

// Create a Schema
const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: "Uncategorized"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});

const Category = mongoose.model("category", CategorySchema);

export default Category