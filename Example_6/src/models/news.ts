import { Schema, model } from "mongoose";
import {INews} from "../types";

const newsSchema = new Schema<INews>({
    title: { type: String, maxlength: 300, trim: true },
    views: { type: Number, trim: true }
},
{
    timestamps: true,
    versionKey: false,
});

const News = model("News", newsSchema)

export default News;