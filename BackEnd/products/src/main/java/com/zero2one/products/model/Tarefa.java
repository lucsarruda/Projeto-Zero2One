package com.zero2one.products.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

@Entity
@Table(name = "tarefa")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@ApiModel("Tarefa")
public class Tarefa {

    //id: 2,
    // nome: "item 2",
    //status: false,
    @Id
    @Column(name = "id")
    @ApiModelProperty("ID Tarefa")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "nome")
    @ApiModelProperty("Nome da Tarefa")
    private String nome;
    @Column(name = "status")
    @ApiModelProperty("Status da Tarefa")
    private Boolean status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
