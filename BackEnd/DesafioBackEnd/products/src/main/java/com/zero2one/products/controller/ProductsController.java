package com.zero2one.products.controller;

import com.zero2one.products.model.Product;
import com.zero2one.products.reposioty.ProductRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.security.Principal;
import java.util.Collection;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
@Api(tags = "Products")
public class ProductsController {

    @Autowired
    private ProductRepository repository;

    @GetMapping
    @ApiOperation("Listagem de produtos")
    public Collection<Product> get(@RequestParam(required = false, value = "description") String description) {
        if (description != null) {
            return repository.findAllByDescription(description);
        }
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") String id, @AuthenticationPrincipal Principal principal) {
        Product product = repository.findById(id).orElse(null);
        if (product == null) {
            return ResponseEntity.notFound()
                    .header("", "")
                    .build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(product);
    }

    @PostMapping
    @Transactional
    public Product create(@RequestBody Product product) {
            return repository.save(product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id) {
        repository.deleteById(id);
    }

}
