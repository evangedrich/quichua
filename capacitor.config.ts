import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.evangedrich.quichua',
  appName: 'Quichua',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
};

export default config;
