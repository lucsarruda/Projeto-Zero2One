package com.zero2one.products.controller;

import com.zero2one.products.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/products")
public class ProductsController {

    private Map<String , Product> products = new HashMap<>();

    public ProductsController(){
        Product celular = new Product();
        celular.setId("1");
        celular.setName("iphone");
        celular.setDescricao("iphone x");
        celular.setPrice(1999.99);

        Product celular2 = new Product();
        celular2.setId("2");
        celular2.setName("iphone");
        celular2.setDescricao("iphone x");
        celular2.setPrice(1999.99);

        products.put("1" ,celular);
        products.put("2" ,celular2);
    }

    @GetMapping
    public Collection<Product> get(){
        return products.values();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable("id") String id){
       return products.get(id);
    }

    @PostMapping
    public Product create( @RequestBody Product product ){
        products.put(product.getId() ,product);
        return product;
    }

}
