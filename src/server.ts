import app from "./app";
import { prisma } from "./app";

(async () => {
  await prisma
    .$connect()
    .then(() =>
      app.listen(3001, () =>
        console.log("Server running in url: localhost:3001")
      )
    )
    .catch((err) => console.error(err));
})();
