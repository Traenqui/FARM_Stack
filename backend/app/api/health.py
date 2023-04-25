from fastapi import APIRouter, Depends, Response, status, HTTPException
import logging
from uuid import UUID

from database.database import client as db


router = APIRouter()


@router.get('/health/ready', status_code=200)
async def check_db():
    try:
        db.admin.ping()
        return {
            'status': 'UP',
            'checks': [
                {
                    'name': 'databaseReady',
                    'status': 'UP',
                }
            ]
        }
    except Exception as db_exception:
        return {
            'status': 'DOWN',
            'checks': [
                {
                    'name': 'databaseReady',
                    'status': 'DOWN',
                    'message': db_exception
                }
            ]
        }


@router.get('/health')
def check_health():
    ...
