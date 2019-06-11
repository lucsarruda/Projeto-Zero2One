package com.zero2one.products.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "sale")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@ApiModel("Venda")
public class Sale {

    @Id
    @Column(name = "sale_id")
    @ApiModelProperty("Identificador")
    private String id;
    @Column(name = "sale_customer")
    @ApiModelProperty("Cliente")
    private String customer;
    @OneToMany(mappedBy = "sale", cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @ApiModelProperty("Produtos")
    private List<Item> items;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

}
