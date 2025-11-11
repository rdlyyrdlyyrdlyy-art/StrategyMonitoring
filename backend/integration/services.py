"""External integration services."""
from dataclasses import dataclass


@dataclass
class WeComUserInfo:
    user_id: str
    name: str
    email: str | None = None


class WeComClient:
    """Placeholder Enterprise WeChat client."""

    def __init__(self, corp_id: str, agent_id: str, secret: str) -> None:
        self.corp_id = corp_id
        self.agent_id = agent_id
        self.secret = secret

    def exchange_code(self, code: str) -> WeComUserInfo:
        # In production this would call 企业微信 API, here return mock response.
        return WeComUserInfo(user_id=code, name='Mock User')
