Lu Var: 295 Hours

Hours Worked
•Designing Products and Layouts (46 hours)
•Website (249 hours)



Stack: Vanilla (HTML, CSS, JS)

Objective: Create a professional website from scratch using your own assets - 
•Must be a 3 page website 
•Must create products
•Must have a functional cart (calculator)



What's the most technically challenging part of this project and why?
Design was the most challenging aspect of the entire project. I didn’t realize this until I started making the cart calculator 
and had trouble integrating data from modals. Everything became apparent when I made the website pages responsive 
and did some parts faster than others. 

Further Reasoning: I made my design without considering mobile devices and without thinking about how to use minimal media queries. 
This led to a lot of time being wasted and me having to readjust code more often. 

In addition, I rewrote a lot of sections because I didn’t use one stylesheet or one javascript file. If I spent more time designing, 
I could have finished quicker. I wouldn’t have to write too much code and I could’ve scheduled my weeks more easily. 




Realizations: 
•Backup Matters | Using git or any repository is a necessity. Not only is saving code important but 
implementing different features requires backups. Using git allows you to create new branches to experiment. 

•Design matters | The simpler the design, the easier it is to maintain

•Classes matter | While obvious, I could have leveraged classes better to avoid writing more code. There were different sections 
that looked somewhat similar but could have all been shared by a class. 

•Formatting matter | I wasted a lot of time making my code neat when I could have spent less than 5 minutes 
cleaning and indenting my code with VS extension. 





Problems:

Major:

•(1)  Products Not Updating in prodDesc Modal |
 A user would choose  a gray button to change the product section and it wouldn’t refresh. This led to the productView messing up.
 
>>Too much delegation leads to different processes overriding previous functions. 
I had to erase previous functions and simplify the code to work in fewer areas. 


  •(2) Incorrect Cart Total. 
The problem was how I updated the total. When products are added through the checkout cart, they aren't registered to the outer buttons 
that add products through the homepage. When a new product is pressed, the total starts from the last time the user pressed 
the product through the homepage. 

>>Updating and using the same variable for add/delete buttons and regular buttons fixed the issue. This caused many headaches



• (3) Making the Sidebar Stop |
Making a moving sidebar was just trial and error for me. Making the sidebar stop was the challenge. 
I couldn't find a property that forced the sidebar to pause in it's sticky state. 

>> Changing the sidebar’s position type through JS allows it to stop. 
 

• (4) Making the Sidebar Go Back Up | 
After I figured out how to stop the sidebar, it wouldn't return up because of it's 
changed position. 
>> For a stop and return, I used an element’s coordinates instead of scrollY. ScrollY differs on different devices because of device height 
but using .getBoundingClientRect() on an element will always adjust the needed stop point to send the sidebar up or to stop. 



• (5) Creating Wrappers for Dynamic Elements |
When creating new product boxes for the checkout section, div's had no wrappers. I tried using an incrementing count that would update when a product boxe was created but it didn't work. It failed because the updated count couldn’t be accessed while created. 
>> There are 2 solutions that do the same thing. 
Solution 1:
	    testTextBox.parentNode.insertBefore(testBox, testTextBox);
                testBox.appendChild(testTextBox);

Solution 2:
            testBox.before(testTextBox);
            testBox.appendChild(testTextBox);

Both these solutions create wrappers by appending elements (children)  to other elements (parent). I chose the 2nd solution because it's a newer approach of DOM manipulation and is supported by all web browsers. It also saves some space.




•(NA) Retrieving Data from Products |
I had difficulty adding a product description section because my webpages are static. To be efficient, 
I have to be using a server to retrieve product information. While I know 
SQL, I'd have to learn PHP and that would have to drag this project out. I also wanted to keep this project vanilla (HTML, CSS, JS). 

>> I settled for modals. However, this forced me to use (parentElement.firstElementChild) frequently. 





Minor: 

•  Sidebar breaking | 
This was a minor problem with major consequences. Since I used position sticky for the sidebar, it broke when paired 
with overflow-x:hiddenon the body and html. 

>> Removing the overflow-x:hidden and just placing it in the body tagged fixed my problem. 

• (NA) Display: block makes a href button responsive but breaks layout. 
>> Absolute positioning is needed with Display: Block. 


• (NA) The footer breaks layout because it's not included in grid

• (NA) CSS grids will create column automatically if auto columns is not specified  

• (NA) The window.onclick  doesn't work for multiple modals. 

• (NA) Clip is inherited (included) in pseudo element. 





Lu Var (V2 Future Revisions)
•Data Accessibility to Simplify and Beautify 
•A Checkout that Accepts Card Payments (prototype, not an actual store)
•Adding Viewer Column Button (make view smaller or larger)
•More Interactive Content (videos, animations, etc)


















Disclaimer: I was inspired by these watch/sunglass brands (websites) - Vincero, Rolex, Omega, and Ray-Ban.

My products are recreations of existing assets from Vincero and Ray-Ban. All original designs that I used are included in a 
folder within this project. I do not claim to own these assets. Everything done is for educational purposes 
and no money is being generated through this site. All rights to these original assets lie with Vincero and Ray-Ban. 