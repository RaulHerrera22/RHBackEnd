
package com.portfolio.RH.Interface;

import com.portfolio.RH.Entity.Persona;
import java.util.List;



public interface IPersonaService {
   
    public List<Persona> getPersona();
    
    public void crearPersona(Persona persona);
    
    public void borrarPersona(int id);
    
    public Persona findPersona(int id);
    
    public void editarPersona(Persona persona);
    

}
