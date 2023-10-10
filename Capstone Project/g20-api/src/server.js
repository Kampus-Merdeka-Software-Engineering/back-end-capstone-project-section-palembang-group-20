import chalk from 'chalk';

import { app } from './app/app.js';

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.bgGreenBright(`Server is running on port ${PORT}`));
});