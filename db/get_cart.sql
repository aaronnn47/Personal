select p.image, p.description, p.image, p.id
from cart c
join products p on p.id = c.product_id