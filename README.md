# Car Clicker - MVC Architecture Study

A React application demonstrating the Model-View-Controller (MVC) architectural pattern. This project showcases how to structure a React application using MVC principles, custom hooks, and component-based architecture.

![MVC Architecture](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/)

## Features

- List of clickable cars
- Detailed view of selected car
- Click counter for each car
- Responsive design
- Unit tests for components and hooks
- JSON Server as mock backend

## Project Structure

```
src/
├── assets/                # Static assets like images
├── components/
│   ├── CarList/          # Car list component
│   ├── CarView/          # Car view component
│   └── Header/           # Header component
├── hooks/                # Custom hooks
│   └── useCarModel.ts    # Car data management hook
├── models/               # Data models
│   └── car.ts           # Car type definitions
├── services/             # API services
│   └── carService.ts    # Car data operations
└── App.tsx              # Main application component
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mvc-architecture-pattern.git
cd mvc-architecture-pattern
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```bash
VITE_API_URL=http://localhost:3001
```

4. Start the JSON Server (mock backend):

```bash
npx json-server --watch db.json --port 3001
```

5. In a new terminal, start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Running Tests

To run the test suite:

```bash
npm test
# or
yarn test
```

## Architecture Overview

This project follows the MVC pattern adapted for React:

- **Model**: Implemented through the `useCarModel` hook and car service
- **View**: React components (`CarList`, `CarView`, etc.)
- **Controller**: Logic within hooks and components handling user interactions

### Key Components

- **CarList**: Displays available cars and handles car selection
- **CarView**: Shows detailed information about the selected car
- **useCarModel**: Custom hook managing car data and interactions

## API Endpoints

The mock API (JSON Server) provides the following endpoints:

- `GET /cars` - Fetch all cars
- `GET /cars/:id` - Fetch a specific car
- `PATCH /cars/:id` - Update car click count

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Team for the amazing framework
- JSON Server for providing an easy way to create a mock backend
- All contributors who help improve this project
