package com.zero2one.products.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@ApiModel("Produto")
public class Product {

    @Id
    @Column(name = "product_id")
    @ApiModelProperty("Identificador")
    private String id;
    @Column(name = "product_name")
    @ApiModelProperty("Nome do produto")
    private String name;
    @Column(name = "product_description")
    @ApiModelProperty("Descrição do produto")
    private String description;
    @Column(name = "product_price")
    @ApiModelProperty("Preço unitário do produto")
    private Double price;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
