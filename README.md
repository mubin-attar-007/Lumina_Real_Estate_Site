# SAQ Associates - Ultra-Luxury Real Estate Platform

![SAQ Associates](https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200&h=400)

SAQ Associates is a premier digital experience for ultra-luxury real estate, designed to showcase high-end properties with a sophisticated, immersive interface.

## 🌟 Key Features

-   **Immersive Design**: Built with a "luxury-first" aesthetic using dark modes, gold accents, and fluid animations (Framer Motion).
-   **AI Concierge**: Integrated "SAQ" chatbot powered by **Google Gemini AI** (Serverless/Edge compatible) for 24/7 client assistance.
-   **Responsive & Interactive**: Fully responsive mobile menu, smooth scrolling (Lenis), and interactive property grids.
-   **Performance Optimized**: Lazy loading, optimized assets, and best-practice React architecture.

## 🛠️ Tech Stack

-   **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Language**: TypeScript
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **AI Integration**: [Google Generative AI SDK](https://github.com/google/generative-ai-js)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/saq-estates.git
    cd saq-estates
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env.local` file in the root directory and add your Google Gemini API Key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📂 Project Structure

```
src/
├── api/            # Serverless functions (Chat handler)
├── components/     # Reusable UI components
│   ├── common/     # Buttons, Modals, ChatWidget
│   ├── layout/     # Navbar, Footer
│   └── ...
├── config/         # Constants and Data (Mock CMS)
├── pages/          # Route pages (Home, Projects, etc.)
├── services/       # Data and AI services
└── types.ts        # TypeScript definitions
```

## 🔒 Security Note

-   **API Keys**: The `VITE_GEMINI_API_KEY` is designed to be used with the serverless handler (`api/chat.ts`). Do not commit your `.env.local` file.
-   **Data**: Currently uses a local mock provider (`dataService.ts`). Ready for Sanity CMS integration.

## 📄 License

This project is proprietary and confidential. Unauthorized copying of this file, via any medium is strictly prohibited.
