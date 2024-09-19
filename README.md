Hotel Management System
Overview
The Hotel Management System is a React-based application designed for managing hotel operations. It features user authentication, task scheduling, and summary insights. The backend is powered by Strapi, providing a flexible and customizable content management system.

Features
User Authentication: Secure login and user management using Auth0.
Task Scheduling: Interactive calendar for viewing and managing tasks.
Dynamic Summaries: Fetch and display summary data for hotel operations.
Booking Management: View and manage hotel bookings.
Components
Header: Displays a welcome message, notification icon, and user avatar dropdown.
Summary: Shows key metrics such as total arrivals, bookings, and check-ins.
StaffScheduler: Interactive calendar for managing and viewing tasks.
Service: Displays hotel services with booking options.
Navigation: Sidebar for navigation within the application.
LoginButton & LogoutButton: Handles user authentication with Auth0.
PageNotFound: Custom 404 error page for handling missing routes.
Installation
Frontend
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install Dependencies

bash
Copy code
npm install
Run the Application

bash
Copy code
npm start
Set Up Auth0

Configure Auth0 by adding your Auth0 domain and client ID to your environment variables or configuration files.

Backend (Strapi)
Clone the Strapi Repository

bash
Copy code
git clone https://github.com/your-username/strapi-backend.git
cd strapi-backend
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables

Create a .env file in the root of the Strapi project with your environment variables. Example:

env
Copy code
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=your_jwt_secret
Run Strapi

bash
Copy code
npm run develop
Strapi will be available at http://localhost:1337.

API Endpoints
Task API
Endpoint: http://localhost:1337/api/tasks
Method: GET
Description: Fetches all tasks.
Summary API
Endpoint: http://localhost:1337/api/summaries/1
Method: GET
Description: Fetches summary data for the dashboard.
Booking API
Endpoint: http://localhost:1337/api/bookings
Method: GET
Description: Fetches all bookings.
Strapi Configuration
Content Types
Tasks

Fields:
title (string)
date (date)
assignedTo (string)
department (string)
status (string)
eimage (media)
Summaries

Fields:
totalArrived (integer)
totalBooked (integer)
totalCheckIn (integer)
Bookings

Fields:
guestName (string)
roomNumber (string)
checkInDate (date)
checkOutDate (date)
status (string)
Roles & Permissions
Ensure that appropriate roles and permissions are set in Strapi to allow API access.

File Structure
src/
components/
AvatarDropdown.js
BookingList.js
Header.js
Navigation.js
Service.js
StaffScheduler.js
Summary.js
Dashboard.js
LoginButton.js
public/
index.html
package.json
README.md
strapi-backend/ (Strapi project)
api/
config/
database/
models/
config/
package.json
README.md
Usage
Login: Click the login button to authenticate via Auth0.
Navigate: Use the sidebar to access different sections of the application.
Schedule Tasks: View and manage tasks using the calendar in the StaffScheduler component.
View Summaries: Check key metrics and insights in the Summary component.
Manage Bookings: View and manage bookings with the BookingList component.
