# RevoHotel

RevoHotel is a modern Hotel Booking Platform built with the latest web technologies. It allows users to browse rooms, make reservations, and handle payments seamlessly.

## 🚀 Deployed Link

https://crack-fe-rifqifzan.vercel.app/

## 🚀 Tech Stack

- **Framework:** [Next.js 15.2.2](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma 6.5.0](https://www.prisma.io/)
- **Authentication:** [Auth.js 5.0 (Beta)](https://authjs.dev/) (next-auth)
- **Payment Gateway:** [Midtrans 1.4.2](https://midtrans.com/)
- **Forms & Validation:** [Zod](https://zod.dev/)

## ✨ Features

- **User Authentication**: Secure login/signup using Google and Credentials provider.
- **Room Management**: Browse available rooms with detailed descriptions and images.
- **Booking System**: Real-time room availability and reservation management.
- **Payment Integration**: Seamless payment processing via Midtrans.
- **Responsive Design**: Modern UI optimized for both desktop and mobile devices.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd crack-fe-rifqifzan
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and configure the following variables. You can refer to `.env.example` if available.

    ```env
    # Database
    POSTGRES_PRISMA_URL=" "
    POSTGRES_URL_NON_POOLING=" "

    # Next Auth
    AUTH_SECRET=" " # Generate using `npx auth secret`
    AUTH_URL=" "

    # Midtrans
    MIDTRANS_SERVER_KEY=" "
    MIDTRANS_CLIENT_KEY=" "
    ```

4.  **Database Setup:**
    Push the Prisma schema to your database and seed initial data.

    ```bash
    # Generate Prisma Client
    npx prisma generate

    # Push schema to database
    npx prisma db push
    ```

### 🏃‍♂️ Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
.
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utility functions and shared logic
├── prisma/           # Database schema and seed scripts
├── public/           # Static assets (images, fonts)
├── types/            # TypeScript type definitions
├── .env              # Environment variables
└── package.json      # Project dependencies and scripts
```
