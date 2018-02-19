# Cat-Clicker

## Overview

This is an app that displays cats pictures, related names and numbers of clicks made on each of them. An "Admin" area allows updating cat data and re-render them after saving.

While its scope and functionality may appear trivial, it is part of the Udacity Front End Web Developer Nanodegree ([JavaScript Design Patterns course](https://eu.udacity.com/course/javascript-design-patterns--ud989))

The goals of this app are, among others, raising the awareness of the developer regarding code repetition, how to avoid spaghetti code, follow smart and scalable coding with reusable coding techniques.

## How to run the tool ?

Simply open the page https://alffox.github.io/cat-clicker/, then click on any cat name in the list to know more info. Upon click, the cat's info and picture will be displayed.

After the first click, the **Admin button** will also be activated. Upon click, this button will show the Admin area. Such area shows the currently clicked cat data and allows updating name, URL (full URL path e.g. http://... is supported) and clicks through the "Save and Refresh" button. The operation can be cancelled with the "Cancel" button.

## Technical notes

The app was created following the MOV (Model - Octopus - View) pattern, see more info @ https://en.wikipedia.org/wiki/Separation_of_concerns

You may notice minimal styling in the app: that's on purpose as the actual focus, in this project, is on the JS part.

## Contributing

Since this project is part of a tailored, self-paced, individual training, no contributions will be accepted