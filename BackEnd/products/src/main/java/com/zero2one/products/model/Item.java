package com.zero2one.products.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "product_item")
@ApiModel("Item")
public class Item {

    @Id
    @Column(name = "product_item_id")
    @ApiModelProperty("Identificador")
    private String id;
    @Column(name = "product_item_quantity")
    @ApiModelProperty("Quantidade")
    private Double quantity;
    @JoinColumn(name = "product_item_product_id", referencedColumnName = "product_id", updatable = true)
    @ManyToOne(optional = false, fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @ApiModelProperty("Produto")
    private Product product;
    @JoinColumn(name = "product_item_sale_id", referencedColumnName = "sale_id", updatable = true)
    @ManyToOne(optional = false, fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @ApiModelProperty("Venda")
    @JsonBackReference
    private Sale sale;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public void setSale(Sale sale) {
        this.sale = sale;
    }

    public Sale getSale() {
        return sale;
    }
}
