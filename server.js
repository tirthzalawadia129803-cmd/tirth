import { createApp } from "./src/app.js";

const port = Number(process.env.PORT || 5000);

createApp()
  .then((app) => {
    const server = app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(
          `Port ${port} is already in use. Stop the existing process or change PORT in backend/.env.`
        );
        process.exit(1);
      }

      console.error("Server startup error:", error);
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
