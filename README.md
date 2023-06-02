# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Axel Andersson | 361936|
| Eva Cramatte   | 297255 |
| Antoine Salaün | 272621 |

Report link : https://www.overleaf.com/8836511649thsmnssqrsyt

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
> Hint: some good pointers for finding quality publicly available datasets ([Google dataset search](https://datasetsearch.research.google.com/), [Kaggle](https://www.kaggle.com/datasets), [OpenSwissData](https://opendata.swiss/en/), [SNAP](https://snap.stanford.edu/data/) and [FiveThirtyEight](https://data.fivethirtyeight.com/)), you could use also the DataSets proposed by the ENAC (see the Announcements section on Zulip).


> We will use "Glacier Lake Outburst Flood Database V3.0" (Lützow, N., Veh, G., and Korup, O.: A global database of historic glacier lake outburst floods, Earth Syst. Sci. Data Discuss. [preprint], https://doi.org/10.5194/essd-2022-449). 

> The quality of the data is good. The source is very reputable, the creator of the dataset is Earth System Science Data (ESSD) which is an international journal which publishes articles which have used original research datasets. ESSD seems to have a high standard on data quality. The dataset is composed from various scientific experiments on glacier lake outburst floods (GLOFs) from different times and some of the data are manually mapped from the authors at ESSD (Natalie Lützow, Georg Veh, and Oliver Korup) such as the glacier lake areas before and after a GLOF has occurred. The fact that the dataset is a composition of many other datasets does however mean that there are a lot of missing values. Fortunately, the fields in the dataset which we intend to use the most does not have too many missing values. 

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

>

> This project will focus on Glacial lake outburst floods (GLOFs). 
> Glacial lakes are lakes found at the foot of a glacier. They are formed by the melting of the glacier. Sometimes, when the lake is filled, or for geological reasons, the dam can fail or rupture, releasing large amounts of water downstream in what is known as a Glacial Lake Outburst Flood (GLOF). These events are difficult to predict and can cause devastating damage to infrastructure, settlements, and ecosystems, and also threaten human lives.  
> Glaciers are highly sensitive to climate change. Changes in temperature and precipitation patterns can have a significant impact on the size, shape, and behaviour of glaciers. As, on a global scale, temperatures rise, glaciers melt at a faster rate than they accumulate snow and ice. This leads to a decrease in glacier volume and mass, resulting in a visible retreat. 
> With our data visualisation, we want to show how glaciers evolve in an overall trend and link GLOFs episodes with observable changes.


### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data
> 
> See eda.ipynb, the jupyter notebook contains some visualizations and descriptive statistics of the dataset as well as some comments!

### Related work

> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

> The WGMs glacier data has already been used around the world to make analyses and predictions about glacier evolution, especially about climate change.  The GLOFs data of the University of Potsdam are mainly a compilation of numerous datasets from historical archives or other available data. These data make it possible to visualise spatially and temporally the different GLOFs episodes recorded. These data make it possible to visualise spatially and temporally the different leakage episodes recorded but also an analysis of the bias existing because of the increasing of the data recorded. 

> One of our visualizations could be similar to one done by the authors of the dataset, (see http://glofs.geoecology.uni-potsdam.de). It is an interactive map over GLOFs, build upon this idea by for instance adding scrollbar for time. This would show this map at a particular point in time.

> Lectures, 
> Chart and Map here are very interesting and could be a source of inspiration (https://globaldatalab.org/)
> The WGMs glacier data has already been used around the world to make analyses and predictions about glacier evolution, especially about climate change. The GLOFs data of the University of Potsdam are mainly a compilation of numerous datasets from historical archives or other available data. These data make it possible to visualise spatially and temporally the different GLOFs episodes recorded. These data make it possible to visualise spatially and temporally the different leakage episodes recorded but also an analysis of the bias existing because of the increasing of the data recorded.

We believe that our approach is original as the topic is niche but the consequences can be huge on populations. Moreover, by combining this dataset with climate change data, the GLOF events would be registered in a wider story. Eventhoug, GLOF events seem very randomly distributed, our goal is to show that this distribution is changing quickly with the rapid rate of global warming which is even more intense in glaciers (especially in the alps).

One question that still has to be answered is whether the visualisation will focus on a certain region. If the amount of data is sufficient, we intend to restrict our focus to the alpine glacier lakes.

The following website offers a very complete map of GLOFs. However, the story behind this data is hard to read and we aim at vizualising this data with a stronger narrative. http://glofs.geoecology.uni-potsdam.de


### Resources

> WGMS (2022): Fluctuations of Glaciers Database. World Glacier Monitoring Service (WGMS), Zurich, Switzerland. https://doi.org/10.5904/wgms-fog-2022-09

> Lützow, Natalie, & Veh, Georg. (2022). Glacier Lake Outburst Flood Database V3.0 [Data set]. Zenodo. https://doi.org/10.5281/zenodo.7330345

> Lützow, N., Veh, G., and Korup, O.: A global database of historic glacier lake outburst floods, Earth Syst. Sci. Data Discuss. [preprint], https://doi.org/10.5194/essd-2022-449, in review, 2023. 

> Allen, S. K., Sattar, A., King, O., Zhang, G., Bhattacharya, A., Yao, T., and Bolch, T.: Glacial lake outburst flood hazard under current and future conditions: worst-case scenarios in a transboundary Himalayan basin, Nat. Hazards Earth Syst. Sci., 22, 3765–3785, https://doi.org/10.5194/nhess-22-3765-2022, 2022.

> Taylor, C., Robinson, T.R., Dunning, S. et al. Glacial lake outburst floods threaten millions globally. Nat Commun 14, 487 (2023). https://doi.org/10.1038/s41467-023-36033-x

>https://globaldatalab.org/

>

## Milestone 2 (7th May, 5pm)

**10% of the final grade**

For this milestone we have come up with a pretty clear idea of what to do. A link to a functional but not yet finished website can be found [here](https://com-480-data-visualization.github.io/project-2023-la-compagnie/).

### List of what we want to accomplish

1. *3D map that shows GLOFS happening over time*
    
    The user has the possibility to use a slider to move across time. The slider will show information about the CO2 atmospheric concentration and the average temperature increase since pre-industrial time.
    
    GLOFs will pop out on the map as a localised tall cuboid. Over time, it will decrease in size and its base will spread out. It goes from a strong localised event at t=0 to a large spread out event at t=20y.
    
    The map will focus on the alps and its goal is to show where and when GLOFs happen and if they are related to climate change. A sketch of this visualization can be found here:
    ![main_viz_sketch](https://user-images.githubusercontent.com/86422959/236472586-90de7e0f-00cd-4067-8164-3d3c07b0fee0.jpeg)
    
    An inspiring project can be found in this [repository](https://github.com/GeoForum/veiledning09). They analyse traffic data in Oslo, we aim to do something similar but for glacier lake outburst floods and with a toggle bar as mentioned above so that the user can move forwards and backwards in time.
    
2. *Interactive Globe*    

    To also get an overview of how GLOFs are spread out in the rest of the world, we intend to make a visualization which looks something like the visualizations found on this [page](https://experiments.withgoogle.com/chrome/globe). A globe with data spikes that represent occurences of GLOFs. The globe will be interactive so that the user can spin it and view different parts of the world.
    
    The first visualization and this second one are the core visualizations.
    
3. *Selected statistics*
    
    A few specific statistics will be chosen to show the importance of GLOFs on population and how they consititute a natural catastrophe similar to earthquackes or typhoons
    
4. [BONUS] *Scatter plot of water volume over time*
    
    A sample of GLOF events (the ones that have volumetric data) will be shown as dots on the plot. Time is linked to the horizontal axis while volume is on the vertical axis. The color of the dot is linked to the continent where it happened. 
    
    When sliding the cursor over the dots, the dot will get a bit bigger revealing more data.
    

### Tools & Lectures
To realise these visualizations we will use HTML, CSS and Javascript of course. The JS libraries which will be required for visualization 1 and 2 are primarily [three.js](https://threejs.org) for all the 3d stuff as well as [d3.js](https://d3js.org) to handle the data. To build the website we have used a free template from [StyleShout](https://styleshout.com) which has been quite extensively modified. The website is currently hosted at Github Pages.

The lectures which will be useful for our project is, apart from all the lectures in the beginning about (HTML, CSS, JS and d3), the lecture on maps and the Do's & Don'ts lectures. 

### Internal Milestones / Sub-Goals
So far, we have a functioning website and we have also begun to implement the second visualization (the interactive globe), a demo video of what we have so far for this viz can be found in the globe-recording.zip file. The code for the interactive globe can be found in the globe_viz.html file and the Javascript-code in the /js-folder, in the file called globe.js.

We have yet to do:
1. Integration of the interactive globe-visualization to the website
2. Implementation of the first visualization (3D-map conceptualized in the sketch)
3. Integration of second viz to website
4. Implementation of other eventual bonus-vizzes.
5. Overall prettifying of the website.

## Milestone 3 (4th June, 5pm)

**80% of the final grade**

Link to website: [website](https://com-480-data-visualization.github.io/project-2023-la-compagnie/).

#### Explanation of Files

index.html - Entry point to the website (main page)

globe.html - Globe visualization HTML-file

map_index.html - Map visualization HTML-file

css/globe_styles.css - CSS file to globe.html

css/map_styles.css - CSS file to map_index.html

css/styles.css - CSS file to main page of website

js/map.js - Map visualization Javascript file.

## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

