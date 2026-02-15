from schemas import Product

def initial_db(db:list):
    db.append(Product(id=1, name="محصول 1", price=100000, description="توضیحات محصول 1",is_amazing=True))
    db.append(Product(id=2, name="محصول 2", price=200000, description="توضیحات محصول 2"))
    db.append(Product(id=3, name="محصول 3", price=300000, description="توضیحات محصول 3"))