# Challenge Frontend - React
Convert the following design to a Single Web Application (SPA):

![Logo](logo.jpeg)

![Screenshot 1](screenshots/screenshot1.png)

[Figma](https://www.figma.com/file/szAbOw9emV2pQE3WfWstcf/Shoppy-app-ui-(Community)?node-id=103%3A2)


## Instructions
- Fork this project, work and make a pull request when you're done
- Consulting the [API](https://dummyproducts-api.herokuapp.com/) you must do the following tasks:
    - List the 9 first departments available in (/api/v1/departments) below the topbar (choose the image that fits the best)
    - When the user clicks in one of the departmens a filter should be done and the result should be listed
        - Product Name, Product Type, Price, Stars, Image and the product with the less value in the list should have the tag "`50% OFF`"
    - When the user search a product in the search bar, the expected result should be a filter with the input consulting the API
    - When the user clicks "Add" the product should be added to the cart (changing it's number only)    


## Requirements
- Use a popular Javascript library ([React](https://reactjs.org/))
- Your application must be responsive (we did not create a mobile design version because we want to see your solution to this problem)
- Unit tests
- **Deploy your application on a free host service and add the public link on this file**

## Tips
- We ❤️ animations, code coverage and end-to-end tests