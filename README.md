# Strategy Monitoring Platform

该仓库包含策略监控系统的前后端源码：

- `apps/desktop`：桌面端 Web 前端（React + Ant Design）。
- `apps/wework`：企业微信 H5 前端（React + Ant Design Mobile）。
- `packages/shared`：跨前端共享的类型与工具。
- `backend`：Django 后端服务，提供统一 API 与认证能力。

## 开发准备

1. 安装 Node.js (>=18) 与 pnpm。
2. 前端依赖安装：在仓库根目录执行 `pnpm install`。
3. 后端依赖安装：在 `backend` 目录执行 `pip install -r requirements.txt`。
4. 复制 `.env.example` 为 `.env` 并补充必要配置。

## 运行脚本

- 桌面端：`pnpm --filter @strategy/desktop dev`
- 企业微信端：`pnpm --filter @strategy/wework dev`
- 后端：`python manage.py runserver 0.0.0.0:8000`（在 `backend` 目录）

## 目录规划

后续可在 `docs/` 目录补充业务流程与 API 说明，在 `infrastructure/` 目录维护部署脚本与容器化配置。
