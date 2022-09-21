import { remark } from 'remark';
import externalLinks from 'remark-external-links';
import gfm from 'remark-gfm';
import html from 'remark-html';

const markdownToHtml = async (file: string) => {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(gfm)
    .use(externalLinks)
    .use(require('remark-prism'))
    .process(file);

  return result.toString();
};

export default markdownToHtml;
