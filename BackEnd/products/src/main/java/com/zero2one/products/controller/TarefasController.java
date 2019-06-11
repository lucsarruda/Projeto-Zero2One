
package com.zero2one.products.controller;

import com.zero2one.products.model.Tarefa;
import com.zero2one.products.reposioty.TarefaRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.security.Principal;
import java.util.Collection;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tarefas")
@Api(tags = "Tarefas")
public class TarefasController {

    @Autowired
    private TarefaRepository repository;

    @GetMapping
    @ApiOperation("Listagem de Tarefas")
    public Collection<Tarefa> get(@RequestParam(required = false, value = "description") String description) {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") Integer id, @AuthenticationPrincipal Principal principal) {
        Tarefa tarefa = repository.findById(id).orElse(null);
        if (tarefa == null) {
            return ResponseEntity.notFound()
                    .header("", "")
                    .build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(tarefa);
    }

    @PostMapping
    @Transactional
    public Tarefa create(@RequestBody Tarefa tarefa) {
        return repository.save(tarefa);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        repository.deleteById(id);
    }


    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable("id") Integer id, @RequestBody Tarefa tarefa) {
        return repository.findById(id)
                .map(record -> {
                    record.setNome(tarefa.getNome());
                    record.setStatus(tarefa.getStatus());
                    Tarefa updated = repository.save(record);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

}
