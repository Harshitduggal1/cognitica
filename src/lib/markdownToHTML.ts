import { PluggableList, Processor } from 'unified';

// @ts-ignore
import rehypeAddClasses from 'rehype-add-classes';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { unified } from 'unified';

interface PrettyCodeOptions {
  theme: string;
  transformers: any[];
}

const cssClasses = {
  'h1': 'text-5xl font-extrabold mb-6 text-gradient-blue',
  'h2': 'text-4xl font-bold mb-4 text-gradient-blue',
  'h3': 'text-3xl font-semibold mb-3 text-gradient-blue',
  'p': 'mb-4 text-white leading-relaxed',
  'a': 'rounded-full text-blue-500 hover:text-purple-500 transition-colors duration-200 ',
  'ul': 'list-disc list-inside mb-4',
  'ol': 'list-decimal list-inside mb-4',
  'li': 'mb-2',
  'blockquote': 'border-l-4 border-blue-500 pl-4 italic my-4 rounded-full',
  'code': 'bg-gray-800 rounded px-1 py-0.5',
  'pre': 'bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto',
};

export default async function markdownToHtml(markdown: string): Promise<string> {
  const prettyCodeOptions: PrettyCodeOptions = {
    theme: 'one-dark-pro',
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3000,
      }),
    ],
  };

  const result = await (unified() as Processor)
    .use(remarkParse as any)
    .use(remarkRehype as any, { allowDangerousHtml: true })
    .use(rehypeSlug as any)
    .use(rehypeAutolinkHeadings as any)
    .use(rehypePrettyCode as any, prettyCodeOptions)
    .use(rehypeAddClasses as any, cssClasses)
    .use(rehypeStringify as any)
    .process(markdown);

  const htmlContent = String(result);

  return `
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 animate-gradient-xy p-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-opacity-20 border-white">
          <div class="prose prose-lg prose-invert mx-auto">
            ${htmlContent}
          </div>
        </div>
      </div>
      <style jsx>{\`
        .min-h-screen {
          min-height: 100vh;
          padding: 0;
          margin: 0;
        }
        .prose {
          padding: 0 1rem;
        }
      \`}</style>
    </div>
    <style>
      @keyframes gradient-x {
        0%, 100% {
          background-size: 200% 200%;
          background-position: left center;
        }
        50% {
          background-size: 200% 200%;
          background-position: right center;
        }
      }
      .animate-gradient-xy {
        animation: gradient-x 15s ease infinite;
      }
      .text-gradient-blue {
        background: linear-gradient(to right, #00f4ff, #0055ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: neon-blue-pulse 2s ease-in-out infinite alternate;
      }
      .border {
        border: 2px solid;
        border-image: linear-gradient(45deg, #00f4ff, #0055ff) 1;
        border-radius: 16px;
        animation: border-glow 5s ease infinite;
      }
      @keyframes border-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.5),
                      0 0 15px rgba(0, 255, 255, 0.5),
                      0 0 30px rgba(0, 150, 255, 0.5),
                      0 0 50px rgba(0, 150, 255, 0.5);
        }
        50% {
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
                      0 0 20px rgba(0, 255, 255, 0.5),
                      0 0 40px rgba(0, 150, 255, 0.5),
                      0 0 70px rgba(0, 150, 255, 0.5);
        }
      }
      * {
        transition: all 0.3s ease;
      }
      a {
        position: relative;
        text-decoration: none;
        color: #00f4ff;
      }
      a::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: #00f4ff;
        bottom: -2px;
        left: 0;
        transform: scaleX(0);
        transition: transform 0.3s ease;
        z-index: -1;
      }
      a:hover::after {
        transform: scaleX(1);
      }
      button {
        background: linear-gradient(45deg, #00f4ff, #0055ff);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 150, 255, 0.5);
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease;
      }
      button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 25px rgba(0, 150, 255, 0.5);
      }
      button::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.5s ease;
        z-index: 0;
      }
      button:hover::before {
        transform: translate(-50%, -50%) scale(1);
      }
      blockquote {
        border-left: 5px solid;
        border-image: linear-gradient(45deg, #00f4ff, #0055ff) 1;
        padding-left: 20px;
        margin: 1.5rem 0;
        color: rgba(255, 255, 255, 0.8);
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        position: relative;
        overflow: hidden;
      }
      blockquote::before {
        content: '';
        position: absolute;
        top: -10%;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        animation: slide-in 5s linear infinite;
        z-index: -1;
      }
      @keyframes slide-in {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
    </style>
  `;
}