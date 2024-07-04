![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Take the Money and Run
## A hackathon project by team **cj(s).jammers**

### Table of Contents
1. [Project Description](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#1-project-description)
2. [Hackathon Project Rules and Guidelines](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#2-hackathon-project-rules-and-guidelines)
3. [Background Research](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#3-background-research)
4. [Design Process](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#4-design-process)
5. [How to Use Take the Money and Run](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#5-how-to-use-take-the-money-and-run)
6. [Testing Documentation](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#6-testing-documentation)
7. [Credits](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#7-credits)
8. [Licensing Rights](https://github.com/LO-CI24/Hackathon-2/blob/main/README.md#8-licencing-rights)




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

**JavaScript**

As the JS is the primary element of the assessment of this Hackathon, it will be reviewed first. 

Below is the fetch request for the API. This is written to collect the JSON, and within that JSON it collects the data within the object. The API chosen stores the information as an array, which has a second level of data. The data.data in this instance grabs both elements which are stored as [CURRENCY_CODE : CONVERSION_RATE] with both elements serving as strings, and the conversion rate is necessary for our calculations. This is an await function, as it is necessary for the function to complete fully before it runs the next block of code.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/3269c7ef-cc50-4d70-a0b0-6c3f76788017)

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/e73727f5-4f38-4bca-ad63-0caa139f836e)

This information is then passed into an async function. This function first parses the string for the conversion rate to a float. It then collects the information for which currencies are selected from a getElementByID function which targets the selectors. It then identifies which is the currency to convert from, and which is the currency to convert to. From there, it then converts those currencies into the appropriate sum, and displays that result in the text box 'result' in the HTML.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/4ea46faf-5f9c-4468-aacf-0559de539f5f)

**HTML**

The HTML for the application calls on a number of external CDNs and libraries. As seen below, it calls on Bootstrap and Google Fonts.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/1ebf814b-7de2-4028-ba6d-66a8cb440d89)

The header is constructed using a Bootstrap Navbar, which has all link functionality removed. In essence, this makes it a simple branding bar. It includes our logo, and our title.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/3db19cec-9cbf-4d82-a645-3d400335cf59)

Similarly, our Hero image is also simplistically designed, calling just on a container, row and col, to make it responsive in the first instance. 

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/c57293bb-c3a2-427a-849c-66e6868aaead)

Our Main section is a bit more complexly put together, consisting of a number of input boxes. Each of these is assigned classes and IDs which allow them to targeted and selected by the JS and CSS.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/eb62296e-0f72-4460-9023-8335fbe0af1a)

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/b786df0c-4d7f-461c-aabb-b9a1c5a7ddb4)

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/6ebe57ef-1232-416e-b3e3-4644801b0d9f)

These input boxes allow for the user to input a sum they wish to convert, and then to select the origin currency and the target currency. Then, once they hit the Convert button, it presents the result in the disabled input box. This input box is disabled to prevent the user getting confused or inputting information into the incorrect box.

Our footer is also simple, consisting of just some containers, rows and cols, which have an empty col in the middle to align the other items within the container. Inside are two links, which are mandatory attributions.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/6a6b7267-f167-4bb7-b3a0-6f7f3c9b4a60)


**CSS**

Our CSS contains no surprises, consisting primarily of classes which have been targeted based on their placement within the HTML to change colours and add functionality where necessary.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/cf2fe03a-3668-4f0d-9887-829bedf36596)

The only true outliers in the CSS code are the specific overrides for Bootstrap default styling which had to be used to get items to position appropriately.

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/28f388e0-11e9-4e7f-bf13-736d0f2f9a9d)

![image](https://github.com/LO-CI24/Hackathon-2/assets/139562112/72e661a3-e960-4167-97b9-257d3ea35a88)

As seen above, a number of override inputs were necessary. This was due to our selection of Bootstrap 5.2, which is not the version of Bootstrap we learned upon. This means that the gutter functions and how they operate have changed, and it was more expedient to simply kill all of the guttering than to attempt to solve in the Sass / SCSS compilation for Bootstrap this information was stored.

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
  
##  8. Licensing Rights

For the construction of this website, we have used a number of assets which are not made by ourselves. They are, however, covered by Open Source licencing, and are fair use under a Creative Commons licence.

Tools used:
- [Bootstrap](https://getbootstrap.com) (CC BY 3.0)
- [Google Fonts](https://fonts.google.com) (SIL Open Font Licence)
- [Pexels](https://www.pexels.com) (CC0)
- [Free Currency API](https://freecurrencyapi.com/)
- [FreePik](https://www.freepik.com/)
