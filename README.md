# AI-Powered-Pitch-Generator

An MVP implementation of a **Pitch Generator** that automates the creation of custom pitch decks and campaign recommendations using dynamic input parameters. This project aligns with the **PARC Collateral and Pitching initiative** and is built using **React and TypeScript**.

---

## Table of Contents

- Overview  
- Features  
- Demo  
- Installation  
  - Prerequisites  
  - Setup  
  - Running the Application  
- Code Explanation  
- Contributing  
- License

---

## Overview

The **AI-Powered Pitch Generator** enables the creation of automated, AI-driven pitch presentations by gathering key inputs such as **client information, industry vertical, campaign objectives, and budget**. 

It offers:  
- **Pre-built recommendations** to optimize ad strategies.  
- **Competitive insights** to refine targeting efforts.  
- **Industry benchmarks** for evaluating campaign performance.

Future iterations will integrate real-time data and AI-powered insights for more effective pitches.

---

## Features

- Collects campaign details via **interactive input forms**.  
- Provides a **budget slider** to set financial limits.  
- **Auto-generates pitch decks** and displays tailored recommendations.  
- Offers **competitor insights** and **industry benchmark reports**.  

---

## Demo

Once you generate a pitch, the MVP delivers the following outputs:  
1. **Pitch Deck**: View or download a presentation tailored to the campaign's parameters.  
2. **Actionable Recommendations**: Suggested actions, such as increasing mobile ad spend or implementing retargeting.  
3. **Competitive Insights**: A summary of top competitors' performance in the chosen industry.  
4. **Industry Benchmarks**: Metrics comparing the client’s performance with industry standards.

---

## Installation

### Prerequisites

Make sure the following tools are installed:  
- **Node.js** version 14 or higher  
- **npm** or **yarn** package manager  
- **Git** for version control  

---

### Setup

1. Clone the repository:  
   ```  
   git clone https://github.com/your-username/pitch-generator.git  
   cd pitch-generator  
   ```  

2. Install the dependencies:  
   ```  
   npm install  
   ```  
   or  
   ```  
   yarn install  
   ```  

---

## Running the Application

1. Start the development server:  
   ```  
   npm run dev  
   ```  
   or  
   ```  
   yarn dev  
   ```  

2. Open your browser and go to:  
   **http://localhost:3000**  

This will launch the Pitch Generator locally on your machine. You can now enter client details and generate pitches to see the results in real time.

---

## Code Explanation

The `pitch-generator.tsx` file contains the core logic of the MVP:  

- **State Management**: Uses `useState` to store input values and handle UI interactions.  
- **User Interface**: Builds forms with `Input`, `Select`, and `Slider` components for gathering user input.  
- **Generate Pitch Logic**: When the user clicks **Generate Pitch**, the `handleGenerate` function updates the state to display recommendations, insights, and benchmarks.  
- **Icons & Visuals**: Uses icons like `ChevronRight`, `BarChart`, and `TrendingUp` to enhance the UI.

---

## Contributing

1. Fork the repository.  
2. Create a new branch:  
   ```  
   git checkout -b feature-name  
   ```  
3. Make your changes and commit:  
   ```  
   git commit -m "Add feature description"  
   ```  
4. Push your changes:  
   ```  
   git push origin feature-name  
   ```  
5. Open a pull request.

---

![Uploading Pitch Generator 2.0.gif…]()
