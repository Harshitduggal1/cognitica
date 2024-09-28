import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

const FeatureHighlight = () => {
  const logos = [
    // {
    //   url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/TechCrunch.svg",
    //   name: "tech",
    //   link: "https://techcrunch.com"
    // },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/axios.svg",
      name: "Axios",
      link: "https://www.axios.com"
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/wired.svg",
      name: "Wired",
      link: "https://www.wired.com"
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/forbes.svg",
      name: "Forbes",
      link: "https://www.forbes.com"
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/insider.svg",
      name: "Business Insider",
      link: "https://www.businessinsider.com"
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/fast-company.svg",
      name: "Fast Company",
      link: "https://www.fastcompany.com"
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/vanity.svg",
      name: "Vanity",
      link: "https://www.vanityfair.com"
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/GMA.svg",
      name: "GMA",
      link: "https://www.goodmorningamerica.com/"
    },
  ];

  return (
    <>
      <div id="features" className="border-t-2 border-black border-b-2 text-white w-full flex flex-col md:flex-row items-center justify-center bg-[#3843d0] py-5 text-center md:text-left md:min-h-[45vh]">
        <div className="w-full md:w-[50%] px-20 py-4">
          <h2 className="font-clashDisplay uppercase text-cyber-ink text-2xl md:text-5xl mb-2">
            Come thrive on <br />Beclone
          </h2>
          <p className="text-cyber-ink text-xl md:text-2xl font-[400]">
            The best tools for the best outcomes
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-center md:justify-end items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="312" height="19" viewBox="0 0 312 19"
              className="mb-4 ml-[55px] md:ml-0"
              style={{ mixBlendMode: 'screen' }}>
            <path stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M1 1c4.426 0 4.426 17 8.858 17s4.426-17 8.857-17 4.427 17 8.858 17 4.426-17 8.857-17 4.427 17 8.858 17 4.426-17 8.857-17 4.427 17 8.858 17 4.426-17 8.857-17 4.427 17 8.858 17 4.426-17 8.853-17 4.426 17 8.857 17 4.427-17 8.858-17 4.431 17 8.853 17 4.426-17 8.857-17 4.427 17 8.858 17 4.431-17 8.853-17 4.426 17 8.857 17 4.431-17 8.858-17 4.426 17 8.857 17 4.432-17 8.858-17 4.431 17 8.858 17 4.431-17 8.853-17 4.426 17 8.857 17 4.431-17 8.858-17 4.426 17 8.857 17 4.431-17 8.863-17 4.431 17 8.857 17" />
          </svg>
          <Link href="/dashboard">
          <div className="relative button-container1">
            <div className="button-layer1 bg-[#F092DD] border-black border-2"></div>
            <div className="button-layer1 bg-[#FFC8EB] border-black border-2"></div>
            <div className="button-main1 bg-black text-white border-[2px] border-black rounded-lg text-2xl py-7 px-8 md:py-6 md:px-9 mr-0 md:mr-10">
              Start 30 day free trial
            </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-black border-b-2 w-full md:flex items-center bg-[#f0ecff] py-5 text-center md:text-left md:py-0 md:min-h-[83vh]">
        <div className="w-full md:w-[50%] flex justify-center md:justify-start">
          <Image
            src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Create.png"
            alt=""
            width={450}
            height={400}
            className="w-[80%] md:w-[90%] mx-auto"
          />
        </div>
        <div className="w-full md:w-[50%] text-left p-6 ml-0 md:ml-14">
          <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mb-2">
            CREATE
          </h2>
          <h3 className="text-cyber-ink text-xl md:text-3xl max-w-xl font-[700] mb-7">
            The most powerful editing and design tools in email.
          </h3>
          <p className="text-cyber-ink text-lg md:text-2xl max-w-lg font-[400] mb-10">
            Warning: A writing experience unlike anything you&lsquo;ve ever
            experienced - proceed with caution.
          </p>
          <Link href={"/dashboard"} className="flex justify-center md:justify-start">
          <div className="relative button-container2">
            <div className="button-layer2 bg-[#F092DD] border-black border-2"></div>
            <div className="button-layer2 bg-[#FFC8EB] border-black border-2"></div>
            <div className="button-main2 bg-white border-[2px] border-[#000] rounded-lg text-xl py-4 px-[6rem]">
              Start building
            </div>
            </div>
          </Link>
        </div>
      </div>


      <div className="border-black border-b-2 w-full md:flex items-center bg-[#9399F4] py-5 text-center md:py-0 md:text-left md:min-h-[75vh]">
      <div className="w-full md:w-[50%]">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
          alt=""
          width={400}
          height={400}
          className="w-[85%] ml-5"
        />
      </div>
      <div className="w-full md:w-[50%] text-left p-6 ml-0 md:ml-14">
          <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mb-2">
            Publish
          </h2>
          <h3 className="text-cyber-ink text-xl md:text-3xl max-w-xl font-[700] mb-7">
            Launch the next iconic media brand in minutes. No code needed. Ever.
          </h3>
          <p className="text-cyber-ink text-lg md:text-2xl max-w-xl font-[400] mb-10">
            World class newsletters and websites - just like the pros.
          </p>
          <Link href={"/dashboard"} className="flex justify-center md:justify-start">
          <div className="relative button-container2">
            <div className="button-layer2 bg-[#F092DD] border-black border-2"></div>
            <div className="button-layer2 bg-[#FFC8EB] border-black border-2"></div>
            <div className="button-main2 bg-white border-[2px] border-[#000] rounded-lg text-xl py-4 px-[6rem]">
              Start writing
            </div>
          </div>
          </Link>
        </div>
      </div>

      <div className="border-black border-b-2 w-full md:flex items-center bg-[#ffc8eb] py-5 text-center md:py-0 md:text-left md:min-h-[85vh]">
      <div className="w-full md:w-[50%]">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Grow.png"
          alt=""
          width={400}
          height={400}
          className="w-[85%] ml-5"
        />
      </div>
      <div className="w-full md:w-[50%] text-left p-6 ml-0 md:ml-14">
          <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mb-2">
            GROW
          </h2>
          <h3 className="text-cyber-ink text-xl md:text-3xl max-w-xl font-[700] mb-7">
            Use the same suite of tools used by the world&apos;s largest newsletters.
          </h3>
          <p className="text-cyber-ink text-lg md:text-2xl max-w-xl font-[400] mb-10 ">
            So effective some would consider it cheating.
          </p>
          <Link href={"/dashboard"} className="flex justify-center md:justify-start">
            <div className="relative button-container2">
              <div className="button-layer2 bg-[#F092DD] border-black border-2"></div>
              <div className="button-layer2 bg-[#FFC8EB] border-black border-2"></div>
              <div className="button-main2 bg-white border-[2px] border-[#000] rounded-lg text-xl py-4 px-[6rem]">
                Scale faster
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-black border-b-2 w-full md:flex items-center bg-[#f092dd] py-5 text-center md:py-0 md:text-left md:min-h-[85vh]">
      <div className="w-full md:w-[50%]">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Monetize-2.png"
          alt=""
          width={400}
          height={400}
          className="w-[85%] ml-5"
        />
      </div>
      <div className="w-full md:w-[50%] text-left p-6 ml-0 md:ml-14">
          <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mb-2">
           MONETIZE
          </h2>
          <h3 className="text-cyber-ink text-xl md:text-3xl max-w-xl font-[700] mb-7">
           Like you have a full sales and revenue team on your staff.
          </h3>
          <p className="text-cyber-ink text-lg md:text-2xl max-w-xl font-[400] mb-10 ">
            {'...because you do. You just don\'t pay them (or need to make small talk).'}
          </p>
          <Link href={"/dashboard"} className="flex justify-center md:justify-start">
`          <div className="relative button-container2">
              <div className="button-layer2 bg-[#F092DD] border-black border-2"></div>
              <div className="button-layer2 bg-[#FFC8EB] border-black border-2"></div>
              <div className="button-main2 bg-white border-[2px] border-[#000] rounded-lg text-xl py-4 px-[6rem]">
                Start earning`
              </div>
            </div>
          </Link>
        </div>
      </div>
      <section className="bg-[#060419] py-16 px-8 md:p-20">
      <div className="relative flex flex-col gap-10 items-center justify-between max-w-screen-2xl mx-auto">
        {/* SVG omitted for brevity */}
        <p className="tracking-[0.72px] md:text-xl text-center sm:text-left whitespace-nowrap text-[#F7F5FF] font-semibold max-w-3xl mb-0 uppercase">Featured in</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="214" height="214" fill="none" className="absolute top-24 hidden xl:block -left-[12%] rotate-12 z-10">
          <path fill="#F092DD" stroke="#0B0D2A" strokeWidth="2" d="M177.711 31.85c2.435-2.017 5.683 1.232 3.667 3.666L136.329 89.9c-2.359 2.848-.567 7.175 3.115 7.52l70.309 6.601c3.148.296 3.148 4.89 0 5.185l-70.309 6.601c-3.682.346-5.474 4.673-3.115 7.521l45.049 54.383c2.016 2.435-1.232 5.683-3.667 3.667l-54.383-45.049c-2.848-2.359-7.175-.567-7.521 3.115l-6.601 70.309c-.295 3.148-4.889 3.148-5.185 0l-6.6-70.309c-.346-3.682-4.673-5.474-7.521-3.115l-54.384 45.049c-2.434 2.016-5.683-1.232-3.666-3.667l45.048-54.383c2.36-2.848.568-7.175-3.115-7.521l-70.309-6.601c-3.147-.295-3.147-4.889 0-5.185l70.31-6.6c3.681-.346 5.474-4.673 3.114-7.521L31.85 35.516c-2.017-2.434 1.232-5.683 3.666-3.666L89.9 76.898c2.848 2.36 7.175.568 7.52-3.115l6.601-70.309c.296-3.147 4.89-3.147 5.185 0l6.601 70.31c.346 3.681 4.673 5.474 7.521 3.114l54.383-45.048Z"></path>
        </svg>
        <a className="flex items-center aspect-video p-0" href="https://techcrunch.com" target="_blank" rel="noopener noreferrer">
            <img alt="TechCrunch Logo" loading="lazy" width="500" height="500" className="max-w-[60px]" src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-white/TechCrunch.svg" />
          </a>
          {logos.map((logo, index) => (
            <a key={index} className="flex items-center aspect-video p-0" href={logo.link} target="_blank" rel="noopener noreferrer">
              <img alt={`${logo.name} Logo`} loading="lazy" width="500" height="500" className="max-w-[100px]" src={logo.url} />
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default FeatureHighlight;