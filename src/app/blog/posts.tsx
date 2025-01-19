interface BlogPost {
    title: string;
    url: string;
    published: Date;
    teaser: string;
    post: string;
}

export const posts: BlogPost[] = [
// to create a new blog post entry, copy the following template and paste it below the last entry in the array
// I really need to move this to a notion api or something because this is REALLY bad...

//     {
//         title: "TITLE_OF_POST",
//         url: "URL_OF_POST",
//         published: new Date("2021-11-21"),
//         teaser: "BRIEF_DESCRIPTION_OF_THE_POST",
//         post: `
// YOUR_CONTENT_HERE`
//     },
{
            title: "CyberSci 2024",
            url: "cybersci-2024",
            published: new Date("2024-11-23"),
            teaser: "My experience at CyberSci 2024",
            post: `
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

h1 {
  font-weight: bold;
  font-size: revert;
}

h3 {
    font-size: revert;
    font-weight: bold;
}
.src {
    text-decoration: none;
    color: revert;
    cursor: pointer;
}

p {
    margin: 1em 0;
    line-height: 1.6;
    font-size: 16px;
}
</style>

<p>I had a great time at Cybersci this year with our completely new team out of Langara College. Despite having less than 3 months to practice, we were able to place 4th in Vancouver and 17th overall, which I am very proud of and is a great result for a completely new CTF team with no previous experience.</p>
<p>Below are the problems that I attempted/solved during the competition.</p>
<h3 id="when-i-tested-the-vpn-100-">When I Tested the VPN (100)</h3>
<p>The flag is provided when you load the test page through the VPN connection.</p>
<h3 id="voter-emailer-1-100-">Voter Emailer 1 (100)</h3>
<p>FastAPI has 3 special routes: <code>/docs</code>, <code>/redoc</code>, and <code>/openapi.json</code>. You can find all routes of the API by accessing any of those pages.</p>
<h3 id="chatbot-1-884-">Chatbot 1 (884)</h3>
<p>Did not finish. It appeared that Llama was returning completely random names when asked who the current candidates were. As well, the database call for candidates needed to be changed from <code>candidate=&#39;true&#39;</code> to <code>candidate=&#39;True&#39;</code>.</p>
<p>For this and the following challenges, I used Remote-SSH with VSCode on my Windows 11 environment, which was more comfortable for me to test and debug with.</p>
<h3 id="chatbot-2-949-">Chatbot 2 (949)</h3>
<p>When users send a message, they send it in the form <code>&quot;RandomName9000 : what is my email?\`</code>. There is also a session token that is set which is the user&#39;s username in base64. Some calls would send a message with one user in the message, and a completely different message in the session cookie. 
This can be fixed by checking for usernames in the message and replacing it with the real username, which is the session token decoded with base64.</p>`
        },
    {
        title: "My position on nuclear power",
        url: "nuclear-power",
        published: new Date("2022-01-10"),
        teaser: "A retrospective on a debate about power generation.",
        post: `
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
  
h1 {
  font-weight: bold;
  font-size: 48px;
}

h3 {
    font-size: 30px;
}

.src {
    text-decoration: none;
    color: revert;
    cursor: pointer;
}

p {
    margin: 1em 0;
    line-height: 1.6;
    font-size: 16px;
}
</style>
        <p>I stand by my decision to promote nuclear power.</p>
        <p><strong>Kinetic</strong>, as presented in the debate is not an effective source of power. The largest hydrogen cell plant in the world can only sustain around 40 000 households and is also hooked up to a chemical factory.</p>
        <p><strong>Hydropower</strong>, as presented in the debate is also not an effective source of power. However, I do think that the hydropower currently used in British Columbia is a decent option. Although hydropower is associated with several cons, including but not limited to environmental destruction, it is still one of the most reliable sources of renewable power.</p>
        <p><strong>Tidal</strong>, as presented in the debate is also not an effective source of power. Single propeller turbines may be effective in remote communities, but they will not come close to powering municipalities. Tidal basins, which are effective sources of power in countries such as South Korea, cause even more environmental destruction than hydroelectric dams.</p>
        <p><strong>Biothermal</strong> is the only other power source that can compete with nuclear power in energy reliability. Unfortunately, the carbon created by biothermal plants still takes ~50 years to be recaptured by new growth, which is not what the world needs right now. Using waste in biothermal power is still better than letting it go to a landfill, but there isn’t enough of that to power municipalities.</p>
        <p><strong>Solar and Wind</strong> are the only sources of power that I would consider viable. Unfortunately, neither are reliable enough to comprise a large amount of the power grid, and both require lots of batteries.</p>
        <p><strong>Geothermal</strong> is perhaps the most viable renewable power source. It causes low damage to the environment and is a reliable source of power. The only cons appear to be high construction costs, and a low risk of earthquakes, though the highest number I could find was a 4.0 magnitude earthquake, and that was from a plant located directly above a fault line.</p>
        <p>Which brings us back to <strong>nuclear</strong>. It’s a reliable source of power and we have a solution for waste. There have been no fatal accidents in the last ten years, and throughout all of history, it’s killed far less people than coal power, and no more than other sources of renewable power. Though the costs are higher, nuclear power also has a smaller footprint and is not reliant on any specific geographic features or climate.</p>
        <p>I believe in nuclear power.</p>`
    },
    {
        title: "An Introspective on Cloud Seeding",
        url: "cloud-seeding",
        published: new Date("2021-11-21"),
        teaser: "An introspective on cloud seeding in British Columbia.",
        post: `
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

body {
    animation: fadeIn 2s forwards;
}

h1 {
  font-weight: bold;
  font-size: 48px;
}

h3 {
    font-size: 30px;
}

@keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}   

.src {
    text-decoration: none;
    color: revert;
    cursor: pointer;
}

p {
    margin: 1em 0;
    line-height: 1.6;
    font-size: 16px;
}
    
.image-container {
    position: relative;
    width: 100%;
    height: 400px;
    aspect-ratio: 16/9;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

blockquote {
margin: 20px 0;
padding: 15px 30px;
border-left: 5px solid #ccc;
font-style: italic;
}
</style>

<div className="image-container">
    <img 
        src="https://cdn.theatlantic.com/thumbor/9u_U6cK9HRmMwt9HiUkKreaqNYg=/459x64:3018x1503/1600x900/media/img/mt/2017/08/RTX1JPC8/original.jpg"
        className="center"
        alt="plane conducting cloud seeding"
    />
</div>
<i style="padding-bottom: 10px">(Chaiwat Subprasom / Reuters)</i>

<h3 id="a-local-perspective">A Local Perspective</h3>
<p>In 2001, BC Hydro commissioned a study on cloud seeding. The exact contents of this study are a mystery, so we can only speculate towards their contents. However, two years later the provincial Weather Modification Act was repealed. The implications are unclear, but they are certainly intriguing. <a class="src" href="https://lailayuile.com/2011/07/28/why-did-the-bc-government-repeal-the-weather-modification-act/">[1]</a></p>
<h3 id="a-tantalizing-option">A Tantalizing Option</h3>
<p>Earth is certainly no stranger to cloud seeding. Cloud seeding has been ongoing for over 80 years and today cloud seeding is taking place in over 50 countries. <a class="src" href="https://public.wmo.int/en/resources/bulletin/seeding-change-weather-modification-globally">[2]</a></p>
<p>China spends about $200 million per year on cloud seeding efforts and reports an increase in rainfall of 10-15%; an extra 50 billion cubic metres of water every year. <a class="src" href="https://www.economist.com/china/2021/03/25/cloud-seeding-will-not-solve-chinas-water-shortages">[3]</a><a class="src" href="https://www.newsweek.com/melinda-liu-can-china-control-olympics-weather-110875">[4]</a></p>
<p>In the United Arab Emirates, deteriorating groundwater and high costs of desalination make cloud seeding an attractive option; expenditures are unavailable but 242 cloud seeding flights were conducted in 2017. UAE also funds a $5 million grant every year to <em>"research projects in the field of rain enhancement"</em>. <a class="src" href="https://www.thenationalnews.com/uae/environment/how-does-cloud-seeding-in-the-uae-work-1.811961">[5]</a><a class="src" href="https://www.uaerep.ae/">[6]</a></p>
<p>Several states in America conduct cloud seeding. Among others, California, Colorado, and North Dakota have all established economic benefits from cloud seeding. <a class="src" href="https://www.skywaterventures.com/uploads/7/0/6/1/70616003/cec-500-2007-008.pdf">[7]</a><a class="src" href="https://insideclimatenews.org/news/04032020/cloud-seeding-global-warming/">[8]</a><a class="src" href="https://www.swc.nd.gov/arb/ndcmp/economic.html">[9]</a></p>
<h3 id="concerns">Concerns</h3>
<p>Cloud seeding is very much an evolving field (several sources in this text are from 2021) and questions remain on several fronts:</p>
<p>Two studies have found silver iodide to lack toxicity towards humans, but toxicity to other organisms is unquantified until more research is conducted. <a class="src" href="https://www.youtube.com/watch?v=-3ZFpUZFSFo&amp;list=PLjiR9sMNwZoDelYr_xW3sjLMeZM-lR86N&amp;index=130">[10]</a></p>
<p>Concerns about stealing water have been made and rebuffed by several meteorologists in the media. Unfortunately, I cannot find any peer-reviewed studies to back up either argument.</p>
<h3 id="my-thoughts">My Thoughts</h3>
<p>With all this taken into account, I do believe that cloud seeding is a viable option for governments to use.</p>
<p>The underlying issue, however, is climate change.</p>
<p>In the UAE, groundwater is being depleted faster than it is being recharged. This is exacerbated by one of the highest per capita water consumption rates in the world: 477 cubic metres per day, per person. This has forced the government to source 40 percent of its fresh water from costly, energy guzzling desalination plants. <a class="src" href="https://www.constructionweekonline.com/projects-tenders/article-33309-groundwater-depletion-risks-land-subsidence-in-uae">[11]</a> <a class="src" href="https://www.trade.gov/country-commercial-guides/united-arab-emirates-water#:~:text=The%20UAE%20has%20one%20of,for%20water%20and%20energy%20projects.">[12]</a> <a class="src" href="https://u.ae/en/information-and-services/environment-and-energy/water-and-energy/water-">[13]</a></p>
<p>In Maharashtra, India, the government hired a cloud seeding company (aside: this is the very same company that BC Hydro hired) only after three consecutive years of drought slashed agricultural output by 33%. <a class="src" href="https://www.bloomberg.com/features/2015-cloud-seeding-india/">[14]</a></p>
<blockquote>
<p>The human impact has been severe—1,300 debt-trapped farmers have committed suicide in Maharashtra in just the past six months.</p>
<p> - <a href="https://www.bloomberg.com/features/2015-cloud-seeding-india/">Bloomberg </a></p>
</blockquote>
<p>Globally, cleantech startups raised <strong>16 billion dollars</strong> in the first half of 2021 alone. <a class="src" href="https://www.bloomberg.com/news/articles/2021-09-02/climate-startups-are-booming-as-vcs-throw-money-at-cleantech">[15]</a></p>
<p>As we approach 2 degrees, the stability of our climate will only continue degrading. Cloud seeding is a solution to only the symptoms of climate change. Without greater changes in society, cloud seeding may prove ultimately useless.</p>`
    },
    {
        title: "Welcome",
        url: "welcome",
        published: new Date("2021-09-07"),
        teaser: "This is the first post on this blog.",
        post: `
<h1 id="welcome-to-my-blog-">Welcome to my blog!</h1>
<p>I got tired of dealing with Wordpress so I made my own <em>better</em> blog :D</p>
<p><strong>Features:</strong></p>
<ul>
<li>custom javascript!</li>
<li>hosted on github!</li>
<li>okay, I admit I just wanted to learn how websites work lol</li>
</ul>
<p><img src="https://www.vmcdn.ca/f/files/via/import/2019/08/01101315_honda-celebration-of-light-vancouver.jpg;w=960" alt="fireworks"></p>
<p>p.s. if anyone is interested in participating in hackathons email me :d</p>

<p>Made with <a href="https://markdowntohtml.com">https://markdowntohtml.com</a></p>
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
    },
]
