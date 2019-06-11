CREATE TABLE sale
(
    sale_id varchar(36) NOT NULL,
    sale_customer varchar(500) NOT NULL,
    PRIMARY KEY (sale_id)
) ENGINE=InnoDB;

CREATE TABLE product_item
(
    product_item_id varchar(36) NOT NULL,
    product_item_quantity DECIMAL(10,2) NOT NULL,
    product_item_product_id varchar(36) NOT NULL,
    product_item_sale_id varchar(36) NOT NULL,
    PRIMARY KEY (product_item_id),
    FOREIGN KEY (product_item_product_id) REFERENCES product(product_id),
    FOREIGN KEY (product_item_sale_id) REFERENCES sale(sale_id)
) ENGINE=InnoDB;



