
# InstantSearch

## Overview
<p>Used concerts dataset (provided by Algolia) and React app using Algolia's InstantSearch API
to build a searchable index. </p>
<p>The goal of the project was to successfully demonstrate a working app, using Algolia's InstantSearch API.</p>
I used a Windows machine for development. I used wget to download the large JSON file containing the concert dataset.
From there, I used Algolia's dashboard to upload the dataset, and added configurations to the index.
I made the index searchable by all 3 attributes - name, date, and location. I opted to set the default
sorting by the date, and adding a custom ranking for the name and location attributes.
I also enabled pagination. Lastly, I added all 3 aforementioned
attributes for faceting, which was necessary for the RefinedList.</p>
<p>I originally used only the RefinementList and Searchbox options with InstantSearch, and proceeded
to add Pagination, and PoweredBy widgets. I had some trouble adding the last widget - Autocomplete, as
I have very little frontend experience, and no React experience so it took some time to fix a few issues I had with integrating the Autocomplete
widget, but the documentation was very helpful in solving those problems.</p>
<p>I overall enjoyed the project, and it gave me a great chance to gain familiarity with Algolia's InstantSearch product and how to integrate it into an app.</p>

## Widgets Used
<ul>
    <li>Autocomplete</li>
    <li>RefinementList</li>
    <li>Pagination</li>
    <li>PoweredBy</li>
    <li>CurrentRefinements</li>
    <li>ClearRefinements</li>
