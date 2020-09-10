Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

>Hi George,
>
>Thanks for reaching out to the Algolia team. Not a problem.
>
>A record is an object you add to an index and want to search for. It can contain any number of attributes. An example, formatted in JSON, is:
>
>{
>    "name": "Tesla",
>    "CEO": "Elon Musk",
>    "Headquarters": "Palo Alto, CA"
>}
>
>Indexing, put simply, is pushing your data to an index you create in Algolia. You can create the index either using your account dashboard or with one of Algolia's API's, which can be found here (link: https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/ecosystem/#api-clients). Similarly, there are multiple ways to push your data: by using one of Algolia's API's, your dashboard, or with Algolia's crawler, which lets you automatically crawl your content directly from your site and index it into Algolia.
>
>Regarding metrics that would be useful to include in the "Custom Ranking", the metric can be a raw value like the number of sales, views, or likes; or, it can be a computed value such as a popultarity score that you claculated before adding the record to Algolia. Keep in mind the custom ranking field will accept any type of numerical or boolean value that represents the relative relevance of your records. An example of raw data we like to use when describing Custom Ranking is sorting tweets. On top of relevance, you will want to take into account data like retweets and likes.
>
>I've included some links below if you'd like to read further into our documentation. Please let me know if I can help with anything else. Thanks for being an Algolia user!
>
>https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/configure-custom-ranking/#metric-types
>https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/controlling-custom-ranking-metrics-precision/
>https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/
>https://www.algolia.com/doc/faq/basics/what-is-a-record/
>
>Best,
>Mangesh

Question 2: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

>Hi Matt,
>
>Thanks for reaching out to the Algolia team! We appreciate your feedback. I can forward this to our product and design team for future updates. In the meantime, you can easily clear and delete indices using one of the Algolia API's. I've attached the links to the specific parts of our documentation below. Please let me know if I can help with anything else. Thanks for being an Algolia user!
>
>https://www.algolia.com/doc/api-reference/api-methods/clear-objects/
>https://www.algolia.com/doc/api-reference/api-methods/delete-index/
>
>Best,
>Mangesh

Question 3: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

>Hi Leo,
>
>Thanks for reaching out to the Algolia team! I can assure you that the development process is very straightforward, fast, and smooth. The high level process involves first pushing your data to indices in Algolia. This can easily be done by uploading JSON files in your dashboard, using one of our API's, or by using Algolia's crawler which lets you automatically crawl your content directly from your site and index it into Algolia.
>
>Next, you choose indexing settings (how you want to set default options, custom rankings, sorting, and so forth) using either the Algolia API or your account dashboard.
>
>Last, you integrate the frontend Instant Seach API to your frontend client. You don't need to worry about making complicated backend API calls and having to communicate the response with the frontend client, or even having to build out a search UI; all of this is taken care of by Algolia's InstantSearch API.
>
>That's all there is to it! I've included some links below if you'd like to read further about our products or API's, as well as a link to an interactive tutorial which will show you how easy the process is. Please let me know if I can help with anything else. Thanks for being an Algolia user!
>
>https://www.algolia.com/products/instantsearch/
>https://www.algolia.com/doc/onboarding/#/pick-dataset
>https://www.algolia.com/doc/
>
>Best,
>Mangesh
