import express from "express";

const app = express();
app.use(express.json());

// al inicio -> '_' si no se usa
app.get("/", (_req, res) => {
  //req: lo que manda el cliente
  //res: obj para mandar respuesta al cliente
  res.status(200).json({
    message: "Hola",
  });
});

app.get("/noticias", (_req, res) => {
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

app.post("/noticias", (req, res) => {
  try {
    /*
    const titulo = req.body.Titulo;
    const vistas= req.body.Vistas; */

    const {titulo, vistas} = req.body; //lo mismo de arriba, se le llama destructuración 

    res.status(200).json({
        message: "Noticia creada",
        post: {
            titulo,
            vistas
        }
    })
  } 
  catch (error) {
    console.log(error);

    res.status(500).json(
        {
            message: "something happened"
        }
    )

  }
});

app.listen(5000, () => {
  console.log("Server is up and running");
});
