package com.zero2one.products.reposioty;

import com.zero2one.products.model.Product;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

    List<Product> findAllByDescription(String description);

    List<Product> findAllByDescriptionAndName(String description, String name);


}
