import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Settings from './src/data/Settings';

export default defineConfig(({ mode }) => {
	return {
		base: mode === 'production' ? `/${Settings.courseCode}/` : '/', // Use '/CP264/' only in production, '/' in dev
		plugins: [react()],
	};
});
