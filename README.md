# FSD Video Rental Store Frontend
This is my fifth project of GeeksHubs Academy FSD bootcamp.

The objective is to create a web Application Frontend simulating a video store  business model using React library. This project complements the previous one, in which we did the backend part with Express and Sequelize.


Functionality has been sought over design, trying to simulate a real scenario where an application of this style would take the purely informative data from external APIs and use database only to execute the user orders.

The backend has been modified at several points to adapt to this real functionality.


[Structure](#structure)

* [Home](#home)

* [Movie detail](#movie-detail)

* [User Authentication](#user-authentication)
    
* [Shopping Cart](#shopping-cart)

* [User Profile](#user-profile)

* [Update Profile and Password](#update-profile-and-password)

* [Admin User](#admin-user)

* [Mobile First Design](#mobile-first-design)

[Technical Specs](#technical-specs)

[New Features Coming Soon](#new-features-coming-soon)

[Thanks](#thanks)


## Structure

### Home
Main view is home, where the app shows a rooster with top rated movies from The Movie Database.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/main.jpg)


The total amount of results is divided by pages. There is a pagination component at the bottom. All data is retrieved dinamically from TMDB when the user changes page.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/pagination.jpg)


User can go to watch movie details by clicking it or either searching it in the top search input bar. The searching bar automatically triggers a TMDB endpoint that searchs by title, so results are shown as the user types. Debounce functionality has been added for better performance.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/search.jpg)


This bar is accessible from the entire application.

### Movie Detail
In this view the specific details of the movie are mapped into different tabs.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/detail.jpg)

An expandable accordion allows additional cast information to be displayed.

At the bottom, a message is shown that user must be logged in for ordering the movie.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/logintoplace.jpg)

And up to here, the views limited to guest user. Now let's see the authentication system.


### User authentication
At the right-top, in the header, there is a burger button which shows a modal with user data. Different links are shown depending if the usser is logged or not.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/modal.jpg)


Both register and login form have all kinds of security, preventing the execution and warning the user in case of an error.

- While typing:
    - Check if passwords mismatch
    - Check if password is out of <6 >10
- When submit:
    - Check fields with regular expressions
    - Check if email or username already is registered

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/security.jpg)


When user signs in succesfully the application saves the credentials and now he can access to the client views.

When user is logged, the movie-detail view shows at the bottom the cart options.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/cartoptions.jpg)

By clicking Add button, adds actual movie in the shopping cart.
By clicking Quit button, removes actual movie from the cart if it had been previously added.
By clicking Go To Cart, it goes to Cart view.
A differente message is shown depending on the action.


### Shopping Cart
Shopping cart was not strictly necessary for this project but I preferred to include it as practicing with this feature.

In this view a list of all cart items added is shown.

User can remove items and by clicking Confirm Order, the orders are executed, saved in the database, and the cart is cleared.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/cart2.jpg)


Shopping cart data is managed by Redux so it remains in local storage even if the user closes the browser.


### User Profile
User can consult his profile data and the orders he actually owns at the profile view.
Profile view can be accessed by clicking on the username, at the user data burger button.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/profile.jpg)


### Update Profile and Password
User can modify his credentials through his profile view. By submitting, the is updated in the database and in Redux.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/updateprofile.jpg)



### Admin User
If the user signs in with "admin" rol, instead of going to profile view, he will go to Admin View.
In this view is shown all users, movies and orders data and the admin can manage it directly over database.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/admin.jpg)

Admin can modify each user profile or delete it from DB
![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/adminform.JPG)


### Mobile First Design
Minimalist and practical design has been used due to mobile necessities. As it can works both in laptops and mobile, breakpoints have been used to addapt to different screens.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/dev/src/assets/screenshots/responsive.jpg)



## Technical Specs.
* <a href='https://javascript.plainenglish.io/5-ways-to-optimize-your-functional-react-components-cb3cf6c7bd68'>Functional</a> components is the way used for build this React project because of their better performance potential.
* <a href='https://es.redux.js.org/'>Redux</a> has been used for credentials management and binding sibling components data.
* <a href='https://es.redux.js.org/'>Mantine</a> library has been used for several components like modals and forms. Although custom styles have been applied to them.
* <a href='https://styled-components.com/'>Styled-components</a> have been used in most part of the styles. It has been a first approach for me but I will continue implementing them in future projects.
* Different libraries for small details like <a href='https://geekflare.com/es/lodash-functions-for-javascript-developers/'>lodash</a> (for sticky header), <a href='https://momentjs.com/'>moment</a> (for orders date management) or <a href='https://tabler-icons-react.vercel.app/'>tabler-icons</a> (for cart icons)
* The project is <a href='https://dev.dkd1mdb9vgabn.amplifyapp.com/'>deployed</a> deployed with AWS Amplify.


## New Features Coming Soon
* Sign-in with Google accont. 
Feature was <a href='https://github.com/jmonloop/GeekshubsFSD_Pr05_VideoStoreFrontend/tree/googleAuthFeature'>implemented</a> but removed from production as now the application maps so many data from database credentials, and using Google Auth would mean having to redo a lot of code. So due of timing it not be able for this installment but it will be ready for the next.

* Advanced Search.
The advanced search view is actually in process but it will let user to do complex searchs through TMDB "discover" endpoint using many fields and selectors.


## Thanks

* Thanks to GeeksHubs Academy for the training received (https://github.com/GeeksHubsAcademy)

* Thanks to everyone who spends time spreading their knowledge in Stack Overflow.

* Created by Javier Monleón López (https://github.com/jmonloop)


