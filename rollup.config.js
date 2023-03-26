import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/routes/index.svelte',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},
			emitCss: false
		}),
		resolve({
			browser: true,
			dedupe: ['svelte'],
			exportConditions: ['svelte', 'module', 'import', 'default']
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		commonjs(),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
