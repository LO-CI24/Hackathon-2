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

The functionality of Take the Money and Run was kept as simplistic as possible, to avoid confusing the user or providing unnecessary information.


##  6. Testing Documentation

All links function as detail lists above.

### Homepage

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/ec97d196-f796-4167-9de9-369acd43bbde)

### About Page

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/52afaf6a-c74e-49c7-bbf3-4114c416518e)

As can be seen, many errors. The majority of these errors came with Bootstrap, where expanding the Accordion on this page caused some duplicate ID tags. Additionally, an unordered list element was missing. These were resolved.

After fix: 

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/f2d814a3-c9a8-4b11-811d-1e2e8cf772f3)

As visible, there is still a duplicate ID error here. However, after examination, there is no known source of it, and it is headlined as an item to fix in a future iteration.

### Resources Page

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/331e676f-8e58-4c4a-84b3-acecd8772966)

### Contact Page

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/9a46c0ad-41e2-42eb-bedc-eb89672fad6d)

After fixes:

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/a101e713-63f2-442f-aa07-139ca4767796)


An unnecessary /div is found in the document.

### Success Stories

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/c197ead5-7eb3-4a6d-8618-fe908c041c6d)

### Take Action

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/a24343b4-d1d4-4321-93d1-f70dde10b6d3)

There are errors in the Take Action page. Unfortunately, we do not currently understand how to 'fix' this iframe issue. 

After fixes:
![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/c97229eb-1178-4f49-ba0e-415a2159c953)

Although the iframe error redundancy was removed, which removes the error in the validator, it is still running a redundant code somewhat which is non-responsive.

Itemised to fix in future update / iteration.

### CSS

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/7cab74a3-ac6a-4a85-8ae6-962adb87fa1c)

There is a remnant redundant CSS line for home-content-text, which will be removed. There are wrong syntax elements for resources-title and contact-title. 

After fixes:

![image](https://github.com/maria-grozova/Celebrating-Diversity/assets/139562112/ce231056-e1d9-4eb5-9778-0b8aa950689f)



## 7. Credits

This project was worked on and developed by a team of [INSERT FINAL COUNT] developers. 
These developers are... 
  
  **Team Leader / Project Manager / Scrum Leader**
- **Maria Grozova** (https://github.com/maria-grozova)

**UX Design / Lead**
- **Aeryx Rose** (https://github.com/SubjugatorofCSS)

**Documentation / Design / Flex / Bug Squasher Debugging**
- **Carl Jones** (https://github.com/c-e-jones)
  
##  8. Licencing Rights

For the construction of this website, we have used a number of assets which are not made by ourselves. They are, however, covered by Open Source licencing, and are fair use under a Creative Commons licence.

Tools used:
- [Bootstrap](https://getbootstrap.com) (CC BY 3.0)
- [Font Awesome](https://fontawesome.com/v4/icons/) (CC BY 3.0)
- [Google Fonts](https://fonts.google.com) (SIL Open Font Licence)
- [Pexels](https://www.pexels.com) (CC0)

## 9. Other Documents

Records of group meetings to discuss and deliberate the design process as well as daily stand-up and stand-down meetings can be found attached. 

[Hackathon Meeting Minutes (Introductions) – 31  05  24.docx](https://github.com/user-attachments/files/15533321/Minutes.from.Hackathon.Meeting.31.05.24.docx)

[Hackathon Meeting Minutes  - 03  06  24.docx](https://github.com/user-attachments/files/15533322/Hackathon.Meeting.Minutes.-.03.06.24.docx)

[Hackathon Meeting Minutes – 03  06  24 (UX).docx](https://github.com/user-attachments/files/15536152/Hackathon.Meeting.Minutes.03.06.24.UX.docx)
