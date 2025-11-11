.PHONY: install-frontend install-backend dev-desktop dev-wework dev-backend

install-frontend:
	pnpm install

install-backend:
	cd backend && pip install -r requirements.txt

dev-desktop:
	pnpm --filter @strategy/desktop dev

dev-wework:
	pnpm --filter @strategy/wework dev

dev-backend:
	cd backend && python manage.py runserver 0.0.0.0:8000
