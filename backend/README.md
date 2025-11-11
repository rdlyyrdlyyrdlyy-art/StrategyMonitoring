# Strategy Monitoring Backend

Django-based backend service providing APIs for the strategy monitoring platform.

## Apps
- `accounts`: 用户与权限、LDAP/企业微信映射。
- `strategy`: 策略需求、审批流程等业务模型。
- `alerts`: 风险预警管理。
- `integration`: 外部系统集成封装（企业微信、LDAP 等）。

## 开发说明
1. 创建虚拟环境并安装依赖：`pip install -r requirements.txt`。
2. 复制 `.env.example` 为 `.env` 并补齐配置。
3. 运行迁移：`python manage.py migrate`。
4. 启动开发服务器：`python manage.py runserver 0.0.0.0:8000`。
