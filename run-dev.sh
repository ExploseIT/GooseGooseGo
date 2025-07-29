#!/bin/bash

echo "🔧 Starting Django backend on :8000..."
gnome-terminal -- bash -c "source venv/bin/activate && python manage.py runserver; exec bash"

echo "🚀 Starting Next.js frontend on :3001..."
gnome-terminal -- bash -c "cd frontend && npm run dev; exec bash"

