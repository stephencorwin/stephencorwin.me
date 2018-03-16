/* eslint-disable no-console */
import chalk from 'chalk';

const debug = message => console.debug(chalk.gray(message));
const warn = message => console.warn(chalk.yellow(message));
const error = err => console.error(chalk.red(err));
const app = message => console.log(chalk.blueBright(message));

const serverStart = (env, name, version, port) =>
	app(`> [${env.toUpperCase()}] ${name}@${version} listening on port ${port}`);

const logger = Object.freeze({
	debug,
	warn,
	error,
	app,
	serverStart
});

export default logger;
