package com.portfolio.RH.Service;

import com.portfolio.RH.Entity.Persona;
import com.portfolio.RH.Interface.IPersonaService;
import com.portfolio.RH.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {

    @Autowired
    IPersonaRepository ipersonaRepository;

    @Override
    public List<Persona> getPersona() {
        return ipersonaRepository.findAll();

    }

    @Override
    public void crearPersona(Persona persona) {
        ipersonaRepository.save(persona);

    }

    @Override
    public void borrarPersona(int id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public void editarPersona(Persona persona) {
        ipersonaRepository.save(persona);
    }

    @Override
    public Persona findPersona(int id) {
        return ipersonaRepository.findById(id).orElse(null);
    }

}
