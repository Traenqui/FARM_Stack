from datetime import datetime
from pydantic import BaseModel


class TrackerBase(BaseModel):
    serial_number: str
    model: str
    description: str
    clinet_number: str
    flespi_device_id: str | None = None
    configured_date: datetime | None = None
    configured: bool = False
    sent_out: datetime | None = None
    phone_number: str | None = None
    ICCID: str | None = None
    SIMStatus: str | None = None
    endpoint_id: str | None = None
    endpoint_name: str | None = None
    SIMID: str | None = None
    memo: str | None = None
    FWVersion: str | None = None

    class Config:
        orm_mode = True
