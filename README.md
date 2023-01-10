### SPLITIT

##### A Social Media App that allows

##### Project Plans:

- Application allows users to post and comment in groups called Splits
- Splits are small collections of people that are by default private
- Users share posts in these splits, send messages and call

  - Similar to a groupchat, but more focused on the photos
  - For use as a way to document activities of the group

- Mobile Application
  - Built for users to upload and comment in different splits
  - Allows the uploading and scanning of receipts
    - User can activate a plan to split and pay off the bill

### Current Status:

##### State:

- Web version is up and running
- On the Web, user can:
  - Login/Register to identify themselves
  - Upload Images to a feed
    - On these posts, users can comment and like
  - Add/Remove Friends on the site
  - View the profile of any user on the site

##### Server:

- Information is stored in mongoDB
- Authentication with bcrypt, jsonwebtoken and mongodb
- Multer is used for uploading of photos/files
- Routes: auth (logging in or registering user), posts (creating, liking, commenting, and retreiving posts), users (getting and updating user data and their friends)
- Models: Post and User, self explanatory

##### Client:

- Built using MaterialUI, React, React-Router-DOM and React-Redux
- Theme for MaterialUI is set is theme.js
- State:
  - Handles user and their token, light/dark mode, posts
- Four Main Scenes
  - Profile, Home, Login, Register
- Components
  - FlexBetween: Reduces amount of css in .jsx files
  - Friends: Stores the icon and friend name in a widget, found on home/profile page
  - UserImage: Used whenever there is a profile
  - WidgetWrapper: Padding of the material
- Widgets
  - Smaller components that are not quite their own scene
    - AdvertWidget: Ad on home page
    - FriendListWidget: Shows the friends of a user
    - MyPostWidget: Widget for allowing user to upload/post on their feed
    - PostWidget: One Single Post
    - PostsWidget: Multiple Posts, consists of multiple PostWidgets
    - UserWidget: On home page, shows user information
