import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true,
        },

        thumbnali: {
            type: String, //cloudinary url
            required: true,
        },
        titile: {
            type: String, 
            required: true,
        },

        description: {
            type: String, 
            required: true,
        },

        duration: {
            type: Number, 
            required: true,
        },
        view:{
            type: Number,
            default:0
        },

        isPublished: {
            type: Boolean,
            default:  true, 
        },

        owner:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }


        
    },
    {
        timestamps: true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video", videoSchema)