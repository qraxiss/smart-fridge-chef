import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// #region agent log
const logPath = '/Users/belen/Documents/smart-fridge-chef/.cursor/debug.log';
const logEntry = (location: string, message: string, data: any, hypothesisId: string) => {
  const entry = {
    sessionId: 'debug-session',
    runId: 'run1',
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now()
  };
  try {
    fs.appendFileSync(logPath, JSON.stringify(entry) + '\n');
  } catch (e) {}
};
// #endregion

// #region agent log
const viteServerPlugin = () => {
  return {
    name: 'vite-server-debug',
    configureServer(server: any) {
      // #region agent log
      logEntry('vite.config.ts:server-plugin', 'Vite server configuring', { serverExists: !!server }, 'A');
      // #endregion
      
      server.httpServer?.once('listening', () => {
        // #region agent log
        const address = server.httpServer?.address();
        logEntry('vite.config.ts:server-listening', 'Vite server started listening', { address, port: address?.port }, 'A');
        // #endregion
      });
      
      server.httpServer?.once('error', (err: Error) => {
        // #region agent log
        logEntry('vite.config.ts:server-error', 'Vite server error', { error: err.message, code: (err as any).code }, 'B');
        // #endregion
      });
    }
  };
};
// #endregion

export default defineConfig(({ mode }) => {
    // #region agent log
    logEntry('vite.config.ts:19', 'Vite config loading started', { mode }, 'A');
    // #endregion
    
    const env = loadEnv(mode, '.', '');
    
    // #region agent log
    logEntry('vite.config.ts:24', 'Environment loaded', { hasGeminiKey: !!env.GEMINI_API_KEY }, 'A');
    // #endregion
    
    const serverConfig = {
        port: 3000,
        host: '127.0.0.1', // Changed from 'localhost' to avoid DNS resolution
        strictPort: true, // Prevent port scanning
    };
    
    // #region agent log
    logEntry('vite.config.ts:31', 'Server config created', serverConfig, 'D');
    // #endregion
    
    const config = {
      server: serverConfig,
      plugins: [
        react(),
        // #region agent log
        viteServerPlugin(),
        // #endregion
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
    
    // #region agent log
    logEntry('vite.config.ts:48', 'Vite config created', { serverHost: config.server.host, serverPort: config.server.port }, 'A');
    // #endregion
    
    return config;
});
