import { Config } from '@stencil/core';

// https://stenciljs.com/docs/configW

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  bundles: [
    { components: ['app-form']},
    { components: ['page-home', 'page-about', 'page-contact'] }
  ],
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};
