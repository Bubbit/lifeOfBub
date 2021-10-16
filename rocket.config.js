import { rocketLaunch } from '@rocket/launch';
import { rocketBlog } from '@rocket/blog';

export default {
  presets: [rocketLaunch(), rocketBlog()],
};
