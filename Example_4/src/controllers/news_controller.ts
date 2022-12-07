import { Request, Response} from "express";

const newscontrollers = {
    getNews: (_req:Request, res:Response) => {
        res.status(200).json([
            {
                titulo: "Hot",
                vistas: 3000,
            },
            {
                titulo: "Cold",
                vistas: 4000,
            },
            {
                titulo: "Very sunny",
                vistas: 8000,
            },
        ]);
    },

    createNew: (req:Request, res:Response) => {
        try {
            const { titulo, vistas } = req.body; //lo mismo de arriba, se le llama destructuración

            res.status(200).json({
                message: "News created",
                post: {
                    titulo,
                    vistas,
                },
            });
        } catch (error) {
            console.log(error);

            res.status(500).json({
                message: "ERROR",
            });
        }
    }
}

export default newscontrollers;

