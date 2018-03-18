import { createServer } from 'http';
import express from 'express';
import path from 'path';
import next from 'next';
import compression from 'compression';
import zlib from 'zlib';
import Bluebird from 'bluebird';

import pkg from '../package.json';
import { pages } from '../app.config';
import nextConfig from '../next.config';
import logger from './logger';
import middleware from './middleware';

const Server = () => {
	const port = parseInt(process.env.PORT, 10) || 3000;
	const env = process.env.NODE_ENV;
	const dev = env !== 'production';
	const nextApp = next({ dir: './app', dev, conf: nextConfig });
	const handle = nextApp.getRequestHandler();

	const app = Object.assign(express(), {
		pkgname: pkg.name,
		version: pkg.version
	});

	if (!dev) {
		app.use(compression({ threshold: 0, level: zlib.Z_BEST_COMPRESSION }));
	}

	app.use(
		'/_next/static',
		express.static(path.join(__dirname, '../app/.next/static'))
	);

	// Health Check
	app.get('/up', middleware.healthCheck);

	// Pages
	app.get(pages.home.route.href, (req, res) =>
		nextApp.render(req, res, pages.home.route.href, req.query)
	);
	app.get(pages.portfolio.route.href, (req, res) =>
		nextApp.render(req, res, pages.portfolio.route.href, req.query)
	);
	app.get(`${pages.portfolio.route.href}/:slug`, (req, res) =>
		nextApp.render(req, res, pages.portfolio.route.href, {
			slug: req.params.slug
		})
	);

	// 404
	app.get('*', (req, res) => handle(req, res));

	const server = createServer(app);

	const listen = () =>
		nextApp
			.prepare()
			.then(() => server.listen(port))
			.then(() => logger.serverStart(env, pkg.name, pkg.version, port));

	const close = () => Bluebird.fromCallback(cb => server.close(cb));

	return Object.freeze({
		listen,
		close
	});
};

export default Server;
