import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">Something went wrong</p>
        <p className="text-gray-600 mb-6">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div> 
  );
}