package com.zero2one.products.controller;

import com.zero2one.products.service.SaleService;
import com.zero2one.products.model.Sale;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.Collection;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
@Api(tags = "Sales")
public class SalesController {

    private SaleService saleService;

    public SalesController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping
    @ApiOperation("Listagem de vendas")
    public Collection<Sale> get() {
        return saleService.findAll();
    }

    @PostMapping
    @ApiOperation("Adição de venda")
    public Sale create(@RequestBody Sale sale) {
        return saleService.save(sale);
    }

}
