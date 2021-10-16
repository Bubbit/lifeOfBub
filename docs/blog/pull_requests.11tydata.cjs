const { createSocialImage } = require('@rocket/cli');

module.exports = async function () {
  const socialMediaImage = await createSocialImage({
    title: 'Pull requests',
    subTitle: 'My 3 ways of reviewing pull requests',
    footer: 'Remco Gubbels',
  });
  return {
    socialMediaImage,
  };
};