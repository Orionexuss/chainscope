from fastapi import APIRouter, status


router = APIRouter(prefix='/users', tags=['users'])

@router.get("/")
def get_users():
    return {"message": { "users": [ {"name": "Sebastian Vargas"} ] }}


@router.post("/create", status_code=status.HTTP_201_CREATED)
def create_user():
    return {"data":"User created"}
    

