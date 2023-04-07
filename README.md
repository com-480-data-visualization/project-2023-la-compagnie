# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Axel Andersson | 361936|
| Eva Cramatte   | 297255 |
| Antoine Salaün | |

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
> 
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


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

