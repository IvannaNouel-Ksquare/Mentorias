import { Request, Response } from "express";
import News from "../models/news";
import { INews } from "../types";

const newscontrollers = {
    getNewsById: async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            const news = await News.findById(id);
            if (!news) {
                res.status(404).json({
                    error: "news not found",
                });
                return;
            }
            const currentNews = await News.findByIdAndUpdate(id, { views: news.views + 1 }, { new: true});
            res.status(200).json({
               news: currentNews,

            });

        } catch (error) {
            res.status(500).json({
                message: "ERROR",
            });
            console.log(error);
        }
    },
    getAllNews: async (_req: Request, res: Response) => {
        try {
            const news = await News.find<INews[]>({})
            res.status(200).json({
                news,
            });

        } catch (error) {
            res.status(500).json({
                message: "ERROR",
            });
            console.log(error);
        }
    },
    createNews: async (req: Request, res: Response) => {
        try {
            const { title, views } = req.body;
            const exist = await News.findOne<INews>({ title });
            if (exist) {
                res.status(403).json({
                    message: "title already exists",
                })
                return;
            }
            const newPost = new News({ title, views });
            await newPost.save();

            res.status(200).json({
                message: "News created",
            })

        } catch (error) {
            res.status(500).json({
                message: "ERROR",
            });
            console.log(error);
        }
    },
    deleteNewsbyId: async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            const news = await News.findByIdAndDelete(id);

            res.status(200).json({
                message: "News deleted",
                news,
            })
        } catch (error) {
            res.status(500).json({
                message: "ERROR",
            });
            console.log(error);
        }
    },
    updateNewsById: async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            const { title, views } = req.body;
            const news = await News.findByIdAndUpdate(id, { title, views }, { new: true });

            res.status(200).json({
                message: "News Updated",
                news,
            })
        } catch (error) {
            res.status(500).json({
                message: "ERROR",
            });
            console.log(error);
        }
    },
    filterByViews: async (req: Request, res: Response) => {
        try {
            let views = req.params.views;
            const news = await News.find<INews[]>({
                views: {
                    $gte: views
                }
            })
            res.status(200).json({
                news,
            });

        } catch (error) {
            res.status(500).json({
                message: "ERROR",
            });
            console.log(error);
        }
    },
};

export default newscontrollers;

