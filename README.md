# Hotel Project README

This project is a simple hotel listing application built using React and Tailwind CSS. It includes a folder structure, JSON data, and components organized to showcase hotel details for different cities.

## Folder Structure

- `Frontend`: The root folder of the project.
- `src`: The source code directory containing all the React components and data.
- `Components`: A folder that contains different components organized into subfolders.
  - `Layout`: Contains components related to the layout of the application.
  - `Global`: Contains global components like the navigation bar.
  - `Home`: Contains components specific to the home page.
- `JSON`: A folder that contains the JSON data for hotels.

## JSON Data

The `hotels.json` file contains hotel data for various cities, including "London," "Mumbai," "Paris," and "New York." Each city is represented as an array of objects, with each object containing details about a specific hotel.

Here's an example structure of the JSON data:

```json
{
  "london": [
    {
      "id": 1,
      "name": "Hotel London One",
      // Other hotel details...
    },
    // More London hotels...
  ],
  "mumbai": [
    {
      "id": 10,
      "name": "Mumbai Hotel Paradise",
      // Other hotel details...
    },
    // More Mumbai hotels...
  ],
  // More cities...
}
```


## Tailwind CSS

This project utilizes the Tailwind CSS framework for styling. Tailwind CSS is a utility-first CSS framework that allows you to apply styles directly to HTML elements using class names.
In the project's components, you'll find the use of Tailwind CSS classes for styling elements, making it easy to create responsive and visually appealing user interfaces.
