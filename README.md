![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Take the Money and Run
## A hackathon project by team **cj(s).jammers**

### Table of Contents
1. [Project Description](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#1-project-description)
2. [Hackathon Project Rules and Guidelines](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#2-hackathon-project-rules-and-guidelines)
3. [Background Research](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#3-background-research)
4. [Design Process](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#4-design-process)
5. [How to Use Celebrating Diversity](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#5-how-to-use-celebrating-diversity)
6. [Testing Documentation](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#6-testing-documentation)
7. [Credits](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#7-credits)
8. [Licencing Rights](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#8-licencing-rights)
9. [Other Documents](https://github.com/maria-grozova/Celebrating-Diversity/blob/main/README.md#9-ohter-documents)




##  1. Project Description

### Base Concept
This is a hackathon project for Code Institute, focusing on the development and building of a front-end website which incorporates JavaScript and an API. For the purposes of this Hackathon, we have selected to create a currency conversion application, which takes the daily rates for each currency and calculates exchanges.

The information within intends to inform and advise the user on how much their money is worth when exchanged from one currency to another.

The goal of the site owner and our objective is to be able to provide this infromation in an accessible, informative way, with a clean and clear UI. 

## 2. Hackathon Project Rules and Guidelines

As part of a hackathon project, there are rules and constraints enforced upon the team for the design of this project. 

### Rules

- This project was coded over a 2.5 day period, covering 03/07/24 - 04/07/24.
- The only items permitted before this day were setting up a repository, wireframing, project team meetings and basic documentation. Coding could not begin until 9am of the first scheduled day.

### Success Criteria

- Design a static Front-End web application using HTML, CSS and JavaScript based on the principles of user experience design, accessibility and responsivity. This Front-End application must incorporate an API, which provides the opportunity for the user to interact with it.
- Test a Front-End web application through the development, implementation and deployment stages
- Deploy a Front-End web application to a Cloud platform
- Maximise future maintainability through documentation, code structure and organisation
- Demonstrate and document the development process through a version control system such as GitHub
- Use an Agile methodology to plan and design a Front End Web application

##  3. Background Research

Researching for this project consisted of investigating the available APIs for collecting relevant currency conversion calculations. Many of these functions were 'freemium' model APIs, which offer a heavily limited free tier, and an additional paid tier which has available more features and requests. Many of these APIs were deemed insufficient for the project, due to the associated costs involved, but also the requirement of functions and features we have not been taught, such as node.JS. For example, OpenCurrencyConverter required node. 

For our project, we settled on using [FreecurrencyAPI](https://freecurrencyapi.com/docs/#official-libraries), which offered a large number of requests per month (5000), which enabled us to test our API without worry of running out, while also providing the MVP functions out of the box without any baggage.

##  4. Design Process

Our design process focused initially on a set of rich colours, which were possibly overbearing in tone. We settled on green as a main colour, as this was welcoming, while also having financial connotations. To help choose our colours, we used Coolors, to attempt to generate contemporary colouring.

![image (1)](https://github.com/LO-CI24/Hackathon-2/assets/139562112/57444d6c-128a-4d92-aa54-9d323a3179a8)

However, as mentioned above, this resulted in colouring which was just too aggressive. With this, we toned it back a moment, dropped one of the primary colours as it was not being used, and added transparency to another.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/03a7bd9e-a56a-4b69-bc4f-f3c3e208e2fe)

Although this cannot be seen in the above image, the Sea Green above is the one with a transparency modifier, adjusting it to #64906e33.

### Fonts

For our primary font we used for the website, we have selected Noto Sans, from the Google fonts library.

### Wireframing

For our wire-framing, we decided to stick to low fidelity wireframes. This is due to the fact that we are only creating a single page application, and the wireframes spoke for themselves in terms of what the design would be. The only additional level of fidelity would have been adding colouring to it, however, this seemed unnecessary.

![image (2)](https://github.com/LO-CI24/Hackathon-2/assets/139562112/67b78f84-b8b8-4f7a-94f8-4223d0401c5c)

### Coding the Site



##  5. How to Use Take the Money and Run

The functionality of Take the Money and Run was kept as simplistic as possible, to avoid confusing the user or providing unnecessary information. There is only a single page as part of this application, meaning links internally were not necessary. Our footer contains two external links, to mandatory attributions which we had to make, towards two external pages. These pages are [FreePik](https://www.freepik.com/) and [Free Currency API](https://freecurrencyapi.com/). 

The API itself, while using calculations behind the scenes, is a simple text input box, two dropdown input boxes, a button and a disabled text field.

If the user inserts a float into the first text input box, and then selects two different currencies and submits, they will then receive in the final box an output calculated conversion. 

This API is updated once daily by Free Currency API, meaning that these sums will only change once daily. 


##  6. Testing Documentation


## 7. Credits

This project was worked on and developed by a team of 3 developers. 
These developers are... 
  
**Leander Ots**
**Ted Aymler**
**Carl Jones**
  
##  8. Licencing Rights

For the construction of this website, we have used a number of assets which are not made by ourselves. They are, however, covered by Open Source licencing, and are fair use under a Creative Commons licence.

Tools used:
- [Bootstrap](https://getbootstrap.com) (CC BY 3.0)
- [Google Fonts](https://fonts.google.com) (SIL Open Font Licence)
- [Pexels](https://www.pexels.com) (CC0)
- [Free Currency API](https://freecurrencyapi.com/)
- [FreePik](https://www.freepik.com/)
