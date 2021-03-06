package br.com.mk.repository;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import br.com.mk.model.Agente;

public class AgenteRepository {

	@Inject
	private EntityManager manager;

	public void incluir(Agente agente) {
		this.manager.persist(agente);
	}

	public void altera(Agente agente) {
		this.manager.merge(agente);
	}

	public Agente busca(Integer id) {
		return this.manager.find(Agente.class, id);
	}

	public List<Agente> lista() {
		return this.manager.createQuery("select a from Agente a", Agente.class).getResultList();
	}
	
	public void remover(Agente agente){
		manager.remove(agente);
	}
	
	public void remover(Integer id){
		manager.remove(this.busca(id));
	}
}
