
package com.zero2one.products.reposioty;

import java.util.List;

import com.zero2one.products.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Integer> {

}
