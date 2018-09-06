import { sass } from '@stencil/sass';

export const config = {
  namespace: 'app',
  copy: [
    {
      src: 'public'
    }
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/app',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
