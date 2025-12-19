# GitHub Profile Visualizer

A React application built to search, visualize, and analyze GitHub profiles. This project fetches real-time data from the GitHub API to display user statistics, repositories, and contribution analysis.

## 🚀 Features

* **User Search:** Search for any GitHub user using their username.
* **Profile Overview:** View profile details like bio, company, location, and social stats.
* **Repository Browser:** A dedicated list of all public repositories for a user.
* **Detailed Repo View:** Deep dive into specific repository info, including contributors and tech stack.
* **Data Analysis:** Visual breakdown of user profile summaries and activity.
* **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop screens.

## 🛠️ Tech Stack

* **React.js** - Frontend library
* **React Router** - Navigation and routing
* **React Icons** - Professional UI icons
* **CSS** - Custom styling with Media Queries (no styled-components)
* **Loader Spinner** - Better User Experience during data fetching

## 📂 Project Structure

* `/src/components` - Contains all reusable UI components (Header, Loader, etc.)
* `/src/pages` - Contains Route components (Home, Repositories, Analysis)
* `App.js` - Main routing configuration

## 🔌 API Endpoints Used

| Feature | API URL |
| :--- | :--- |
| **Profile Details** | `https://apis2.ccbp.in/gpv/profile-details/{username}` |
| **User Repos** | `https://apis2.ccbp.in/gpv/repos/{username}` |
| **Repo Item Details** | `https://apis2.ccbp.in/gpv/specific-repo/{username}/{repoName}` |
| **Profile Summary** | `https://apis2.ccbp.in/gpv/profile-summary/{username}` |

## ⚙️ Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/TejaYeshamoni/Tej-GitHub-Profile-Visualizer-.git]
```

2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm start

```


## 📜 License

This project was developed as part of an individual assessment.

---

**Developed by [Teja Yeshamoni**](https://www.google.com/search?q=https://github.com/TejaYeshamoni)
