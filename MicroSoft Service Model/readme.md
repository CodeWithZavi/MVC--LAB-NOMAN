# Fetch School Data Application

## Overview
This project is a Node.js-based web application designed to fetch and scrape data from external sources. It demonstrates the use of APIs for data retrieval and web scraping techniques using Cheerio when an API is not available. The application also serves static files and includes routes for menu and person data management.

## Features
- Fetch data from external APIs (e.g., `https://school.com/api/data`).
- Scrape data from websites using Cheerio if an API does not exist.
- Serve static files from a `public` directory.
- Modular routing for menu and person-related functionality.
- Environment variable support for configuration.

## Requirements
- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and specify the following variables:
   ```env
   PORT=3000
   ```

4. Create a `public` folder in the root directory and include an `index.html` file.

5. Set up the `routes` folder and define the `menuRoutes` and `personRoutes` modules as per your requirements.

## Usage
### Start the Application
Run the following command to start the server:
```bash
node app.js
```

The server will run on the port specified in the `.env` file (default: 3000).

### Access the Application
- Open your browser and navigate to `http://localhost:3000`.

### Routes
#### Base Route
- `GET /`
  - Returns a welcome message or serves the `index.html` file.

#### Menu Routes
- `GET /menu`
  - Handles menu-related operations. (Define details in `menuRoutes`.)

#### Person Routes
- `GET /person1`
  - Handles person-related operations. (Define details in `personRoutes`.)

#### Fetch School Data
- `GET /get-school-data`
  - Fetches data from the external API at `https://school.com/api/data`.

#### Scrape School Data
- `GET /scrape-school-data`
  - Scrapes data from the `https://school.com` website if no API exists.
  - Example scraping logic extracts elements with the class `.some-class`.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework.
- **Axios**: HTTP client for API requests.
- **Cheerio**: Library for web scraping.
- **dotenv**: Environment variable management.
- **body-parser**: Middleware for parsing incoming JSON requests.

## File Structure
```plaintext
src
├── public
│   └── index.html
├── routes
│   ├── menuRoutes.js
│   └── personRoutes.js
├── app.js
├── db.js
└── .env
```

## Example
### Fetch Data from API
Request:
```bash
curl http://localhost:3000/get-school-data
```
Response:
```json
{
  "success": true,
  "data": { ... }
}
```

### Scrape Data from Website
Request:
```bash
curl http://localhost:3000/scrape-school-data
```
Response:
```json
{
  "success": true,
  "data": [
    {
      "title": "Sample Title",
      "link": "https://school.com/sample-link"
    }
  ]
}
```

## License
This project is licensed under the MIT License.

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request.

---
For further inquiries, contact [Code With Zavian](mailto:support@example.com).

