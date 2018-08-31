select p.image, p.description, p.price, p.id
from cart c
join products p on p.id = c.product_id