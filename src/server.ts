import app from "./app";
import { prisma } from "./app";

(async () => {
  await prisma
    .$connect()
    .then(() =>
      app.listen(3001, () => console.log("Server is running on port 3001 :D"))
    )
    .catch((err) => console.error(err));
})();
