from fastapi import APIRouter

from schema.tracker import TrackerBase

router = APIRouter()


@router.get('/')
def get_all_tracker():
    ...


@router.get('/{seriennummer}')
def get_tracker(seriennummer: str, payload: TrackerBase):
    ...
