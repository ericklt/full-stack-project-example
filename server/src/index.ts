import Express from "express";
import BodyParser from 'body-parser';
import { activateSubApplications } from "./routes";

const app: Express.Application = Express();
app.use(BodyParser.json());

activateSubApplications(app);

const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));