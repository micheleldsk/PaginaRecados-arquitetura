import 'dotenv/config';
import { createServer } from '../configs';

export const runServer = () => {
	const app = createServer();

	app.listen(process.env.PORT, () => {
		console.log(`PORT: ${process.env.PORT}`);
	});
};
