import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json([
    {
      titulo: "Mucho calor",
      vistas: 3000,
    },
    {
      titulo: "Mucho frio",
      vistas: 4000,
    },
    {
      titulo: "Mucho sol",
      vistas: 8000,
    },
  ]);
});

router.post("/", (req, res) => {
  try {
    const { titulo, vistas } = req.body; //lo mismo de arriba, se le llama destructuración

    res.status(200).json({
      message: "Noticia creada",
      post: {
        titulo,
        vistas,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "something happened",
    });
  }
});

export default router;
