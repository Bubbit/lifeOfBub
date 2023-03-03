import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';
import copy from "rollup-plugin-copy-assets";

const baseConfig = createSpaConfig({
  outputDir: 'public',
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './index.html',
  plugins: [
    copy({
      assets: [
        // You can include directories
        // You can also include files
      ],
    }),
  ],
});