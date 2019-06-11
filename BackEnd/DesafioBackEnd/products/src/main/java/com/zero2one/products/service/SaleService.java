package com.zero2one.products.service;

import com.zero2one.products.model.Item;
import com.zero2one.products.model.Sale;
import com.zero2one.products.reposioty.ItemRepository;
import com.zero2one.products.reposioty.SaleRepository;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

    private SaleRepository repository;
    private ItemRepository itemRepository;

    public SaleService(SaleRepository repository, ItemRepository itemRepository) {
        this.repository = repository;
        this.itemRepository = itemRepository;
    }

    public Sale save(Sale sale) {
        repository.save(sale);
        List<Item> items = sale.getItems();
        for (Item item : items) {
            item.setSale(sale);
            item.setId(UUID.randomUUID().toString());
            itemRepository.save(item);
        }
        return sale;
    }

    public Collection<Sale> findAll() {
        return repository.findAll();
    }
}
