import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	return {
		base: mode === 'production' ? '/CP264/' : '/', // Use '/CP264/' only in production, '/' in dev
		plugins: [react()],
	};
});
