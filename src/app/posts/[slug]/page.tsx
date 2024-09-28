import { format, parseISO } from 'date-fns';

import BlogViewsIcon from '@/public/images/svg/BlogViewsIcon.svg';
import Image from 'next/image';
import Navbar from '@/components/_navbar';
import ReadTimeIcon from '@/public/images/svg/ReadTimeIcon.svg';
import ScrollTracker from '@/components/ScrollTracker';
import UltraModernSVGGradientBg from '@/components/blogsvg';
import { getPostBySlug } from '@/lib/mdx';
import markdownToHtml from '@/lib/markdownToHTML'; // Import your MDX to HTML conversion function
import { notFound } from 'next/navigation';

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Convert the markdown content to HTML using the provided markdownToHtml function
  const htmlContent = await markdownToHtml(post.content);

  return (
    <div>
    
      <ScrollTracker />
      <article className="mx-auto max-w-5xl py-8 text-white">
        <Navbar />
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <UltraModernSVGGradientBg />
        </div>
        <div className="lg:mt-30 relative z-10 mb-8 mt-10 px-2 text-center">
          {/* Post Title with Gradient */}
          <h1 className="inline-block bg-gradient-to-b from-[#F26FD8] to-[#FFF4F4] bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl mt-32">
            {post.title}
          </h1>2
          {/* Post Description */}
          <p className="mb-10 mt-4 text-base text-white lg:text-xl font-semibold">
            {post.description}
          </p>
          {/* Featured Image */}
          <div className="relative">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1000}
              height={1000}
              className="rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded-2xl bg-black/50" />
            {/* Post Metadata (Read Time, Views, Date) */}
            <div className="absolute bottom-3 left-3 mt-4 flex justify-center space-x-4 text-xs text-white lg:bottom-10 lg:left-10">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 text-sm lg:text-xl">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={ReadTimeIcon}
                      alt="Read Time"
                      width={16}
                      height={16}
                    />
                    <span className="bg-gradient-to-b from-[#FCD3ED] to-[#F690DF] bg-clip-text font-bold text-transparent">
                      {post.readTime} read
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={BlogViewsIcon}
                      alt="Blog Views"
                      width={16}
                      height={16}
                    />
                    <span className="bg-gradient-to-b from-[#26bb57e1] to-[#06ff12] bg-clip-text font-bold text-transparent">
                      53,000 views
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-1 text-sm lg:text-xl">
                  <div className="m-0">Written on</div>
                  <time dateTime={post.date} className="m-0">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                  </time>
                  <div className="m-0">COGNITICA</div>
                </div>
                <div className="mt-2 flex items-center space-x-1 text-xs lg:text-lg">
                  <div className="m-0">Last updated</div>
                  <time dateTime={'2024-09-12T00:00:00.000Z'} className="m-0">
                    {format(
                      parseISO('2024-09-12T00:00:00.000Z'),
                      'LLLL d, yyyy'
                    )}
                  </time>
                </div>
              </div>
            </div>
          </div>
          </div>
        {/* MDX Content Rendering */}
        <div
          className="z-99 prose-md prose prose-invert relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }} // Render the converted HTML content
        />
      </article>
      </div>

  );
};

export default PostLayout;
